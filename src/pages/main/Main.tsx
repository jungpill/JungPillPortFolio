import { useState } from "react";
import styled from "styled-components";
import Body from "./Body";

const Main = () => {

    return(
    <MainContainer>
        <Body/>
    </MainContainer>
    )
}

export default Main


const MainContainer = styled.div`
    display: flex;
    width: 60%;
    height: 90%;
    background-color: white;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px 2% 10px 2%;
    margin-right: 2%;
    flex-direction: column;
`