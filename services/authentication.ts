import useSWR from "swr";

interface SignUpData {
  email: string;
  password: string;
}

const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
  const response = await fetch(...args);
  return response.json();
};

export const SignIn = async ({ email, password }: SignUpData) => {
  const url = `${process.env.EXPO_PUBLIC_SERVER_URL}/auth/login`;
  console.log({
    email,
    password,
  });
  const { data, error, isLoading } = useSWR(
    url,
    fetcher(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }) as any
  );
  console.log(data, error, isLoading);
  return { data, error, isLoading };
};
