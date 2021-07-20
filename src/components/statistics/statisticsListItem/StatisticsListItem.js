import React from "react";
import { StatisticsListItemStyled } from "./StatisticsListItemStyled";

const StatisticsListItem = ({ stat }) => {
  return (
    <StatisticsListItemStyled>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </StatisticsListItemStyled>
  );
};

export default StatisticsListItem;
