import styled from "styled-components";

export const TransactionItemStyled = styled.tr`
  &:nth-child(2n) {
    background-color: #ecf1f4;
  }

  td {
    padding: 10px;
    border: 1px solid #ecf1f4;

    font-size: 18px;
    text-align: center;
    color: #5d6266;
  }
`;
