import styled from 'styled-components';

export const Description = styled.div`
  color: red;
`;
export const Avatar = styled.img`
  margin-top: 50px;
  border-radius: 100%;
  background-color: orange;
  max-width: 70%;
`;

export const Paragraph = styled.p`
  color: grey;
`;

export const Item = styled.li`
  display: flex;
  height: 100%;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  width: calc(100% / 3);
  padding: 20px 0px;
  border-top: 1px solid grey;

  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`;
export const Label = styled.span`
  color: grey;
`;
export const Quantity = styled.span`
  font-weight: 600;
`;
