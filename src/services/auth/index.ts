import { AxiosResponse } from "axios";
import AxiosClient from "../../core/axios";
import authjson from "../../mocks/auth.json";

interface LoginResponse {
  uuid: string;
  token: string;
}
class AuthServices {
  _axios: AxiosClient;
  constructor() {
    this._axios = new AxiosClient();
  }

  login = (email: string, password: string): Promise<LoginResponse> => {
    return this._axios
      .post("/auth/login", { email, password })
      .then((response) => {
        return response.data;
      })
      .catch((_) => {
        return Promise.resolve(authjson.login.response[0]);
      });
  };

  forgotPassword = (email: string): Promise<AxiosResponse> =>
    this._axios.post("/auth/forgot", { email });

  resetPassword = (
    oldPassword: string,
    newPassword: string
  ): Promise<AxiosResponse> =>
    this._axios.post("/auth/reset", { oldPassword, newPassword });

  resetForgottenPassword = (newPassword: string): Promise<AxiosResponse> =>
    this._axios.post("/auth/reset", { newPassword });
}

export default AuthServices;
