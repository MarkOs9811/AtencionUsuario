import { lazy, Suspense } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayOut from "./auth/layout/AuthLayOut";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";

const ChatLayOut = lazy(async () => {
  await sleep(1500); // Simulate a delay for demonstration purposes
  return import("./chat/layout/ChatLayOut");
});

const ChatPages = lazy(async () => import("./chat/pages/ChatPages"));
const NoChatSelectedPage = lazy(
  async () => import("./chat/pages/NoChatSelectedPage"),
);

import { sleep } from "./lib/sleep";
import PrivateRoute from "./auth/components/PrivateRoute";
import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "./fake/fake-data";

export const AppRouter = () => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
      return checkAuth(token);
    },
    retry: 0,
  });

  if (isLoading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        role="status"
        aria-label="Cargando"
      >
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-950" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayOut />}>
          {/* <Route path="login" element={<Login />} />*/}
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense
              fallback={
                <div
                  className="flex min-h-screen items-center justify-center"
                  role="status"
                  aria-label="Cargando"
                >
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-950" />
                </div>
              }
            >
              <PrivateRoute isAuthenticated={!!user}>
                <ChatLayOut />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPages />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
