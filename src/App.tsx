import Chat from "./routes/Chat/Chat";
import { useEffect } from "react";
import "./App.css";
import { ChatCtxProvider } from "./routes/Chat/ChatContext";

function App() {
  // Websocket
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:6969");

    socket.onopen = () => {
      console.log("Connection created");
    };

    socket.onerror = (e) => {
      console.error("Error: ", e);
    };
  }, []);

  return (
    <ChatCtxProvider>
      <Chat></Chat>;
    </ChatCtxProvider>
  );
}

export default App;
