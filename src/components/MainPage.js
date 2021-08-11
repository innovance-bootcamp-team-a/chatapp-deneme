import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const [username, setUsername] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    history.push({
      pathname: "/rooms",
      state: { username },
    });
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button type="button" onClick={handleLogin}>
        {" "}
        Login
      </button>
    </div>
  );
};

export default MainPage;
