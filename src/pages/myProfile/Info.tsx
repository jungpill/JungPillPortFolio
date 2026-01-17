import styled from "styled-components";
import call from '../../source/webp/icons8-전화-30.webp'
import email from '../../source/webp/icons8-gmail-logo-30.webp'
import home from '../../source/webp/icons8-집-50.webp'
import github from '../../source/webp/icons8-github의-30.webp'
import { useEffect } from "react";

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
    font-size: 1rem;
`

const StyledImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 1%;
`