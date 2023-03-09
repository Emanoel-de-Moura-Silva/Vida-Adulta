import styled from "styled-components";
import background from './Background.jpg'


export const Container = styled.div`
    background-image: url(${background})
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
`;

export const Header = styled.div`
    background-color: #121214;
    height: 150px;
    text-align: center;
    border-radius: 30px;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: white;
    padding-top: 30px;
`;

export const Body = styled.div`
    
   
`;