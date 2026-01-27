import { z } from 'zod';
export const createStudentSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must be at least 3 characters')
        .transform((value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()),
    id: z.string(),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters'),
    age: z.number(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
    dateOfBirth: z.string(),
    bloodGroup: z.enum([
        'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-',
    ]),
    address: z.string(),
    grade: z.string(),
    email: z.string().email('Invalid email'),
    phoneNumber: z.string(),
    guardian: z.object({
        fatherName: z.string(),
        motherName: z.string(),
        phone: z.string(),
    }),
    department: z.string(),
    isActive: z.enum(['active', 'inactive']),
});
export default createStudentSchema;
