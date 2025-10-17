import React,{ useRef,useEffect,Dispatch, SetStateAction,} from "react";
import styled from "styled-components";
import useOutsideClick from "../hook/UseOutSideClick";
import close from '../../src/source/webp/close.webp'
import useProjectTypeStore from "../zustand/UseProjectTypeStore";

type ModalProps = {
  children: React.ReactNode | null;
  setModalChildren: React.Dispatch<
    React.SetStateAction<React.ReactNode | null>
  >;
};

const Modal = ({
    children,
    setModalChildren
    }:ModalProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const {setProjectType} = useProjectTypeStore()
    useOutsideClick({ref:ref})

    useEffect(() => {
        const image = close
        const img = new Image()
        img.src = image
    })

    return(
        <ModalContainer visible={children !== null}>
            <ModalWrapper ref = {ref}>
                <img src = {close} width='30px' height='30px' style={{marginLeft: 'auto', cursor: 'pointer'}} onClick={() => {setProjectType(null)}} alt = '이미지 로드중' />
                {children}
            </ModalWrapper>
        </ModalContainer>
    )
}

export default Modal;

const ModalContainer = styled.div<{visible: boolean}>`
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

    pointer-events: ${props => props.visible  ? 'auto' : 'none'};

    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 0.6s ease;
`

const ModalWrapper = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    height: 80%;
    width: 40%;
    border-radius: 10px;
    padding: 20px;
`
