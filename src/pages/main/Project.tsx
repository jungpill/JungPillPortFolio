import styled from "styled-components";
import ImageCard from "../../component/ImageCard";
import JaychisImg from '../../source/webp/JaychisImg.webp';
import { motion } from "framer-motion";
import Modal from "../../component/Modal";
import Jaychis from "../project/Jaychis";
import useProjectTypeStore from "../../zustand/UseProjectTypeStore";
import 싹둑싹둑Img from '../../source/webp/싹둑싹둑.webp'
import PortFolilImg from '../../source/webp/PortFoilo.webp'
import Cut from "../project/Cut";
import PortFolio from "../project/PortFolio";
import { useEffect,useState } from "react";
import 중독 from '../../source/webp/중독.webp'
import Poisoning from "../project/Poisoning";
import { sizes } from "../../styles/BreakPoints";
import 중독2 from '../../source/중독2.png';

const Project = () => {

    useEffect(() => {
        const images = [JaychisImg, 싹둑싹둑Img, PortFolilImg, 중독];

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    const {projectType, setProjectType} = useProjectTypeStore();
    
    return(
        <ProjectContainer
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        >
            <ProjectWrapper>
                <Content>
                    <Card onClick = {() => {setProjectType('Jaychis')}}>
                        <ImageCard
                        img={JaychisImg}
                        />
                        <Title>Jaychis</Title>
                        <Text>2024.09 ~ 2025.01</Text>
                        <Text>가장 많이 검색된 주제, 가장 많은 댓글이 달린 게시글 등을 보여주는 백오피스 커뮤니티</Text>
                    </Card>
                    {(projectType === 'Jaychis' && (<Modal children ={<Jaychis/>} />))}

                    <Card onClick = {() => {setProjectType('싹둑싹둑')}}>
                        <ImageCard
                        img={싹둑싹둑Img}
                        />
                        <Title>싹둑싹둑</Title>
                        <Text>2024.02 ~ 2024.06</Text>
                        <Text>판매자와 디자이너의 매칭을 통해 의류 구매 및 리폼을 동시에 진행 가능한 웹 플랫폼
                        </Text>
                    </Card>
                    {(projectType === '싹둑싹둑' && (<Modal children ={<Cut/>} />))}

                    <Card onClick = {() => {setProjectType('중독')}}>
                        <ImageCard
                        img={중독}
                        />
                        <Title>중독</Title>
                        <Text>2025.06 ~ 진행중</Text>
                        <Text>중독 개선을 돕는 앱 금연뿐 아니라 다양한 중독 문제를 돕는 서비스로 확장할 예정</Text>
                    </Card>
                    {(projectType === '중독' && (<Modal children ={<Poisoning/>} />))}

                    <Card onClick = {() => {setProjectType('PortFolio')}}>
                        <ImageCard
                        img={PortFolilImg}
                        />
                        <Title>싸이월드 포트폴리오</Title>
                        <Text>2025.04 ~ 2025.04</Text>
                        <Text>포트폴리오를 웹으로 구현 </Text>
                    </Card>
                    {(projectType === 'PortFolio' && (<Modal children ={<PortFolio/>} />))}

                </Content>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Project


const ProjectContainer = styled(motion.div)`
    display: flex;
    width: 90%;
    height: 90%;
    background-color: white;
    border: 2px solid skyblue;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    margin-left: 1%;
    overflow-y: scroll;
    padding: 0.5rem;

    &::-webkit-scrollbar {
    width: 0px;
  }

  @media(max-width: ${sizes.laptop}){
    padding-top: 1rem;
    }
`

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-left: 1.5rem;
    padding: 5rem;
    margin-top: 1rem;
    @media(max-width: ${sizes.laptop}){
    align-items: flex-start;
    justify-content: flex-start;
    }
`

const Content = styled.div`
    display: grid;
    width: 100%;
    line-height: 2rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem; 

    @media (max-width: ${sizes.laptop}) {
        grid-template-columns: 1fr; 
    }
`

const Card = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    width: 90%;
    cursor: pointer;
    border-radius: 8px;

    @media(max-width: ${sizes.laptop}){
    width: 30%;
    margin-right: 100px;
    }

    &:hover{
    background-color: #f0f0f0;
    }
`

const Title = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1rem;
    margin-top: 1%;
    margin-left: 1%;
`

const Text = styled.div`
    font-weight: 400;
    line-height: 1.2rem;
    font-size: 0.7rem;
    margin-left: 1%;
`