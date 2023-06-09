import { z } from 'nestjs-zod/z';
export declare const CreateUserSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodPassword;
    role: z.ZodOptional<z.ZodNativeEnum<{
        User: "User";
        Admin: "Admin";
    }>>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: "User" | "Admin" | undefined;
}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: "User" | "Admin" | undefined;
}>;
export declare const UpdateUserSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodPassword>;
}, "strip", z.ZodTypeAny, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}>;
