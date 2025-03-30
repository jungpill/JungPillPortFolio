import { useState } from "react";
import styled from "styled-components";
import HOME from "./Home";

const Main = () => {

    return(
    <MainContainer>
        <HOME/>
    </MainContainer>
    )
}

export default Main


const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #D9D9D9;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 2% 10px 2%;
    flex-direction: column;
`