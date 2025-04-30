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
import { Upload } from "lucide-react";
import WallAdSpaceGrid from "@/components/WallAdSpaceGrid";
import { supabase } from "@/lib/supabase"; // Supabase client

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  location: z.string().min(5, "Location must be at least 5 characters"),
  size: z.string().min(3, "Please specify the size (e.g., 20ft x 10ft)"),
  price: z.string().min(1, "Please enter the monthly rental price"),
  images: z
    .instanceof(FileList)
    .refine((files) => files && files.length > 0, "Please upload at least one image"),
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

    // Loop through files and upload each one
    for (const file of files) {
      // Optional size check (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`File ${file.name} exceeds 10MB size limit.`);
        return;
      }

      const { data, error } = await supabase.storage
        .from("wall-images")
        .upload(`walls/${Date.now()}-${file.name}`, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type || "image/png", // <-- FIXED LINE
        });

      if (error) {
        toast.error(`Failed to upload image: ${file.name}`);
        return;
      }

      // Get the public URL of the uploaded file
      const url = supabase.storage
        .from("wall-images")
        .getPublicUrl(data.path).data.publicUrl;

      uploadedUrls.push(url);
    }

    // Insert wall data into the database
    const { error: dbError } = await supabase.from("wall_spaces").insert([
      {
        title: values.title,
        location: values.location,
        size: values.size,
        price: values.price,
        image_urls: uploadedUrls,
      },
    ]);

    if (dbError) {
      toast.error("Failed to submit wall data.");
      return;
    }

    toast.success("Wall space listed successfully!");
    form.reset();  // Reset the form after submission
  };

  return (
    <div className="pt-20">
      <div className="bg-[#000080] text-white text-center py-12 mb-10">
        <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#ff8c00] animate-text">
          Monetize Your Wall Space
        </h1>
        <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#ff8c00] animate-text">
          Turn your empty walls into a steady source of income. Upload photos of your wall spaces,
          set a rental price, and attract top advertisers looking for visibility in your area.
        </p>
      </div>

      {/* Upload Form */}
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="title">Wall Space Title</FormLabel> {/* Updated */}
                  <FormControl>
                    <Input id="title" placeholder="e.g., Prime Commercial Wall Space - MG Road" {...field} /> {/* Updated */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="location">Location</FormLabel> {/* Updated */}
                  <FormControl>
                    <Input id="location" placeholder="e.g., MG Road, Bangalore" {...field} /> {/* Updated */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="size">Wall Size</FormLabel> {/* Updated */}
                  <FormControl>
                    <Input id="size" placeholder="e.g., 20ft x 10ft" {...field} /> {/* Updated */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="price">Monthly Rental Price (₹)</FormLabel> {/* Updated */}
                  <FormControl>
                    <Input id="price" type="number" placeholder="e.g., 25000" {...field} /> {/* Updated */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="images">Upload Wall Space Images</FormLabel> {/* Updated */}
                  <FormControl>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="images" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700"> {/* Updated */}
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-4 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            High quality images recommended (MAX. 10MB)
                          </p>
                        </div>
                        <input
                          id="images" // Added 'id' to input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          multiple
                          onChange={(e) => {
                            if (e.target.files) {
                              field.onChange(e.target.files);
                            }
                          }}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                        />
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              List Your Wall Space
            </Button>
          </form>
        </Form>
      </div>

      {/* Example Wall Spaces */}
      <WallAdSpaceGrid />
    </div>
  );
};

export default WallUpload;
