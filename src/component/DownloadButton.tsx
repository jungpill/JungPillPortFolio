import styled from "styled-components";

const DownloadButton = () => {


    return(
    <>
    <ButtonContainer>
        <a href ='pdf/이정필 포트폴리오.pdf' download>
            포트폴리오 다운로드
        </a>
    </ButtonContainer>
    </>)
}

export default DownloadButton;

const ButtonContainer = styled.button`
    width: 1.5rem;
    height: 1rem
`