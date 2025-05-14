import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet } from "react-native";

import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { ThemedText as Text } from "@/components/ThemedText";
import { ThemedView as View } from "@/components/ThemedView";
import Title from "@/components/Title";
import { SignInSchema, signInSchema } from "@/lib/schemas/signInValidation.schema";


interface LoginFormProps {
    handleLogin: (credentials: any) => Promise<boolean>;
}

const SignInForm = ({handleLogin}: LoginFormProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const signInDefaultValues = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    const {
        control, 
        handleSubmit, 
        formState: {errors}
    } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: signInDefaultValues
    });

    const onSubmit = async(data: SignInSchema) => {
        setIsLoading(true);
        await handleLogin(data);
        setIsLoading(false);
    }

    return(
        <View style={styles.container}>
            <Title text="Iniciar Sesión" />
            <Text style={styles.subtitle}>
                Nos alegra verte de vuelta. Ingresa con tu cuenta para continuar tu experiencia
            </Text>
            <Controller 
                control={control}
                name="email"
                render={({field:{onChange, value}}) => (
                    <CustomTextInput 
                        label="Correo"
                        value={value}
                        errors={errors?.email}
                        onChangeText={onChange}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({field:{onChange, value}})=> (
                    <CustomTextInput 
                        label="Contraseña"
                        value={value}
                        errors={errors?.password}
                        onChangeText={onChange}
                        secureTextEntry
                    />
                )}
            />

            <Pressable onPress={() => console.log("Recuperar contraseña")}>
            {({ pressed }) => (
                <Text
                style={[
                    styles.linkText,
                    { opacity: pressed ? 0.5 : 1, alignSelf: 'flex-end' }
                ]}
                >
                ¿Olvidé mi contraseña?
                </Text>
            )}
            </Pressable>

            <CustomButton
                onPress={handleSubmit(onSubmit)}
                isLoading={isLoading}
                styleButton={styles.loginButton}
                styleButtonText={styles.loginButtonText}
                text="Ingresar"
            />

            <Pressable onPress={() => console.log("Ir a registro")}>
                {({ pressed }) => (
                    <Text style={{alignSelf:"center"}}>
                        ¿Aún no tienes una cuenta?{' '}
                        <Text
                            style={[
                            styles.linkText,
                            { opacity: pressed ? 0.5 : 1 }
                            ]}
                        >
                            Regístrate
                        </Text>
                    </Text>
                )}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: 70
    },
    subtitle: {
        fontWeight: 400,
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 20,
        color: "#475569"
    },
    linkText: {
      color: "#4608AD",
      fontWeight: "600",
      textAlign: "center",
      marginVertical: 10,
    },
    loginButton: {
        marginTop: 30,
        marginBottom: 50
    },
    loginButtonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    }
});

export default SignInForm;