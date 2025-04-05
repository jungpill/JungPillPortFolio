import { useState } from "react";
import styled from "styled-components";


const Modal = () => {


    return(
        <ModalContainer>
            <ModalWrapper>
                asdasdsad
            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal;

const ModalContainer = styled.div`
    position: absolute;
    z-index: 1000;
    display: flex;
    background-color: rgba(0, 10, 10, .4);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    background: white;
    height: 80%;
    width: 40%;
    border-radius: 10px;
    padding: 20px;
`
