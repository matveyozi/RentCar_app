import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const InputStyled = styled.input`
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const ButtonStyled = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;

  cursor: pointer;
`;
