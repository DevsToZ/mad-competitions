import axios, { AxiosResponse } from "axios";
import { PARTICIPANTS_URL } from "../../../lib/axios/consts";
import { DefaultErrorResult, handleError } from "../../../lib/axios/helpers";

export const Checkout = async ({
  body,
}: {
  body: any;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.post(`${PARTICIPANTS_URL}/checkout`, body);
    return response;
  } catch (error) {
    return handleError(error);
  }
};
