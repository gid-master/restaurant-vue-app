import axios from "axios";
import { useCookie } from "@/utils/StorageUtil";
import { IResponse } from "@/interfaces/IResponse";
import { IUser, IAuthentication } from "@/interfaces/IUser";

export const authenticate = async (): Promise<IResponse<IUser>> => {
  return axios.get("user/authenticate");
};

export const login = async (
  authentication: IAuthentication
): Promise<IResponse<IUser>> => {
  const response: IResponse<IUser> = await axios.post(
    "user/login",
    authentication
  );

  if (response.success) {
    useCookie.setItem("authentication", response.data.token);
  }

  return response;
};

export const register = async (
  authentication: IAuthentication
): Promise<IResponse<IUser>> => {
  const response: IResponse<IUser> = await axios.post(
    "user/register",
    authentication
  );

  if (response.success) {
    useCookie.setItem("authentication", response.data.token);
  }

  return response;
};

export const logout = async () => {
  useCookie.removeItem("authentication");
};

export const pushPermission = async (
  pushPermission: string
): Promise<IResponse<boolean>> => {
  return await axios.post("user/push", { pushPermission: pushPermission });
};
