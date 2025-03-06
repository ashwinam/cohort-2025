const AppBar = ({ username, setUsername }) => {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        padding: 20,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Auth System demo</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: 10,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {username ? (
          <>
            <p>Welcome, {username}!</p>
            <button
              onClick={() => setUsername("")}
              style={{
                padding: 10,
                border: "none",
                backgroundColor: "violet",
                borderRadius: 5,
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <p>No user, please log in.</p>
        )}
      </div>
    </div>
  );
};

export default AppBar;
