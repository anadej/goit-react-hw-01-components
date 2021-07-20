import React from "react";
import data from "../data/index";
import FriendList from "./friendList/FriendList";
import Profile from "./profile/Profile";
import StatisticsList from "./statistics/StatisticsList";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile user={data.user} />
      <StatisticsList title="Upload stats" stats={data.statistics} />
      <FriendList friends={data.friends} />
      <TransactionHistory transactions={data.transactions} />
    </>
  );
};

export default App;
