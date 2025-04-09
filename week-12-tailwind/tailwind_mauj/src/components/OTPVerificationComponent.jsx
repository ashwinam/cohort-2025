import { useContext, useRef, useState, useEffect } from "react";
import Logo from "./Heading";
import { myContext } from "../App";
import OtpInputBoxComponent from "./OtpInputBox";

export default function OtpVerification() {
  const { setCurrentState, setDisability, isDisabled } = useContext(myContext);
  const [otpInputState1, setOtpInputState1] = useState("");
  const [otpInputState2, setOtpInputState2] = useState("");
  const [otpInputState3, setOtpInputState3] = useState("");
  const [otpInputState4, setOtpInputState4] = useState("");
  const [otpInputState5, setOtpInputState5] = useState("");
  const [otpInputState6, setOtpInputState6] = useState("");
  const otpInputRef1 = useRef(null);
  const otpInputRef2 = useRef(null);
  const otpInputRef3 = useRef(null);
  const otpInputRef4 = useRef(null);
  const otpInputRef5 = useRef(null);
  const otpInputRef6 = useRef(null);

  useEffect(() => {
    setDisability(
      !otpInputState1 ||
      !otpInputState2 ||
      !otpInputState3 ||
      !otpInputState4 ||
      !otpInputState5 ||
      !otpInputState6
    );
  }, [otpInputState1, otpInputState2, otpInputState3, otpInputState4, otpInputState5, otpInputState6]);
  

  return (
    <>
      <Logo />
      <div className="text-white text-2xl my-10 font-bold tracking-wider">
        Check Your Email For A Code
      </div>
      <p className="text-gray-500">
        Please enter the code sent to your email id ashwin@magicpitch.ai
      </p>
      <div className="flex flex-col items-center">
        <div>
          <OtpInputBoxComponent
            refInput={otpInputRef1}
            onDone={() => {
              otpInputRef2.current.focus();
            }}
            otpset={setOtpInputState1}
          />
          <OtpInputBoxComponent
            refInput={otpInputRef2}
            onDone={() => {
              otpInputRef3.current.focus();
            }}
            otpset={setOtpInputState2}
          />
          <OtpInputBoxComponent
            refInput={otpInputRef3}
            onDone={() => {
              otpInputRef4.current.focus();
            }}
            otpset={setOtpInputState3}
          />
          <OtpInputBoxComponent
            refInput={otpInputRef4}
            onDone={() => {
              otpInputRef5.current.focus();
            }}
            otpset={setOtpInputState4}
          />
          <OtpInputBoxComponent
            refInput={otpInputRef5}
            onDone={() => {
              otpInputRef6.current.focus();
            }}
            otpset={setOtpInputState5}
          />
          <OtpInputBoxComponent
            refInput={otpInputRef6}
            onDone={() => {
              otpInputRef6.current.focus();
            }}
            otpset={setOtpInputState6}
          />
        </div>
        <p className="text-gray-600">09:32</p>
      </div>

      <button
        onClick={() => {
          setCurrentState("finalPage");
          setDisability(true);
        }}
        disabled={
            !otpInputState1 ||
            !otpInputState2 ||
            !otpInputState3 ||
            !otpInputState4 ||
            !otpInputState5 ||
            !otpInputState6
          }
        className={`mt-7 w-70 py-2 rounded-md ${
          otpInputRef1.current?.value &&
          otpInputRef2.current?.value &&
          otpInputRef3.current?.value &&
          otpInputRef4.current?.value &&
          otpInputRef5.current?.value &&
          otpInputRef6.current?.value
            ? "cursor-pointer bg-green-400"
            : "cursor-not-allowed bg-gray-400"
        } text-sm text-white`}
      >
        Verify
      </button>
    </>
  );
}
