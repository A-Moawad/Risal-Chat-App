import React, { useState } from "react";
import AddFriendForm from "@/helper/AddFriendForm";
import Chats from "./Chats";

type ChatsProps = {
  addFriendButtonClicked: boolean;
  setAddFriendButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
};function ChatsSection({addFriendButtonClicked, setAddFriendButtonClicked}: ChatsProps) {

  return (
    <>
      {addFriendButtonClicked ? (
        <AddFriendForm />
      ) : (
        <Chats
          addFriendButtonClicked={addFriendButtonClicked}
          setAddFriendButtonClicked={setAddFriendButtonClicked}
        />
      )}
    </>
  );
}

export default Chats;
