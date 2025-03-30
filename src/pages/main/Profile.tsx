import styled from "styled-components";
import JavaScript from '../../source/JavaSCript.png'
import TypeScript from '../../source/TypeScript.png'
import React from '../../source/React.png'
import Redux from '../../source/Redux.png'
import Styled from '../../source/styledcomponents.png'
import ReactQuery from '../../source/react-query.png'
import GitHub from '../../source/icons8-github의-30.png'
import Zustand from '../../source/Zustand.png'
import AntDesign from '../../source/AntDesign.png'
import Jira from '../../source/Jira.png'
import Confluence from '../../source/Confluence.png'
import process from '../../source/진행현황2.png'
import ImageCard from "../../component/ImageCard";


const Profile = () => {


    return(
        <ProfileContainer>
            <ProfileWrapper>
                <Title>
                    기술 스택 및 도구
                </Title>
                <Content>
                    <Icon src = {JavaScript}/>
                    <Icon src = {TypeScript}/>
                    <Icon src = {React}/>
                    <Icon src = {Redux}/>
                    <Icon src = {Styled}/>
                    <Icon src = {ReactQuery}/>
                    <Icon src = {GitHub}/>
                    <Icon src = {Zustand}/>
                    <Icon src = {AntDesign}/>
                    <Icon src = {Confluence}/>
                    <Icon src = {Jira}/>
                </Content>
                <Title>
                    역량
                </Title>
                    <Content>
                        <Card>
                        <ImageCard
                        img={process}
                        />
                        <Text>협업 및 문서화</Text> 
                        </Card>

                        <Card>
                        <ImageCard
                        img={process}
                        />
                        <Text>협업 및 문서화</Text> 
                        </Card>
                    </Content>
                <Title>
                    교육
                </Title>
                <Content style = {{marginBottom: '5%'}}>
                    성결대학교<br/>
                    졸업 | 대학교(학사) <br/>
                    컴퓨터공학과 2023. 03. ~ 2025. 02
                </Content>
            </ProfileWrapper>
        </ProfileContainer>
    )
}

export default Profile


const ProfileContainer = styled.div`
    display: flex;
    margin-top: 1%;
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;

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
    margin: 5% 0 2% 0;
    color: #007AFF;
`

const Text = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1rem;
    margin: 5% 0 2% 0;
`

const Content = styled.div`
    display: flex;
    width: 90%;
    margin-left: 2%;
    line-height: 2rem;
`

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 1.5%;
    border-radius: 10px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
                var(--tw-ring-shadow, 0 0 #0000), 
                var(--tw-shadow);
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`