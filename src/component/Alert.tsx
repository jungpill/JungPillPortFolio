import React from 'react';
import styled from 'styled-components';

interface InfoAlertModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const Alert = ({ onClose }: InfoAlertModalProps) => {
  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <strong>알림!</strong>
          <CloseButton onClick={() => {onClose(false)}}>×</CloseButton>
        </Header>
        <Body>
          비밀번호가 올바르지 않습니다.
        </Body>
        <Footer>
          <ConfirmButton onClick={() => {onClose(false)}}>확인</ConfirmButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default Alert;


const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Body = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: #555;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background-color: #6366f1;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #4f46e5;
  }
`;