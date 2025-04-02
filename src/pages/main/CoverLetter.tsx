import styled from "styled-components";


const CoverLetter = () => {


    return(
        <CoverLetterContainer>
            <CoverLetterWrapper>
                <Title>
                    개발자가 되고싶은 이유
                </Title>
            </CoverLetterWrapper>
        </CoverLetterContainer>
    )
}

export default CoverLetter;


const CoverLetterContainer = styled.div`
    display: flex;
    margin-top: 1%;
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
`

const CoverLetterWrapper = styled.div`
    display: flex;
    margin-left: 4%;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Title = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1.2rem;
    margin: 5% 0 2% 0;
    color: #007AFF;
`