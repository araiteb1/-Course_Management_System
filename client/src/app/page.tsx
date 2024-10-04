
import React from "react";
import Login from "../app/(page)/Login/page";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
  const clientid = "";
  return (
    <div className="flex w-full h-full">
      <GoogleOAuthProvider clientId={clientid}>
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}
