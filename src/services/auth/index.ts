import { AxiosResponse } from "axios";
import AxiosClient from "../../core/axios";


class AuthServices {
    _axios: AxiosClient
    constructor() {
         this._axios = new AxiosClient()
    }

    login = (email: string, password:string):Promise<AxiosResponse> => this._axios.post("/auth/login",{email,password})

    forgotPassword = (email:string):Promise<AxiosResponse> => this._axios.post("/auth/forgot",{email})

    resetPassword =  (oldPassword: string, newPassword: string):Promise<AxiosResponse> => this._axios.post("/auth/reset",{oldPassword, newPassword})
    
    resetForgottenPassword =  (newPassword: string):Promise<AxiosResponse> => this._axios.post("/auth/reset",{newPassword})
}