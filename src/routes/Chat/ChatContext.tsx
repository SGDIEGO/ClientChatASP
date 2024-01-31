import React, { PropsWithChildren, useState } from "react";

interface IChatCtx {
  chatgroupClicked: number | null;
  GETchatgroupClicked: React.Dispatch<React.SetStateAction<number | null>>;
}

// Context
export const ChatCtx = React.createContext<IChatCtx | null>(null);

// Context provider
export const ChatCtxProvider = ({ children }: PropsWithChildren) => {
  const [chatgroupClicked, GETchatgroupClicked] = useState<number | null>(null);

  // Value
  const IChatCtxValue: IChatCtx = {
    chatgroupClicked: chatgroupClicked,
    GETchatgroupClicked: GETchatgroupClicked,
  };

  return <ChatCtx.Provider value={IChatCtxValue}>{children}</ChatCtx.Provider>;
};
