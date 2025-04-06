import styled from "styled-components";
import 제이치스 from '../../source/webp/Jaychis.webp'
import React from '../../source/webp/React.webp'
import Redux from '../../source/webp/Redux.webp'
import Styled from '../../source/webp/styledcomponents.webp' 
import Antd from '../../source/webp/AntDesign.webp'
import CustomTooltip from "../../component/CustomTooltip";
import TypeScript from '../../source/webp/TypeScript.webp'

const Jaychis = () => {

    return(
        <JaychisContainer>
            <img src = {제이치스} width='100%' height='50%' style = {{marginTop: '1rem'}}/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                Jaychis 
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
                            24.09 ~ 25.01
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = 'https://github.com/jaychis/nest-front' target='_blank'>
                            'https://github.com/jaychis/nest-front'
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
                <CustomTooltip title="React" position="bottom"><Icon src = {React}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="TypeScript" position="bottom"><Icon src = {TypeScript}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Redux" position="bottom"><Icon src = {Redux}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Antd" position="bottom"><Icon src = {Antd}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Styled-Component" position="bottom"><Icon src = {Styled}/></CustomTooltip>
            </Content>
            </Wrapper>
            <Hr/>
        </JaychisContainer>
    )
}

export default Jaychis;

const JaychisContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
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