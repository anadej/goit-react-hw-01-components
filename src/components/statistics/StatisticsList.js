import React from "react";
import PropTypes from "prop-types";
import StatisticsListItem from "./statisticsListItem/StatisticsListItem";
import { StatisticsListStyled } from "./StatisticsListStyled";

const StatisticsList = ({ title, stats }) => {
  return (
    <StatisticsListStyled>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((stat) => (
          <StatisticsListItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </StatisticsListStyled>
  );
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default StatisticsList;
