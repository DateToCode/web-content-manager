import axios, { AxiosInstance, AxiosResponse } from "axios";

class AxiosClient {

    _axios: AxiosInstance ;

    constructor(){
        this._axios = axios.create({baseURL:"http://localhost"})
    }

    get = (url:string) : Promise<AxiosResponse> =>  {
        return this._axios.get(url);
    };
    post = (url:string, data:any) : Promise<AxiosResponse> =>  {
        return this._axios.post(url, data);
    };
}

export default AxiosClient;