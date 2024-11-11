import { LoginError } from "./login-error";
import { LoginSuccess } from "./login-success";

export type LoginResponse = LoginSuccess | LoginError;