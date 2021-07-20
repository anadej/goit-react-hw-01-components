import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";
import { FriendListStyled } from "./FriendListStyled";

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      <ul className="friend-list">
        {friends.map((friend) => (
          <FriendListItem friend={friend} id={friend.id} />
        ))}
      </ul>
    </FriendListStyled>
  );
};

export default FriendList;
