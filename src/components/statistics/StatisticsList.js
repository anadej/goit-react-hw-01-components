import React from "react";
import StatisticsListItem from "./statisticsListItem/StatisticsListItem";
import { StatisticsListStyled } from "./StatisticsListStyled";

const StatisticsList = ({ title, stats }) => {
  return (
    <StatisticsListStyled>
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map((stat) => (
          <StatisticsListItem stat={stat} />
        ))}
      </ul>
    </StatisticsListStyled>
  );
};

export default StatisticsList;
