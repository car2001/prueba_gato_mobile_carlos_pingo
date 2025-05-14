import { LoginUserRequest } from "@/models/auth";
import loginService from "@/services/auth/login";
import { createContext, useContext, useEffect, useState } from "react";

import { AUTH_TOKEN_KEY } from "@/constants/StorageConstants";
import useUserStore from "@/stores/UserStore";
import { getItem, removeItem, setItem } from "@/utils/storage";

type AuthStateType = {
    token: string | null;
    authenticated: boolean | null;
    user?: null;
}

interface AuthProps {
    onLogin: (credentials: LoginUserRequest) => Promise<any>;
    onRegister: () =>Promise<any>;
    onLogout: () => Promise<any>;
    authState: AuthStateType;
}

const AuthContext = createContext<AuthProps>({
    onLogin: () => Promise.resolve(),
    onRegister: async () => {},
    onLogout: async () => {},
    authState: { token: null, authenticated: null, user: null }
});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<AuthStateType>({
        token: null,
        authenticated: null,
        user: null
    });

    const {setUsers} = useUserStore();

    useEffect(() => {
        const loadAuthState = async () => {
            const storedToken = await getItem(AUTH_TOKEN_KEY);
            if (storedToken) {
                setAuthState({
                    token: storedToken,
                    authenticated: true,
                });
                
            }
        };
        loadAuthState();
    },[])

    
    const register= async() => {
        alert("Registrarse");
    };

    const login = async (credentials: LoginUserRequest) => {
        const response = await loginService.login(credentials);
        setAuthState({
            token: response.token,
            authenticated: true
        });

        await setItem(AUTH_TOKEN_KEY,response.token);
        return response;
    }

    const logout = async () => {
        await removeItem(AUTH_TOKEN_KEY);
        setAuthState({
            token: null,
            authenticated: false,
            user: null,
        })
    }

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}