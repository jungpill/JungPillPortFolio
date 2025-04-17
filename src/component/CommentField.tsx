import styled from "styled-components";
import { axiosInstance } from "../api/axios";
import { useState } from "react";

interface SubmitType {
    readonly userId: string;
    readonly password: string;
    readonly content: string;
}

interface GuestbookEntry {
    id: number;
    userId: string;
    password: string;
    content: string;
    date: string; 
  }

interface CommentFieldProps {
    setGuestBookData: (data: GuestbookEntry[]) => void;
    guestBookData: GuestbookEntry[];
  }

const CommentField = ({ guestBookData,setGuestBookData }: CommentFieldProps) => {

    const [submitData, setSubmitData] = useState<SubmitType>({userId: '', password: '', content: ''});

    const handleSubmit = async() => {
        if(!submitData.content || !submitData.password || !submitData.userId) {
            return alert('모든 정보를 입력해주세요')
        }
        try{
            const response = await axiosInstance.post('/guestbook', {
                "userId": submitData.userId,
                "password": submitData.password,
                "content": submitData.content
            })
            setSubmitData({userId: '', password: '', content: ''})
            setGuestBookData([...guestBookData, response.data])
        }catch(err){
            console.log(err)
        }
    }

    return(
    <CommentFieldContainer>
        <RowWrapper style = {{marginBottom: '1rem'}}>
            <VisitorInput placeholder="아이디" value={submitData.userId} onChange = {(e) => {setSubmitData({...submitData, userId: e.target.value})}} type='text'/>
            <VisitorInput placeholder="패스워드" value={submitData.password}  onChange = {(e) => {setSubmitData({...submitData, password: e.target.value})}} type="password"/>
        </RowWrapper>
        
        <RowWrapper>
            <CommentArea placeholder="피드백은 언제나 환영입니다! 많은 조언 부탁드려요" value={submitData.content}  onChange = {(e) => {setSubmitData({...submitData, content: e.target.value})}}/>
            <SubmitButton onClick = {handleSubmit}>
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
    bottom: 11%;
    width: 45%;
    background-color: #F2F2F2;
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


