import React from "react";
import { Singup as SignupComponent } from "../index"; // Fix the import here

function Signup() {
  return (
    <div className="py-8">
      {console.log("SignUp called")}
      <SignupComponent /> {/* Use the correct component name here */}
    </div>
  );
}

export default Signup;
