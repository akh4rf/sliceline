import styled from 'styled-components';
import {Title} from '../Styles/title';

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(256, 256, 256, 0.8);
    padding: 5px;
`

export const Food = styled(Title)`
    height: 100px;
    padding: 10px;
    font-size: 20px;
    border-radius: 7px;
    box-shadow: 0px 0px 2px 0px grey;
    background-image: ${({img}) => `url(${img});`};
    background-position: center;
    background-size: cover;
    filter: contrast(75%);
    margin-top: 5px;

    transition-property: box-shadow margin-top filter;
    transition-duration: .1s;
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 20px 0px grey;
        filter: contrast(100%);
        margin-top: 0;
        margin-bottom: 5px;
    }
`