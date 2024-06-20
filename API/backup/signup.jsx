import React from "react";
import { Toaster } from "react-hot-toast";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiProfileFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useSignupViewModel from "../viewmodels/SignupViewModel";
import "./Signup.css";


const Signup = () => {
  const navigate = useNavigate(); 
  const {formData, handleChange, handleSubmit,errors, borderColor} = useSignupViewModel();

  return (
    <div className=" outer bg-gradient-to-br from-[#B6EBF1] via-[#43B49A] to-[#1E3B8A] w-full min-h-screen flex items-center justify-center">
      <form className="flex rounded-lg " onSubmit={handleSubmit}>
        {/* image-area */}
        <div className="image-area w-1/2 bg-white p-8">
          <img src="login.png" alt=" image" />
        </div>

        {/* form-area */}
        <div className=" form-area p-8">
          <div className="signup-text">
            <h1>Sign up</h1>
            <h3>Join our job network by providing your details</h3>
          </div>

          {/* form-input-field */}
          <div className="form-input">
            <label htmlFor="name">Full name</label>
            <div className={`input-name ${errors.name ? 'error' : ''} `}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <RiProfileFill className="sm:w-6 sm:h-6 text-emerald-500" />
            </div>
            {errors.name
             && <div className="text-red-500 text-xs">{errors.name}</div>}

            <label htmlFor="email">Email</label>
            <div className={`input-email ${errors.email ? 'error' : ''} `}>
              <input
                type="text"
                name="email"
                id="email"
                className=""
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <MdEmail className="sm:w-6 sm:h-6 text-emerald-500" />
            </div>
            {errors.email
             && <div className="text-red-500 text-xs">{errors.email}</div>}

            <label htmlFor="phone-number">Phone Number</label>
            <div className={`input-phone ${errors.phone ? 'error' : ''} `}>
              <input
                type="text"
                name="phone"
                id="phone"
                className=""
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              <IoPerson className="sm:w-6 sm:h-6 text-emerald-500" />
            </div>
            {errors.phone
             && <div className="text-red-500 text-xs">{errors.phone}</div>}


            <label htmlFor="password">Password</label>
            <div className= {`input-password ${errors.password ? 'error' : ''} `}>
              <input
                type="password"
                name="password"
                id="password"
                className=""
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <RiLockPasswordFill className="sm:w-6 sm:h-6 text-emerald-500" />
            </div>
            {errors.password
             && <div className="text-red-500 text-xs">{errors.password}</div>}
            <label htmlFor="confirm-password">Confirm password</label>
            <div className= {`input-confirm-password ${errors.confirmPassword ? 'error' : ''} `}>
              <input
                type="password"
                name="confirmPassword"
                id="Confirmpassword"
                className=""
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <RiLockPasswordFill className="sm:w-6 sm:h-6 text-emerald-500" />
            </div>
            {errors.confirmPassword
             && <div className="text-red-500 text-xs">{errors.confirmPassword}</div>}

            <div className="policy">
              <input
                type="checkbox"
                className="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              <h3>By signing you agree to our Terms and Privacy Policy.</h3>
            </div>

            {/* submit-button */}
            <button type="submit" onClick={handleSubmit}>
              SignUp
            </button>
          </div>
          <div className="login">
            <h2>Already a member?</h2>
            <a onClick={() => navigate("/login")}>Login</a>
          </div>
        </div>
      </form>

      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default Signup;
