import styled from 'styled-components';
export const TittleH2 = styled.h2`
  text-transform: uppercase;
`;
export const ColoredItems = styled.li`
  display: flex;
  background-color: ${props => props.color};
  height: 100%;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  width: calc(100% / ${props => props.amount});
  padding: 20px 0px;
  border-top: ${props => props.checktitle && '1px solid grey'};

  &:not(:last-child) {
    border-right: 1px solid grey;
  }
  &:first-child {
    border-radius: ${props => (props.checktitle ? '0 0 0 8px' : '8px 0 0 8px')};
  }
  &:last-child {
    border-radius: ${props => (props.checktitle ? '0 0 8px 0' : '0 8px 8px 0')};
  }
`;
export const Flexlist = styled.ul`
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  margin-bottom: 0px;
`;
