import styled from 'styled-components';
import { TextField } from '@mui/material';

export const CustomInpt = styled(TextField)`
  max-width: 500px;

  input {
    color: white;
  }
;

  & label {
    color: rgb(255, 255, 255);
  }

  & label.Mui-focused {
    color: #ffffff;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: rgb(255, 255, 255);
    }

    &:hover fieldset {
      border-color: yellow;
    }

    &.Mui-focused fieldset {
      border-color: #1976d2
    }
  }
`;