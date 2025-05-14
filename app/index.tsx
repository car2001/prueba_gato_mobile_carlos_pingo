import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedScrollView } from "@/components/ThemedScrollView";
import SignInForm from "@/components/forms/auth/SignInForm";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";

export default function Index() {

    const { onLogin } = useAuth();

    const handleLogin = async (credentials: any): Promise<boolean> => {
        try {
            const oResponse = await onLogin(credentials);
            if(oResponse.token){
                router.navigate("/home")
            }
            
        } catch (exception: any) {

        }
        return false;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedScrollView>
                <SignInForm handleLogin={handleLogin}/>
            </ThemedScrollView>
        </SafeAreaView>
    )
}