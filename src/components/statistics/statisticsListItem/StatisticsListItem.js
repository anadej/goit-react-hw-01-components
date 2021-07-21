import React from "react";
import PropTypes from "prop-types";
import { StatisticsListItemStyled } from "./StatisticsListItemStyled";

const StatisticsListItem = ({ stat }) => {
  return (
    <StatisticsListItemStyled>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </StatisticsListItemStyled>
  );
};

StatisticsListItem.propTypes = {
  stat: PropTypes.object,
};

export default StatisticsListItem;
