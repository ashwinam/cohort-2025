import { useContext } from "react";
import { myContext } from "../App";
import Logo from "./Heading";

export default function EmailComponent() {
  const { setDisability, isDisabled, emailInputRef, setCurrentState } =
    useContext(myContext);
  return (
    <>
      <Logo></Logo>
      <div className="text-white text-2xl my-10 font-bold">
        Let's Get Started
      </div>

      <input
        ref={emailInputRef}
        className="bg-[#18406b] placeholder:text-gray-500 placeholder:text-xs px-3 py-2 mt-5 rounded-md w-70 text-gray-300"
        type="email"
        placeholder="Email ..."
        onChange={() => setDisability(!isDisabled)}
      />

      <button
        onClick={() => setCurrentState("otpVerification")}
        disabled={isDisabled}
        className={`mt-7 w-70 py-2 rounded-md ${
            emailInputRef.current?.value ? "cursor-pointer" : "cursor-not-allowed"
        } ${
            emailInputRef.current?.value ? "bg-green-400" : "bg-gray-400"
        } text-sm text-white`}
      >
        Continue
      </button>
    </>
  );
}
