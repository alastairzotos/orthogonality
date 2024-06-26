import getConfig from "next/config";

export const getEnv = () => ({
  apiUrl: getConfig().publicRuntimeConfig.NEXT_PUBLIC_API_URL as string || 'http://localhost:3000/api/v1',
})
