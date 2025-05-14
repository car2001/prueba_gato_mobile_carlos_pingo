import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";

import CustomTextInput from "@/components/CustomTextInput";
import { ThemedView as View } from "@/components/ThemedView";
import { UserSchema, userSchema } from "@/lib/schemas/user.schema";
import Avatar from "../Avatar";
import HeaderForm from "../HeaderForm";

interface UserFormProps {
  mode: "add" | "edit";
  userDefaultValues?: any;
}

export const UserForm = ({ mode, userDefaultValues }: UserFormProps) => {

    const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: userDefaultValues || {},
  });

  return (
    <>
      <HeaderForm title={mode === "edit" ? "Editar Usuario" : "Crear Usuario"} onSave={() => console.log("xd")} />
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Avatar styleAvatar={styles.avatar} />
        </View>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              label="Nombre"
              value={value}
              errors={errors?.name}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
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
          name="dni"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              label="DNI"
              keyboardType="numeric"
              value={value}
              errors={errors?.dni}
              onChangeText={onChange}
            />
          )}
        />

        {mode === "add" && (
          <>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="Contraseña"
                  value={value}
                  errors={errors?.password}
                  onChangeText={onChange}
                  secureTextEntry
                />
              )}
            />

            <Controller
              control={control}
              name="repeat_password"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="Repetir Contraseña"
                  value={value}
                  errors={errors?.repeat_password}
                  onChangeText={onChange}
                  secureTextEntry
                />
              )}
            />
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
