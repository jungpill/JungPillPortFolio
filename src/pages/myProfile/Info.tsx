import styled from "styled-components";
import call from '../../source/icons8-전화-30.png'
import email from '../../source/icons8-gmail-logo-30.png'
import home from '../../source/icons8-집-50.png'
import github from '../../source/icons8-github의-30.png'
import { useEffect } from "react";
import profileImage from '../../source/webp/GuestBookImage.webp'

const Info = () => {

    useEffect(() => {
        const images = [call,email,home,github];
        const img = new Image()
        images.forEach((element) => {
            img.src = element
        })
    })

    return(
        <InfoContainer>
            <InfoUl>
                <InfoLi><StyledImage src = {call} alt = '이미지 로드중'/> 010-5628-7623</InfoLi>
                <InfoLi><StyledImage src = {email} alt = '이미지 로드중'/> wjdvlf99@naver.com</InfoLi>
                <InfoLi><StyledImage src = {home} alt = '이미지 로드중'/> 경기도 안양시 석수동</InfoLi>
                <a href = 'https://github.com/jungpill' target="_blank" rel="noreferrer"><InfoLi><StyledImage src = {github} alt = '이미지 로드중'/> https://github.com/jungpill</InfoLi></a>
            </InfoUl>
        </InfoContainer>
    )
}

export default Info

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
`

const InfoUl = styled.ul`
    padding: 0;
`

const InfoLi = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 2%;
    list-style-type: none;
    font-weight: 600;
`

const StyledImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 1%;
`