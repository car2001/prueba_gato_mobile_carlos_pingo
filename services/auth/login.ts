import { LoginUserRequest } from "@/models/auth";
import axios from "axios";

// De momento el api key se mantendrá acá pero lo ideal es colocarlo en el archivo .env
const login = (credentials: LoginUserRequest) => {
    const request = axios.post(
        `https://reqres.in/api/login`, 
        credentials,
        {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        }
    );
    return request.then(response => response.data);
}

export default { login }