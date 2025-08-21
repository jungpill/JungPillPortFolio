import styled from "styled-components";
import JavaScript from '../../source/webp/JavaSCript.webp'
import TypeScript from '../../source/webp/TypeScript.webp'
import React from '../../source/webp/React.webp'
import Redux from '../../source/webp/Redux.webp'
import Styled from '../../source/webp/styledcomponents.webp'
import ReactQuery from '../../source/webp/react-query.webp'
import GitHub from '../../source/webp/icons8-github의-30.webp'
import Zustand from '../../source/webp/Zustand.webp'
import AntDesign from '../../source/webp/AntDesign.webp'
import Jira from '../../source/webp/Jira.webp'
import Confluence from '../../source/webp/Confluence.webp'
import chart_js from '../../source/chart.js.png'
import { motion } from "framer-motion";
import CustomTooltip from "../../component/CustomTooltip";
import FramerMotion from '../../source/webp/framer-motion.webp'
import { useEffect, useState } from "react";

const Profile = () => {

    useEffect(() => {
        const images = [
            JavaScript,
            TypeScript,
            React,
            Redux,
            Styled,
            ReactQuery,
            GitHub,
            Zustand,
            AntDesign,
            Jira,
            Confluence,
            FramerMotion,
        ];
    
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return(
        <ProfileContainer
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}>
            <ProfileWrapper>
                <Title>
                    기술 스택 및 도구
                </Title>
                <Content>

                <CustomTooltip title="JavaScript" position="bottom" children={<Icon src={JavaScript} alt = '이미지 로드중' loading="eager"/>} />
                <CustomTooltip title="TypeScript" position="bottom" children={<Icon src={TypeScript} alt = '이미지 로드중' loading="eager"/>} />
                <CustomTooltip title="React" position="bottom" children={<Icon src={React}alt = '이미지 로드중' loading="eager"/>} />
                <CustomTooltip title="Redux" position="bottom" children={<Icon src={Redux} alt = '이미지 로드중' loading="eager"/>} />
                <CustomTooltip title="Zustand" position="bottom" children={<Icon src={Zustand} alt = '이미지 로드중'/>} />
                <CustomTooltip title="React Query" position="bottom" children={<Icon src={ReactQuery} alt = '이미지 로드중' loading="eager"/>} />
                <CustomTooltip title="Styled Components" position="bottom" children={<Icon src={Styled} alt = '이미지 로드중' loading="eager"/>} />
                <CustomTooltip title="FramerMotion" position="bottom" children={<Icon src={FramerMotion} alt = '이미지 로드중'/>}/>
                <CustomTooltip title="chart.js" position="bottom" children={<Icon src={chart_js} alt = '이미지 로드중'/>}/>
                <CustomTooltip title="Ant Design" position="bottom" children={<Icon src={AntDesign} alt = '이미지 로드중'/>} />
                <CustomTooltip title="Confluence" position="bottom" children={<Icon src={Confluence} alt = '이미지 로드중'/>} />
                <CustomTooltip title="Jira" position="bottom" children={<Icon src={Jira} alt = '이미지 로드중'/>} />
                <CustomTooltip title="GitHub" position="bottom" children={<Icon src={GitHub} alt = '이미지 로드중'/>} />
                
                </Content>
                    
                <Title>
                    교육
                </Title>
                <Content style = {{display: 'flex', flexDirection: 'column'}} >
                <Text>성결대학교</Text><br/>
                졸업 | 대학교(학사) <br/>
                컴퓨터공학과 2023. 03. ~ 2025. 02
                </Content><br/>
                <Content style = {{display: 'flex', flexDirection: 'column'}} >
                   <Text> ICT 한이음 멘토링</Text><br/>
                    정부사업 한이음을 통해 약 8개월간 SW 기업전문가(멘토)와 팀을 이루어 프로젝트를 수행(24.03 ~ 24.11) 
                </Content>
            </ProfileWrapper>
        </ProfileContainer>
    )
}

export default Profile


const ProfileContainer = styled(motion.div)`
    display: flex;
    width: 90%;
    height: 90%;
    background-color: white;
    border: 2px solid skyblue;
    border-radius: 20px;
    padding: 0.5rem;
    align-items: center;
    flex-direction: column;
    margin-left: 1%;
    padding-bottom: .8rem;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
    width: 0px;
  }
`

const ProfileWrapper = styled.div`
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
    margin: 5% 0 0 0;
    color: #007AFF;
`

const Text = styled.p`
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: -1.5rem;
`

const Content = styled.div`
    display: flex;
    width: 90%;
    margin-left: 2%;
    line-height: 2rem;
    flex-wrap: wrap;
`

const Icon = styled.img`
    width: 3rem;
    height: 2.5rem;
    border-radius: 10px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
                var(--tw-ring-shadow, 0 0 #0000), 
                var(--tw-shadow);

    @media(min-width: 1920px){
        width: 4rem;
        height: 3rem;
    }
`