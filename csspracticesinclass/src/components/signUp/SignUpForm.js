import React from "react";
import "./SignUpForm.scss";

const SignUpForm = () => {
  return (
    <div className="signUpForm">
      <div class="signUpForm__heading">
        Sign up to receive analysis like this weekly.
      </div>
      <div class="signUpForm__form">
        <input placeholder="Enter your email address" />
        <button>SIGN UP</button>
      </div>
      <div class="signUpForm__disclaimer">
        Email list is managed by <span>Mailchimp</span>
      </div>
    </div>
  );
};

export default SignUpForm;
