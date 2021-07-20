import styled from "styled-components";

export const FriendsListItemStyled = styled.li`
  display: flex;
  align-items: center;
  height: 75px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 10px;

  .status {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? `green` : `red`)};
    margin-left: 20px;
  }
  .avatar {
    margin-left: 20px;
  }
  .name {
    margin-left: 20px;
    font-size: 25px;
    font-weight: 700;
  }
`;
