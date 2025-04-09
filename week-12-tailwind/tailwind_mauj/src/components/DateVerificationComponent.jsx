import { useContext } from "react";
import { myContext } from "../App";
import Logo from "./Heading";

export default function DateVerificationComponent() {
  const { setDisability, isDisabled, dateInputRef, setCurrentState } =
    useContext(myContext);
  return (
    <>
      <Logo />
      <div className="text-white text-2xl my-10">Verify Your Age</div>
      <div className="text-gray-400 text-sm">
        Please confirm your birth year. This data will not be stored.
      </div>

      <input
        ref={dateInputRef}
        className="bg-[#18406b] placeholder:text-gray-500 placeholder:text-xs px-3 py-2 mt-5 rounded-md w-70 text-gray-300"
        type="date"
        placeholder="Your Birth Year"
        onChange={() => setDisability(false)}
      />

      <button
        onClick={() => {
          setCurrentState("emailVerification");
          setDisability(true);
        }}
        disabled={isDisabled}
        className={`mt-7 w-70 py-2 rounded-md ${
          dateInputRef.current?.value ? "cursor-pointer" : "cursor-not-allowed"
        } ${
          dateInputRef.current?.value ? "bg-green-400" : "bg-gray-400"
        } text-sm text-white`}
      >
        Continue
      </button>
    </>
  );
}
