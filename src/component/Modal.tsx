import { useRef } from "react";
import styled from "styled-components";
import useOutsideClick from "../hook/UseOutSideClick";

const Modal = ({children}:{readonly children: React.ReactNode}) => {

    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick({ref:ref})

    return(
        <ModalContainer>
            <ModalWrapper ref = {ref}>
                {children}
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
    display: flex;
    justify-content: center;
    background: white;
    height: 80%;
    width: 40%;
    border-radius: 10px;
    padding: 20px;
`
