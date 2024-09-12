import styled from 'styled-components';

export const Card = styled.div`
  width: 500px;

  background-color: white;
  border: 1px solid orange;
  border-radius: 8px;
  text-align: center;
  &:hover {
    scale: 1.05;
  }
`;
export const Flexlist = styled.ul`
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  margin-bottom: 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const CommonList = styled.ul`
  margin-top: 0;
  flex-direction: column;
  display: flex;
  gap: 10px;
  justify-content: space-around;

  margin-bottom: 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const Name = styled.p`
  font-weight: 600;
  font-size: 30px;
`;
