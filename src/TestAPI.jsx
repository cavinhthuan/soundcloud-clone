import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";

const TestAPI = () => {
  const [status, setStatus] = useState("");
  const context = useContext(AppContext);
  const socket = context.socket;
  useEffect(() => {
    socket.on("connect", () => fetchAPI());
    socket.on("disconnect", () => setStatus(""));
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [socket]);

  const fetchAPI = async () => {
    fetch("/testAPI")
      .then((res) => res.text())
      .then((res) => setStatus(res));
  };
  return (
    <>
      <p className="App-intro">{status}</p>
    </>
  );
};

export default TestAPI;
