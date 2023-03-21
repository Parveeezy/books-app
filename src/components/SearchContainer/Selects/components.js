import styled from 'styled-components';
import { MenuItem, Select } from '@mui/material';

export const SelectsContainer = styled('div')`
  margin-top: 12px
`;

export const Title = styled('span')`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`

export const CustomSelect = styled(Select)`
  .MuiSelect-select {
    color: white;
    
    input{
      border-color: aqua;
    }
  }
`

export const CustomMenuItem = styled(MenuItem)`
  & .MuiMenuItem-root {
    & .Mui-focusVisible {
      color: white;
    }
  }
`