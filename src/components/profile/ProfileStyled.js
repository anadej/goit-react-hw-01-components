import styled from "styled-components";

export const ProfileStyled = styled.div`
  border: 2px solid grey;
  width: 300px;
  margin: 50px auto;
  text-align: center;

  .avatar {
    height: 150px;
    border-radius: 100px;
    border: 1px solid grey;
    margin: 20px auto 0;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
  }
  .tag,
  .location {
    margin-top: 10px;
  }
  .stats {
    display: flex;
    background-color: lightgray;
    border-top: 1px solid black;
    margin-top: 20px;
    height: 100px;
  }
  .stats li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }
  .stats li:not(:last-child) {
    border-right: 1px solid black;
  }

  .label {
    margin-bottom: 5px;
  }
  .quantity {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
`;
