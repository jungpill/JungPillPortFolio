import styled from "styled-components";
import 중독 from '../../source/webp/중독.webp'
import CustomTooltip from "../../component/CustomTooltip";
import TypeScript from '../../source/webp/TypeScript.webp'
import Zustand from '../../source/webp/Zustand.webp'
import styledComponent from '../../source/webp/styledcomponents.webp'
import React from '../../source/webp/React.webp'

const Poisoning = () => {


    return(
        <PoisoningContainer>
            <img src = {중독} width='100%' height='50%' style = {{marginTop: '1rem'}} alt = '이미지 로드중'/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                Poisoning 
            </Content>
            <Wrapper>
                <Wrapper>
                    <Column>
                        <Title>
                            개발인원
                        </Title>
                        <Content>
                            3명
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            개발기간
                        </Title>
                        <Content>
                            진행중
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = 'https://github.com/addiction1215' target='_blank' rel="noreferrer">
                            https://github.com/addiction1215
                            </a>
                        </Content>
                    </Column>
                </Wrapper>
            </Wrapper>
            <Title>
                기술 스택
            </Title>
            <Wrapper>
            <Content>
                <CustomTooltip title="React-Native" position="bottom"><Icon src = {React} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="TpyeScript" position="bottom"><Icon src = {TypeScript} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Zustand" position="bottom"><Icon src = {Zustand} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="styled-component" position="bottom"><Icon src = {styledComponent} alt = '이미지 로드중'/></CustomTooltip>
            </Content>
            
            </Wrapper>
            <Hr/>
            <Li style = {{marginTop: '50px'}}>
                아직 개발이 진행중인 프로젝트 입니다.
            </Li>
        </PoisoningContainer>
    )
}

export default Poisoning;

const PoisoningContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    


     &::-webkit-scrollbar {
    width: 0px;
  }
`

const Title = styled.div`
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 1rem;
    color: #22222280;
    margin-right: 3rem;
`

const Content = styled.div`
    font-weight: 700;
    font-size: .9rem;
    color: black
`

const Wrapper = styled.div`
    display: flex;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.img`
    width: 60%;
    height: 60%;
    border-radius: 10px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
                var(--tw-ring-shadow, 0 0 #0000), 
                var(--tw-shadow);
    margin-top: .5rem;
`

const Hr = styled.hr`
    width: 100%;
    height: 0.1px;
    background-color: rgba(34,34,34)
`

const Li = styled.li`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.5rem;
    margin-left: .5rem;
    color: #22222280;
    margin-right: 3rem;
    margin-top: 30%;    
`   
