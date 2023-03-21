import styled from 'styled-components';
import { MenuItem, Select } from '@mui/material';

export const SelectsContainer = styled('div')`
  margin-top: 25px;
`;

export const Title = styled('span')`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`


export const CustomSelect = styled(Select)`
  fieldset {
    border-color: #ffffff;;
  }

  //.MuiInputBase-root {
  //  & .Mui-focused:active {
  //    border-color: yellow
  //  }
  //}
  //
  //.MuiSelect-select {
  //  color: white;
  //}

& .MuiOutlinedInput-input {
  color: green
},
& .MuiInputLabel-root {
  color: green
},
& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
  border-color: green
},
&:hover .MuiOutlinedInput-input {
  color: red
},
&:hover .MuiInputLabel-root {
  color: red
},
&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
  border-color: red
},
& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
  color: purple
},
& .MuiInputLabel-root.Mui-focused {
  color: purple
},
& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: purple
}
`

export const CustomMenuItem = styled(MenuItem)`

`