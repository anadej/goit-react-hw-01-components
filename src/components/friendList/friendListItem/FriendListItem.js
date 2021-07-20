import React from "react";
import { FriendsListItemStyled } from "./FriendsListItemStyled";

const FrienListItem = ({ friend }) => {
  return (
    <FriendsListItemStyled>
      <span className="status" active={friend.isOnline}></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="friends avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </FriendsListItemStyled>
  );
};

export default FrienListItem;
