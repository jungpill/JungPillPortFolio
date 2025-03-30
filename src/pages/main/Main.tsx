import { useState } from "react";
import styled from "styled-components";
import HOME from "./Home";
import useTypeStore from "../../zustand/UseTypeStore";
import Profile from "./Profile";
import CoverLetter from "./CoverLetter";

const Main = () => {

    const {type, setType} = useTypeStore()

    return(
    <MainContainer>
        {type === 'Home' && (<HOME/>)}
        {type === 'Profile' && (<Profile/>)}
        {type === 'CoverLetter' && (<CoverLetter/>)}
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
    overflow-y: auto;
`