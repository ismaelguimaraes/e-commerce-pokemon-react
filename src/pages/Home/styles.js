import styled from 'styled-components'
import { darken } from 'polished'

import { Button } from 'reactstrap';

export const ContainerColuna = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #F4F4F4;
    height: calc(100vh - 86px);
    -webkit-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.3);

    footer {
        display: flex;
        flex-direction: column;
    }
`

export const Total = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
        color: #999999;
        font-weight: bold;
        font-size: 12px
    }

    strong {
        font-size: 14px;
    }
`;