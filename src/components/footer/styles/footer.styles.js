import styled from "styled-components/macro";


export const Container = styled.div`
    display: flex;
    padding:70px 56px;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px) {
        display:flex;
        flex-direction:column;
        text-align:left;
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap:15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`
export const Link = styled.a`
    color: #757575;
    font-size:13px;
    margin-bottom:20px;
    text-direction:none;
    cursor:pointer;
`
export const Title = styled.p`
    color: #757575;
    font-size:16px;
    margin-bottom:40px;

`
export const Text = styled.p`
    color: #757575;
    font-size:13px;
    margin-bottom:40px;
    
`
export const Break = styled.p`
    flex-basis:100%;
    height:0px;
    
`