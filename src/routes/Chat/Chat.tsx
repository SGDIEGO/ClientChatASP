import { useContext, useEffect, useState } from "react";
import Chatgroup from "../../components/Chatgroup";
import "./Chat.css";
import { ChatCtx } from "./ChatContext";
import { Ichatgroup } from "../../models/chatgroup";

// Example
const groupsExample: Ichatgroup[] = [
  { id: 0, name: "group0" },
  { id: 1, name: "group1" },
  { id: 2, name: "group2" },
  { id: 3, name: "group3" },
  { id: 4, name: "group4" },
];

export default function Chat() {
  const ChatCTX = useContext(ChatCtx);

  const [currentChat, updateCurrentChat] = useState<Ichatgroup | null>(null);

  // When is clicking any chat
  useEffect(() => {
    // Fetch info to the chat
    // Pass info to currentChat
    updateCurrentChat(groupsExample[ChatCTX?.chatgroupClicked as number]);
  }, [ChatCTX?.chatgroupClicked]);

  return (
    <div id="chat">
      {/* Chats */}
      <div id="chatgroup-main">
        {groupsExample.map((chat, id) => (
          <Chatgroup key={id} id={chat.id} name={chat.name}></Chatgroup>
        ))}
        {/* <Chatgroup key={0} id={0} name={"Group0"}></Chatgroup> */}
        {/* <Chatgroup key={1} id={1} name={"Group1"}></Chatgroup> */}
        {/* <Chatgroup key={2} id={2} name={"Group2"}></Chatgroup> */}
        {/* <Chatgroup key={3} id={3} name={"Group3"}></Chatgroup> */}
        {/* <Chatgroup key={4} id={4} name={"Group4"}></Chatgroup> */}
        {/* <p>{ChatCTX?.chatgroupClicked}</p> */}
      </div>

      {/* Principal */}
      <div id="chat-main">
        {currentChat == null ? (
          <>
            <h1>SELECT CHAT</h1>
          </>
        ) : (
          chatOpen(currentChat)
        )}
      </div>
    </div>
  );
}

function chatOpen(chat: Ichatgroup) {
  return (
    <>
      <h1>{chat.name}</h1>
    </>
  );
}
