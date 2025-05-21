import * as z from "zod";

export const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z
    .string()
    .max(500, {
      message: "Bio must not exceed 500 characters.",
    })
    .optional(),
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-()]+$/, {
      message: "Please enter a valid phone number.",
    })
    .optional(),
  location: z.string().optional(),
  website: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional()
    .or(z.literal("")),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
});
