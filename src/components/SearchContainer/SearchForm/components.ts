import styled from 'styled-components';

export const FormWrapper = styled('div')`
  max-width: 640px;
  margin: 0 auto;
  padding-top: 80px;
  position: relative;
  z-index: 10;
`;

export const FormTitle = styled('h1')`
  margin: 0 0 20px 0;
  background-color: red;
  background-image: linear-gradient(45deg, #0077ff, #00ff04);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const SearchBlock = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectsBlock = styled('div')`
  margin-right: 95px;
`;
