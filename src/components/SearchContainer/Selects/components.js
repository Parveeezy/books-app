import styled from 'styled-components';
import { MenuItem, Select } from '@mui/material';

export const SelectsContainer = styled('div')`
  margin-top: 25px;
  margin-left: 45px;
`;

export const Title = styled('span')`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`

export const CustomSelect = styled(Select)`
  border: 2px solid transparent;
  margin-right: 10px;
  
  & .MuiOutlinedInput-input {
    color: #ffffff
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  :hover {
    border: 2px solid yellow;
  }
`

export const CustomMenuItem = styled(MenuItem)`
  
`