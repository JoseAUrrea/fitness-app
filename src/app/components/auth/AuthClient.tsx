"use client"
import Auth from "./Auth";
import { Authenticator } from "@aws-amplify/ui-react";

const AuthClient = () => {
    return <Authenticator className="mt-10" />;
};

export default AuthClient;