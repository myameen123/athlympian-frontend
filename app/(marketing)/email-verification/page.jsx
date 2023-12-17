import React from "react";

function EmailVarification() {
  return (
    <div className="container w-full flex flex-col items-center mt-10">
      <div className="max-w-md">
        <div className="mb-4">
          <p className="text-2xl font-bold mb-2">Thank you for registering!</p>
          <p className="text-gray-600 mb-4">
            An email verification has been sent to the email address you
            provided during registration. Please check your email and click the
            verification link, then Login.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailVarification;
