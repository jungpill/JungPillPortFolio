import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Body from "./Body";

const Main = () => {

    return(
    <MainContainer>
        <Title/>
        <Body/>
    </MainContainer>
    )
}

export default Main


const MainContainer = styled.div`
    display: flex;
    width: 65%;
    height: 90%;
    background-color: white;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px 5% 10px 5%;
    margin-right: 2%;
    flex-direction: column;
`