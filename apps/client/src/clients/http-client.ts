import { getEnv } from "@/utils/env";
import axios from "axios";

export const httpClient = axios.create({
    baseURL: getEnv().apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });
