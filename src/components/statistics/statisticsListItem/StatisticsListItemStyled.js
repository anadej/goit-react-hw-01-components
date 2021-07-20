import styled from "styled-components";

export const StatisticsListItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  color: white;

  &:nth-child(1) {
    background-color: #4fc4fa;
  }
  &:nth-child(2) {
    background-color: #a23cf5;
  }
  &:nth-child(3) {
    background-color: #e64c66;
  }
  &:nth-child(4) {
    background-color: #20b8c5;
  }
  &:nth-child(5) {
    background-color: green;
  }

  .percentage {
    font-size: 22px;
    margin-top: 5px;
  }
`;
