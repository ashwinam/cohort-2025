/* eslint-disable react/prop-types */
const Header = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "#E0CF5F",
        padding: "15px 0",
        fontSize: 20,
        fontWeight: "bold",
        color: "#459dc8",
      }}
    >
      {message}
    </div>
  );
};

export default Header;
