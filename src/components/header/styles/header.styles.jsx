import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import background from '../../../assets/bg/home-bg.jpg'


export const Background = styled.div`  
    display: flex;
    flex-direction: column;
    background-image:url(${background});
`



export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    a {
        display: flex;
    }
    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height:32px;
    width:108px;
    margin-right:40px;

    @media (min-width:1449){
        height:45px;
        width:167px;
    }
`

export const ButtonLink = styled(Link)`
    display:block;
    background-color:#e50914;
    width:84px;
    height:fit-content;
    color: #fff;
    font-size:15px;
    border-radius:3px;
    padding:8px 17px;
    text-decoration:none;
    box-sizing:border-box;

    &:hover{
        background-color: #f40610;
    }
`