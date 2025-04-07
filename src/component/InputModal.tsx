import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

interface CancelOrderModalProps {
  onConfirm?: (reason: string) => void;
  onCancel?: () => void;
  title: string;
}

const InputModal = ({ title,onConfirm, onCancel }: CancelOrderModalProps) => {
  const [reason, setReason] = useState("");

 
  return (
      <ModalBox>
        <Title>{title}</Title>
        <Input
          placeholder="Enter reason..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <ButtonGroup>
          <OkButton >확인</OkButton>
          <CancelButton onClick={onCancel}>아니오</CancelButton>
        </ButtonGroup>
      </ModalBox>
  );
};

export default InputModal;

const ModalBox = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
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
  border-radius: 4px;
  margin-bottom: 20px;
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