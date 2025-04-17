import styled from "styled-components";
import { motion } from "framer-motion";
import GuestBookImage1 from '../../source/webp/GuestBookImage.webp'
import GuestBookImage2 from '../../source/webp/GuestBookImage2.webp'
import GuestBookImage3 from '../../source/webp/GuestBookImage3.webp'
import GuestBookImage4 from '../../source/webp/GuestBookImage4.webp'
import GuestBookImage5 from '../..//source/webp/GuestBookImage5.webp'
import CommentField from "../../component/CommentField";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../api/axios";
import InputModal from "../../component/InputModal";
import Alert from "../../component/Alert";
import { useGuestBookStore } from "../../zustand/useGuestBookStore";

interface GuestbookEntry {
    id: number;
    userId: string;
    password: string;
    content: string;
    date: string; 
  }

const GuestBook = () => {

    const { guestBookData, setGuestBookData } = useGuestBookStore();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false)

    const image = [GuestBookImage1,GuestBookImage2,GuestBookImage3,GuestBookImage5,GuestBookImage4]

    const handleDelete = async (index: number, password: string) => {
        try{
            const response = await axiosInstance.patch(`/guestbook/${index}`, {password: password})
            setGuestBookData(guestBookData.filter((item) => item.id !== index))
        }catch(err){
            setShowAlert(true)
            console.log(err)
        }
        finally{setIsOpen(false)}
    }

    const handleIsOpen = (e:any) => {
        sessionStorage.setItem('deleteKey', e)
        setIsOpen(true)
    }

    return(
        <>
        <GuestBookContainer
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        >
            {isOpen ? 
            <InputModal title={'삭제하시겠습니까?'} 
            eventHandler={(password:any) => {
            const index = Number(sessionStorage.getItem("deleteKey"));
            handleDelete(index, password);
            }} 
            setIsOpen={setIsOpen}/> : 
            null}
            {showAlert ? <Alert onClose={setShowAlert}/> : null}
            <GuestWrapper>
                {guestBookData ? guestBookData.map((GuestBook,index) => {
                    return(
                        <>
                        <Header key = {index}>
                        <MarginSpan>NO.{GuestBook.id}</MarginSpan> 
                        <MarginSpan>{GuestBook.userId}</MarginSpan> 
                        ({GuestBook.date}) 
                        <span style = {{
                            marginLeft: 'auto', 
                            marginRight: '5px', 
                            cursor: 'pointer'
                            }} 
                            onClick={() => {handleIsOpen(GuestBook.id)}}>
                            삭제
                        </span>
                        </Header>
                        <RowWrapper>
                            <ProfileImage src = {image[index % 5]} alt = '이미지 로드중'/>
                            <Text>{GuestBook.content}</Text>
                        </RowWrapper>
                </>
                    )
                }) : '아직 등록된 방명록이 없습니다.'}
            </GuestWrapper>
        </GuestBookContainer>
        <CommentField
        setGuestBookData={setGuestBookData}
        guestBookData={guestBookData}
        />
        </>
    )
}

export default GuestBook;

const GuestBookContainer = styled(motion.div)`
    position: relative;
    top: -10%;
    display: flex;
    margin-top: 3%;
    height: 70%;
    width: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding-bottom: 2rem;
    border-radius: 10px;
    border: 2px solid skyblue;
    
    &::-webkit-scrollbar {
    width: 0px;
  }
`

const GuestWrapper = styled.div`
    display: flex;
    margin-left: 8%;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-top: 5%;
    font-size: .8rem;
    background-color: #F2F2F2;
    width: 85%;
    height: 30px;
`

const RowWrapper =styled.div`
    display: flex;
`

const ProfileImage = styled.img`
    width: 130px;
    height: 130px;
    margin-top: 2%;
    border: 1px solid black;
    border-radius: 20px;
`

const Text = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1rem;
    width: 95%;
    word-wrap: break-word;
    word-break: keep-all; /* 한글 줄바꿈을 더 자연스럽게 */
    white-space: normal; /* 공백을 정리하면서 줄바꿈 적용 */
    text-align: justify;
    margin: 5% 0 0 2%;
`

const MarginSpan = styled.span`
    margin-right: .5rem;
`

