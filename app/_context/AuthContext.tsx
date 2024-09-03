"use client";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
} from "react";
import axios from "axios";

const initialState: { token: string | null } = {
  token: null,
};

const AuthContext = createContext({
  user: initialState,
  login: (credentials: { email: string; password: string }) =>
    Promise.resolve(),
  logout: () => {},
  register: (userDetails: { email: string; password: string }) =>
    Promise.resolve(),
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in on component mount
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  useLayoutEffect(() => {
    // Add a request interceptor
    axios.interceptors.request.use((config) => {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${user.token}`;
      return config;
    });
  }, [user.token]);

  useLayoutEffect(() => {
    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    // Replace with your actual login API request
    const response: any = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
      credentials
    );
    console.log(response);
    if (response.status === 200) {
      console.log("Registration successful please login");
      localStorage.setItem("token", response.data.token);
      setUser({ token: response.data.token }); // Redirect to a protected route
      router.push("/dashboard");
    }
  };

  const register = async (userDetails: { email: string; password: string }) => {
    // Replace with your actual registration API request
    const response: { success: boolean } = await axios.post(
      "/api/register",
      userDetails
    );
    if (response.success) {
      router.push("/login"); // Redirect to the login page
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(initialState);
    router.push("/login"); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
