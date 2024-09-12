import styled from 'styled-components';
export const Status = styled.span`
  border-radius: 50%;
  margin: auto 1.7rem;
  display: inline-block;
  height: 25px;
  width: 25px;
  border: 1px solid transparent;
  background-color: ${props => (JSON.parse(props.line) ? 'green' : 'red')};
`;
export const FriendCard = styled.li`
  display: flex;
  gap: 10px;
  width: 500px;
  background-color: white;
  border: 1px solid orange;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  &:hover {
    scale: 1.05;
  }
`;
export const FriendsAvatar = styled.img`
  border-radius: 10px;
  background-color: orange;
  width: 100px;
`;
