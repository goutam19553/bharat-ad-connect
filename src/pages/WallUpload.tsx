import React, { useCallback, useState } from "react";
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
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  location: z.string().min(5, "Location must be at least 5 characters"),
  size: z.string().min(3, "Please specify the size (e.g., 20ft x 10ft)"),
  price: z.string().min(1, "Please enter the monthly rental price"),
  images: z
    .any()
    .refine(
      (files) => files instanceof FileList && files.length > 0,
      "Please upload at least one image"
    ),
});

type FormValues = z.infer<typeof formSchema>;

const WallUpload: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      size: "",
      price: "",
      images: undefined,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = useCallback(async (values) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const files: File[] = Array.from(values.images);
    const uploadedUrls: string[] = [];

    toast.loading("Uploading images...", { id: "upload" });

    for (const file of files) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`File ${file.name} exceeds 10MB size limit.`, { id: "upload" });
        setIsSubmitting(false);
        return;
      }

      const { data, error } = await supabase.storage
        .from("wall-images")
        .upload(`walls/${Date.now()}-${file.name}`, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type || "image/png",
        });

      if (error || !data?.path) {
        toast.error(`Failed to upload image: ${file.name}`, { id: "upload" });
        setIsSubmitting(false);
        return;
      }

      const publicUrl = supabase.storage
        .from("wall-images")
        .getPublicUrl(data.path).data?.publicUrl;

      if (publicUrl) {
        uploadedUrls.push(publicUrl);
      }
    }

    const { error: dbError } = await supabase.from("wall_spaces").insert([
      {
        title: values.title,
        location: values.location,
        size: values.size,
        price: Number(values.price),
        image_urls: uploadedUrls,
      },
    ]);

    if (dbError) {
      toast.error("Failed to submit wall data.", { id: "upload" });
      setIsSubmitting(false);
      return;
    }

    toast.success("Wall space listed successfully!", { id: "upload" });

    setTimeout(() => {
      form.reset();
      const fileInput = document.getElementById("wall-image-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      setIsSubmitting(false);
    }, 1000);
  }, [form, isSubmitting]);

  // Same imports as before
// Only component JSX below has changed

return (
  <div className="pt-20 bg-gradient-to-br from-[#0f051d] via-[#1e0c3a] to-black min-h-screen text-white">
    {/* ✨ HERO SECTION */}
    <div className="relative text-center py-16 mb-16 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 rounded-b-[50px] shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-walls.jpg')] bg-cover bg-center opacity-20 blur-sm"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
          Monetize Your Wall Space
        </h1>
        <p className="text-lg text-purple-100 leading-relaxed">
          Upload high-visibility wall spaces from your property and turn them into a revenue stream
          by attracting top advertisers across India.
        </p>
      </div>
    </div>

    {/* 📝 FORM SECTION */}
    <div className="max-w-3xl mx-auto p-8 bg-black/80 border border-purple-700 rounded-2xl shadow-2xl backdrop-blur">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {["title", "location", "size", "price"].map((fieldKey) => (
            <FormField
              key={fieldKey}
              control={form.control}
              name={fieldKey as keyof FormValues}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-300 text-sm font-semibold uppercase tracking-wider">
                    {fieldKey === "title"
                      ? "Wall Space Title"
                      : fieldKey === "location"
                      ? "Location"
                      : fieldKey === "size"
                      ? "Wall Size"
                      : "Monthly Rental Price (₹)"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={fieldKey === "price" ? "number" : "text"}
                      placeholder={
                        fieldKey === "title"
                          ? "e.g., Prime Wall - Andheri East"
                          : fieldKey === "location"
                          ? "e.g., Andheri East, Mumbai"
                          : fieldKey === "size"
                          ? "e.g., 25ft x 12ft"
                          : "e.g., 15000"
                      }
                      className="bg-zinc-900 border border-zinc-700 placeholder-gray-400 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* 📸 IMAGE UPLOAD */}
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-300 text-sm font-semibold uppercase tracking-wider">
                  Upload Wall Space Images
                </FormLabel>
                <FormControl>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="wall-image-upload"
                      className="flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-purple-600 rounded-xl cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition duration-300"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-purple-400 animate-bounce" />
                        <p className="mb-2 text-sm text-purple-300">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-purple-500">
                          High quality images recommended (MAX. 10MB)
                        </p>
                      </div>
                      <input
                        id="wall-image-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={(e) => field.onChange(e.target.files)}
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

          {/* 🚀 SUBMIT BUTTON */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold py-3 rounded-xl hover:scale-105 active:scale-100 transition-transform shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Uploading..." : "🚀 List Your Wall Space"}
          </Button>
        </form>
      </Form>
    </div>

    {/* 🧱 WALL GRID PREVIEW */}
    <div className="mt-20">
      <WallAdSpaceGrid />
    </div>
  </div>
);
};

export default WallUpload;
