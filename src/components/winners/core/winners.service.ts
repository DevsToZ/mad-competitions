import axios, { AxiosResponse } from "axios";
import { WINNERS_URL } from "../../../lib/axios/consts";
import { DefaultErrorResult, handleError } from "../../../lib/axios/helpers";

export const GetWinners = async ({
  page = 0,
  size = 10,
}: {
  page?: number;
  size?: number;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
  });

  try {
    const response: any = axios.get(`${WINNERS_URL}?${params.toString()}`);
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const AddWinner = async ({
  name,
  competitionName,
  ticketNumber,
  file,
  token,
}: {
  name: string;
  competitionName: string;
  ticketNumber: string;
  file: any;
  token: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.post(
      `${WINNERS_URL}`,
      { name, competitionName, ticketNumber, file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const DeleteWinner = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.delete(`${WINNERS_URL}/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return handleError(error);
  }
};
