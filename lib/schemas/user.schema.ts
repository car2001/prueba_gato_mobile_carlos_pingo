import { z } from "zod";

export const userSchema = z.object({
    id: z.string().optional(),
    name: z
        .string({required_error: "El campo nombre es obligatorio."})
        .min(1, {message: "El campo nombre es obligatorio."}),
    dni: z
        .string({required_error: "El campo dni es obligatorio"})
        .min(1,{message: "El campo dni es obligatorio"})
        .regex(/^\d{8}$/, "El dni debe contener 8 dígitos"),
    email: z
        .string({required_error: "El campo correo es obligatorio."})
        .email({message: "El campo correo es obligatorio."}),
    password: z
        .string({required_error: "El campo contraseña es obligatorio."})
        .min(1, {message: "El campo contraseña es obligatorio."}),
    repeat_password: z
        .string({required_error: "El campo repetir contraseña es obligatorio."})
        .min(1, {message: "El campo repetir contraseña es obligatorio."})
})

export type UserSchema = z.infer<typeof userSchema>;
