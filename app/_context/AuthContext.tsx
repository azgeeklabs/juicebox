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
import { GoogleOAuthProvider } from "@react-oauth/google";
import toast from "react-hot-toast";

const initialState: { token: string | null } = {
  token: null,
};

const AuthContext = createContext({
  user: initialState,
  login: (credentials: { email: string; password: string }) =>
    Promise.resolve(),
  logout: () => {},
  register: (userDetails: {   firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    ISD: string;
    phoneNumber: string;
    DOB: string; }) =>
    Promise.resolve(),
  googleLogin: (response: any) => Promise.resolve(),
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(initialState);
  const router = useRouter();

  function getToken() {
    if (typeof window !== "undefined") {
      const token = typeof window !== "undefined" && localStorage.getItem("token");
      return token ? `${token}` : null;
    } else {
      return `${user?.token}` || null;
    }
  }

  useEffect(() => {
    // Check if the user is logged in on component mount
    const token = getToken()
    if (token) {
      setUser({ token });
    }
  }, []);

  useLayoutEffect(() => {
    // Add a request interceptor
    axios.interceptors.request.use((config) => {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${typeof window !== "undefined" && localStorage.getItem("token")}`;
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
      localStorage.setItem("token", response.data.data.token);
      setUser({ token: response.data.data.token }); // Redirect to a protected route
      router.push("/dashboard");
      (response.data.message, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const register = async (userDetails: {  firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    ISD: string;
    phoneNumber: string;
    DOB: string; }) => {
    // Replace with your actual registration API request
    console.log(userDetails);
    
    const response: { success: boolean,data:any } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`,
      userDetails
    );
    console.log(response);
    
    if (response.data.message == "User created successfully! Please verify your email.") {
      router.push("/login"); // Redirect to the login page
      (response.data.message, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(initialState);
    router.replace("/login"); // Redirect to login page
  };

  const googleLogin = async (response: any) => {
    if (response.token) {
      localStorage.setItem("token", response.token);
      await setUser({ token: response.token });
      router.push("/dashboard");
    }
  };
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

if (!clientId) {
    // throw new Error('Google Client ID is not defined.');
    .error('Google Client ID is not defined.');
}

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, googleLogin }}
    >
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
        {children}
      </GoogleOAuthProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
