import { useContext } from "react";
import { myContext } from "../App";

export default function OtpInputBoxComponent({ refInput, onDone }) {
  const { setDisability } = useContext(myContext);
  return (
    <>
      <input
        ref={refInput}
        type="text"
        className="w-[30px] h-[40px] bg-[#18406a] rounded-sm  mt-5 mr-2 outline-none px-2 text-white"
        onChange={() => {
          onDone();
        }}
      />
    </>
  );
}
