import styled from "styled-components";

export const TransactionHistoryStyled = styled.div`
  width: 800px;
  margin: 50px auto;

  .transaction-history {
    table-layout: fixed;
    width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  table th {
    background-color: #00bcd5;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    border: 1px solid white;
    padding: 10px;
  }
`;
