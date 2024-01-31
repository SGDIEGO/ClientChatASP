import { useContext } from "react";
import { Ichatgroup } from "../models/chatgroup";
import { ChatCtx } from "../routes/Chat/ChatContext";

export default function Chatgroup(info: Ichatgroup) {
  const ChatCTX = useContext(ChatCtx);

  return (
    <div
      className="chatgroup box"
      onClick={(e) => {
        ChatCTX?.GETchatgroupClicked(info.id);
      }}
    >
      <h3 className="chatgroup-id">#{info.id}</h3>
      <p className="chatgroup-name">{info.name}</p>

      <b className="chatgroup-online">100</b>
    </div>
  );
}
