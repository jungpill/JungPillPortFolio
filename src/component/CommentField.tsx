import styled from "styled-components";


const CommentField = () => {


    return(
    <CommentFieldContainer>
        <CommentArea/>
        <SubmitButton>
            확인
        </SubmitButton>
    </CommentFieldContainer>
    )
}

export default CommentField;

const CommentFieldContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 15%;
    width: 45%;
    background-color: #F2F2F2;
    padding: 20px;
`

const CommentArea = styled.textarea`
    width: 90%;
    heightL 80px;
`

const SubmitButton = styled.button`
    padding: 15px;
    width: 4rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    background-color: white;
    border-radius: 5px;
    
`


