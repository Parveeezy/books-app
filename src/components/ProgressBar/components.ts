import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const StyledProgressBar = styled(CircularProgress)(({
    '&.MuiCircularProgress-root': {
        gridTemplateColumns: 'repeat(1, 1fr)',


        '& .MuiCircularProgress-circle': {
            color: '#2ecac6',
        },
    },
}));