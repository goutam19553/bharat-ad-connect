import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UploadCloud } from "lucide-react";
import { supabase } from "@/lib/supabase";
import WallAdSpaceGrid from "@/components/WallAdSpaceGrid";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  location: z.string().min(5, "Location must be at least 5 characters"),
  size: z.string().min(3, "Specify the size (e.g., 20ft x 10ft)"),
  price: z.string().min(1, "Enter the monthly rental price"),
  images: z
    .instanceof(FileList)
    .refine((files) => files?.length > 0, "Please upload at least one image"),
});

type FormValues = z.infer<typeof formSchema>;

const WallUpload: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      size: "",
      price: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const files = Array.from(values.images || []);
    const uploadedUrls: string[] = [];

    toast.loading("Uploading images...");

    for (const file of files) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`File ${file.name} exceeds 10MB.`);
        return;
      }

      const { data, error } = await supabase.storage
        .from("wall-images")
        .upload(`walls/${Date.now()}-${file.name}`, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type || "image/png",
        });

      if (error) {
        toast.error(`Failed to upload ${file.name}`);
        return;
      }

      const url = supabase.storage
        .from("wall-images")
        .getPublicUrl(data.path).data.publicUrl;

      uploadedUrls.push(url);
    }

    const { error: dbError } = await supabase.from("wall_spaces").insert([{
      title: values.title,
      location: values.location,
      size: values.size,
      price: values.price,
      image_urls: uploadedUrls,
    }]);

    if (dbError) {
      toast.error("Submission failed.");
      return;
    }

    toast.success("Wall space listed!");
    form.reset();
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="max-w-xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100 mb-6">
          📍 List Your Wall Space
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Prime Wall - MG Road" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. MG Road, Bengaluru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Size */}
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 20ft x 10ft" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monthly Price (₹)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 25000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Upload */}
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Images</FormLabel>
                  <FormControl>
                    <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-xl cursor-pointer bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition">
                      <div className="flex flex-col items-center justify-center pt-4 pb-6">
                        <UploadCloud className="w-8 h-8 text-zinc-500" />
                        <p className="text-sm text-zinc-500">Click or drag & drop</p>
                        <p className="text-xs text-zinc-400">Max size: 10MB</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files) field.onChange(e.target.files);
                        }}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full text-lg py-6">
              🚀 List Wall Space
            </Button>
          </form>
        </Form>
      </div>

      {/* Display Grid */}
      <div className="mt-12">
        <WallAdSpaceGrid />
      </div>
    </div>
  );
};

export default WallUpload;
