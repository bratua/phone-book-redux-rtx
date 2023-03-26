import styled from 'styled-components';

export const ContactListStyled = styled.ol`
  padding: 0;
  margin: 0;
`;

export const ContactCardStyled = styled.li`
  display: flex;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  align-items: center;
  gap: 20px;
  width: 300px;

  border: 2px solid blue;
  border-radius: 10px;

  p {
    padding: 0;
    margin: 3px;
    width: 150px;
  }
`;
