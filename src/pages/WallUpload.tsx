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
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

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

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    async (values) => {
      if (isSubmitting) return;
      setIsSubmitting(true);

      const files: File[] = Array.from(values.images);
      const uploadedUrls: string[] = [];

      toast.loading("Uploading images...", { id: "upload" });

      for (const file of files) {
        if (file.size > 10 * 1024 * 1024) {
          toast.error(`File ${file.name} exceeds 10MB size limit.`, {
            id: "upload",
          });
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
          toast.error(`Failed to upload image: ${file.name}`, {
            id: "upload",
          });
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
        setImagePreviews([]);
        const fileInput = document.getElementById(
          "wall-image-upload"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
        setIsSubmitting(false);
      }, 1000);
    },
    [form, isSubmitting]
  );

  return (
    <div className="pt-20 bg-gradient-to-br from-[#0f051d] via-[#1e0c3a] to-black min-h-screen text-white">
      {/* ✨ HERO SECTION */}
      <div className="relative text-center py-16 mb-16 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 rounded-b-[50px] shadow-
