import React from "react";
import PropTypes from "prop-types";
import { FriendsListItemStyled } from "./FriendsListItemStyled";

const FriendListItem = ({ friend }) => {
  return (
    <FriendsListItemStyled active={friend.isOnline}>
      <span className="status"></span>
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

FriendListItem.propTypes = {
  friend: PropTypes.object,
};

export default FriendListItem;
