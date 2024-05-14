import { getEnv } from "@/utils/env";
import axios, { AxiosError } from "axios";

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<{ error: string; message: string; statusCode: number; }>;
  }
}

export const httpClient = axios.create({
    baseURL: getEnv().apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
