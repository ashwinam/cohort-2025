

export default function OtpInputBoxComponent({ refInput, onDone, otpset }) {
  return (
    <>
      <input
        ref={refInput}
        type="text"
        maxLength="1"
        className="w-[30px] h-[40px] bg-[#18406a] rounded-sm  mt-5 mr-2 outline-none px-2 text-white"
        onChange={(e) => {
          onDone();
          otpset(e.target.value)
        }}
      />
    </>
  );
}
