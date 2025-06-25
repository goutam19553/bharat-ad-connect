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
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  adType: z.string().min(1, "Please select an ad space type"),
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

const AdSpaceUpload: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      adType: "",
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
        .from("ad-space-images")
        .upload(`ad-spaces/${Date.now()}-${file.name}`, file, {
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
        .from("ad-space-images")
        .getPublicUrl(data.path).data?.publicUrl;

      if (publicUrl) {
        uploadedUrls.push(publicUrl);
      }
    }

    const { error: dbError } = await supabase.from("ad_spaces").insert([{
      title: values.title,
      ad_type: values.adType,
      location: values.location,
      size: values.size,
      price: Number(values.price),
      image_urls: uploadedUrls,
    }]);

    if (dbError) {
      toast.error("Failed to submit ad space data.", { id: "upload" });
      setIsSubmitting(false);
      return;
    }

    toast.success("Ad space listed successfully!", { id: "upload" });

    setTimeout(() => {
      form.reset();
      const fileInput = document.getElementById("ad-image-upload") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
      setPreviewUrls([]);
      setIsSubmitting(false);
    }, 1000);
  }, [form, isSubmitting]);

  return (
    <div className="pt-20 bg-gradient-to-b from-indigo-950 via-purple-900 to-black min-h-screen">
      <div className="text-center py-12 mb-10 bg-gradient-to-r from-purple-800 to-indigo-800 shadow-xl rounded-b-[50px]">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
          List Your Ad Space
        </h1>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          Whether it’s a wall, hoarding, auto, shop, or rooftop — turn it into income. Upload details of your space and attract advertisers across India.
        </p>
      </div>

      <div className="max-w-3xl mx-auto p-8 bg-zinc-950 border border-purple-800 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)] backdrop-blur-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-300">Listing Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g., Auto Billboard in Andheri East" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="adType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-300">Type of Ad Space</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-3 rounded-md bg-zinc-800 text-white border border-zinc-700"
                    >
                      <option value="">Select...</option>
                      <option value="Wall">Wall</option>
                      <option value="Hoarding">Hoarding</option>
                      <option value="Auto Rickshaw">Auto Rickshaw</option>
                      <option value="Shop Front">Shop Front</option>
                      <option value="Rooftop">Rooftop</option>
                      <option value="Mall">Mall</option>
                      <option value="Bus">Bus</option>
                      <option value="Digital Screen">Digital Screen</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {["location", "size", "price"].map((fieldKey) => (
              <FormField
                key={fieldKey}
                control={form.control}
                name={fieldKey as keyof FormValues}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-300">
                      {fieldKey === "location"
                        ? "Location"
                        : fieldKey === "size"
                        ? "Ad Space Size (e.g. 10ft x 8ft)"
                        : "Monthly Rent (₹)"}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type={fieldKey === "price" ? "number" : "text"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-300">Upload Images (1–3)</FormLabel>
                  <FormControl>
                    <div className="flex flex-col items-center justify-center w-full">
                      <label
                        htmlFor="ad-image-upload"
                        className="flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-purple-600 rounded-xl cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition duration-300"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-4 text-purple-400" />
                          <p className="mb-2 text-sm text-purple-300">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-purple-500">Max size 10MB per image</p>
                        </div>
                        <input
                          id="ad-image-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          multiple
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files && files.length > 0) {
                              const urls = Array.from(files).map((file) =>
                                URL.createObjectURL(file)
                              );
                              setPreviewUrls(urls);
                            }
                            field.onChange(e.target.files);
                          }}
                          onBlur={field.onBlur}
                          name={field.name}
                          ref={field.ref}
                        />
                      </label>

                      {previewUrls.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 w-full">
                          {previewUrls.map((url, index) => (
                            <img
                              key={index}
                              src={url}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-40 object-cover rounded-lg border border-purple-600"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold py-3 rounded-lg hover:brightness-110 transition-all shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Uploading..." : "List Your Ad Space"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AdSpaceUpload;
