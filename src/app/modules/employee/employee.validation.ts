import { z } from "zod";

const nameSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().refine(value => /^[a-zA-Z]+$/.test(value), {
    message: "Last name must contain only alphabets",
  }),
});

const addressSchema = z.object({
  country: z.string(),
  city: z.string(),
});

const employeeSchema = z.object({
  id: z.string(),
  name: nameSchema,
  age: z.string(),
  dateOfBirth: z.string(),
  email: z.string().email(),
  address: addressSchema,
  phoneNumber: z.string(),
  position: z.string(),
  gender: z.enum(["Male", "Female", "other"]),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  isActive: z.string().default("active"),
  profile: z.string(),
  hobby: z.string().optional(),
});

export const employeeValidationSchema = employeeSchema;
