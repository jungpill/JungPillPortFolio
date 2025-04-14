import React, { useState } from "react";
import styled from "styled-components";

interface CancelOrderModalProps {
    eventHandler: (password: string) => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

const InputModal = ({ title,eventHandler, setIsOpen }: CancelOrderModalProps) => {

    const [password, setPassword] = useState('')
 
  return (
        <ModalContainer>
            <ModalBox>
            <Title>{title}</Title>
            <Input
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonGroup>
            <OkButton onClick = {() => {eventHandler(password)}}>확인</OkButton>
            <CancelButton onClick={() => {setIsOpen(false)}}>아니오</CancelButton>
            </ButtonGroup>
            </ModalBox>
        </ModalContainer>
  );
};

export default InputModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`;

const ModalBox = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  z-index: 1002;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 90%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const OkButton = styled.button`
  background-color: #1e90ff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;