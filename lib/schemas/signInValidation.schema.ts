import { z } from "zod";

export const signInSchema = z.object({
    email: z
        .string({required_error: "El campo correo es obligatorio."})
        .email({message: "El campo correo es obligatorio."}),
    password: z
        .string({required_error: "El campo contraseña es obligatorio."})
        .min(1, {message: "El campo contraseña es obligatorio."})
})

export type SignInSchema = z.infer<typeof signInSchema>;
