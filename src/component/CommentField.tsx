import styled from "styled-components";


const CommentField = () => {


    return(
    <CommentFieldContainer>
        <RowWrapper style = {{marginBottom: '1rem'}}>
            <VisitorInput placeholder="아이디"/>
            <VisitorInput placeholder="패스워드"/>
        </RowWrapper>
        
        <RowWrapper>
            <CommentArea placeholder="피드백은 언제나 환영입니다! 많은 조언 부탁드려요"/>
            <SubmitButton>
                확인
            </SubmitButton>
        </RowWrapper>
    </CommentFieldContainer>
    )
}

export default CommentField;

const CommentFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 14%;
    width: 45%;
    background-color: #F2F2F2;
    padding: 15px;
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

const RowWrapper = styled.div`
    display: flex;
    
`

const VisitorInput = styled.input`
    width: 8rem;
    height: 1.2rem;
    margin-right: 1rem;
`


