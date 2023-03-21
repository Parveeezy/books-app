import styled from 'styled-components';
import { Button } from '@mui/material';

export const CustomButton = styled(Button)`
  && {
    background-color: #2ecac6;
    border-radius: 5px;
    margin-left: 15px;
    width: 80px;
    height: 55px;
    color: aliceblue;

    :hover {
      background-color: #16e55e;
    }
  }
`