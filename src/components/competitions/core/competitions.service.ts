import axios, { AxiosResponse } from "axios";
import { DefaultErrorResult, handleError } from "../../../lib/axios/helpers";
import {
  COMPETITIONS_URL,
  LOGIN_URL,
  PARTICIPANTS_URL,
} from "../../../lib/axios/consts";

export const GetCompetitions = async ({
  page = 0,
  size = 10,
  tag,
}: {
  page?: number;
  size?: number;
  tag?: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  const params = new URLSearchParams({
    page: page.toString(),
    size: size.toString(),
  });

  if (tag) {
    params.append("tag", tag);
  }

  try {
    const response: any = axios.get(`${COMPETITIONS_URL}?${params.toString()}`);
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const GetCompetitionById = async ({
  id,
}: {
  id: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.get(`${COMPETITIONS_URL}/${id}`);
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const AddCompetition = async ({
  title,
  description,
  question,
  endTime,
  alternativePrize,
  tag,
  pricePerTicket,
  maxNumberOfTickets,
  images,
  token,
}: {
  title: string;
  description: string;
  question: {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    correctAnswer: string;
  };
  endTime: string;
  alternativePrize: string;
  tag: string;
  pricePerTicket: string;
  maxNumberOfTickets: string;
  images: File[];
  token: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append("files", image);
  });
  formData.append("title", title);
  formData.append("description", description);
  formData.append("question.question", question.question);
  formData.append("question.answer1", question.answer1);
  formData.append("question.answer2", question.answer2);
  formData.append("question.answer3", question.answer3);
  formData.append("question.correctAnswer", question.correctAnswer);
  formData.append("endTime", `${endTime}:00`);
  formData.append("alternativePrize", alternativePrize);
  formData.append("tag", tag);
  formData.append("pricePerTicket", pricePerTicket);
  formData.append("maxNumberOfTickets", maxNumberOfTickets);
  try {
    const response: any = axios.post(`${COMPETITIONS_URL}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const DeleteCompetition = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.delete(`${COMPETITIONS_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const GetParticipants = async ({
  id,
  token,
}: {
  id: string;
  token: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.get(`${PARTICIPANTS_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return handleError(error);
  }
};

export const Login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<any | DefaultErrorResult | AxiosResponse<any, any>> => {
  try {
    const response: any = axios.post(`${LOGIN_URL}`, {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    return handleError(error);
  }
};
