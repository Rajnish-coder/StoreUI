import React from "react";
import { useAuth } from "../store/auth-context";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
