"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { BeatLoader, PuffLoader } from "react-spinners";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(20),
});

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "An error occurred while submitting the form.",
      });
    }
  };

  return (
    <form className="my-8 space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <div>
      <input
        {...register("name")}
        type="text"
        placeholder="Name"
        className="w-full bg-gray-100 border border-gray-400 px-4 py-3.5 outline-none text-sm dark:bg-[#333333]"
      />
      {errors.name && (
        <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
      )}
      </div>
      <div>
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="w-full bg-gray-100 border border-gray-400 px-4 py-3.5 outline-none text-sm dark:bg-[#333333]"
      />
      {errors.email && (
        <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
      )}
      </div>
      <div>
      <textarea
        {...register("message")}
        cols={40}
        rows={10}
        placeholder="Message"
        className="w-full bg-gray-100 border border-gray-400 px-4 py-3.5 outline-none text-sm dark:bg-[#333333]"
      />
      {errors.message && (
        <div className="text-red-500 text-sm mt-1">{errors.message.message}</div>
      )}
      </div>

      <button disabled={isSubmitting} type="submit" className="mt-4 text-white bg-black px-7 py-3.5 min-w-[172px] text-center flex justify-center items-center">
        {isSubmitting ? <PuffLoader color="white" size={24}/> : "Send Message"}
      </button>
      {errors.root && (
        <div className="text-red-500">{errors.root.message}</div>
      )}
    </form>
  );
};

export default ContactForm;
