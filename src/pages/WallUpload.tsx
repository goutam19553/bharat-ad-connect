import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    // Upload images to Supabase Storage
    const uploadedImageUrls: string[] = [];

    for (let i = 0; i < values.images.length; i++) {
      const imageFile = values.images[i];
      const fileName = `${Date.now()}-${imageFile.name}`;
      
      // Upload image to the 'wall_images' bucket
      const { data, error: uploadError } = await supabase.storage
        .from("wall_images")
        .upload(fileName, imageFile, {
          cacheControl: "3600",
          upsert: false, // Avoid overwriting the same file
        });

      if (uploadError) {
        toast.error(`Error uploading image: ${uploadError.message}`);
        return;
      }

      // Get the public URL of the uploaded image
      const publicUrl = supabase.storage.from("wall_images").getPublicUrl(fileName).publicURL;
      uploadedImageUrls.push(publicUrl);
    }

    // Insert the form data and image URLs into the 'wall_spaces' table
    const { error: insertError } = await supabase.from("wall_spaces").insert([
      {
        title: values.title,
        location: values.location,
        size: values.size,
        price: values.price,
        images: uploadedImageUrls, // Store the image URLs in the table
      },
    ]);

    if (insertError) {
      toast.error(`Error inserting data: ${insertError.message}`);
    } else {
      toast.success("Wall space listed successfully!");
    }
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-indigo-950 via-purple-900 to-black min-h-screen">
      <div className="text-center py-12 mb-10 bg-gradient-to-r from-purple-800 to-indigo-800 shadow-xl rounded-b-[50px]">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
          Monetize Your Wall Space
        </h1>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          Turn your empty walls into a steady source of income. Upload photos of your wall spaces,
          set a rental price, and attract top advertisers looking for visibility in your area.
        </p>
      </div>

      {/* Upload Form */}
      <div className="max-w-3xl mx-auto p-8 bg-zinc-950 border border-purple-800 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)] backdrop-blur-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {["title", "location", "size", "price"].map((fieldKey, index) => (
              <FormField
                key={fieldKey}
                control={form.control}
                name={fieldKey as keyof FormValues}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-300 text-sm font-medium tracking-wide">
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
                            ? "e.g., Prime Commercial Wall Space - MG Road"
                            : fieldKey === "location"
                            ? "e.g., MG Road, Bangalore"
                            : fieldKey === "size"
                            ? "e.g., 20ft x 10ft"
                            : "e.g., 25000"
                        }
                        className="bg-zinc-800 border border-zinc-700 placeholder-gray-500 text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
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
                  <FormLabel className="text-purple-300 text-sm font-medium tracking-wide">
                    Upload Wall Space Images
                  </FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-purple-600 rounded-xl cursor-pointer bg-zinc-800 hover:bg-zinc-700 transition duration-300">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-4 text-purple-400" />
                          <p className="mb-2 text-sm text-purple-300">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-purple-500">
                            High quality images recommended (MAX. 10MB)
                          </p>
                        </div>
                        <input
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

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold py-3 rounded-lg hover:brightness-110 transition-all shadow-lg"
            >
              List Your Wall Space
            </Button>
          </form>
        </Form>
      </div>

      {/* Example Wall Spaces */}
      <div className="mt-16">
        <WallAdSpaceGrid />
      </div>
    </div>
  );
};

export default WallUpload;
