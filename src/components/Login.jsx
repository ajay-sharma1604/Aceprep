import React from "react";
import Form from "./LogIn/Form";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  return (
    <div>
      <GoogleOAuthProvider clientId="536203429777-qvvtvk1rd6qie6coee68645gadov8f8r.apps.googleusercontent.com">
        <Form />
      </GoogleOAuthProvider>
      `` ;
    </div>
  );
}

<GoogleLogin
  onSuccess={(cred) => {
    console.log(cred);
  }}
  onerror={() => {
    console.log("error");
  }}
/>;

export default Login;
