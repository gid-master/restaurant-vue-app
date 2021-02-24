import axios from "axios";
import { IResponse } from "@/interfaces/IResponse";
import { IProduct } from "@/interfaces/IProduct";

export const getAllProducts = async (): Promise<IResponse<IProduct[]>> => {
  return axios.get("product");
};
