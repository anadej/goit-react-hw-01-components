import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem";
import { FriendListStyled } from "./FriendListStyled";

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      <ul className="friend-list">
        {friends.map((friend) => (
          <FriendListItem friend={friend} key={friend.id} />
        ))}
      </ul>
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
