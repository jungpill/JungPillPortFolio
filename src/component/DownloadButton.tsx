import styled from "styled-components";
import { FaArrowDown } from 'react-icons/fa';

const DownloadButton = () => {


    return(
    <>
    <SubmitButton>
    <FaArrowDown />
        <a href ='pdf/이정필 포트폴리오.pdf' download>
            포트폴리오 다운로드
        </a>
    </SubmitButton>
    </>)
}

export default DownloadButton;

const GradientButton = styled.button`
  background-color: ;
  font-weight: bold;
  border: none;
  padding: 12px 24px;
  border-radius: 10px; // 둥글게
  cursor: pointer;
  font-size: 16px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.85;
  }

  a{
   color: #fff;
   }
`;

const SubmitButton = styled.button`
  background-color: #1c1e2a; // 짙은 남색/검정 배경
  color: white;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 999px; // 완전한 pill 형태
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2a2d3f; // 살짝 더 밝게
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    color: #6c85ff; // 화살표 색상 (보라빛 도는 파랑)
    font-size: 16px;
  }
`;