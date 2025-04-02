import styled from "styled-components";
import ImageCard from "../../component/ImageCard";
import Jaychis from '../../source/webp/Jaychis.webp'

const Project = () => {


    return(
        <ProjectContainer>
            <ProjectWrapper>
                <Content>
                    <Card>
                        <ImageCard
                        img={Jaychis}
                        />
                        <Title>Jaychis</Title>
                        <Text>2024.09 ~ 2025.01</Text>
                        <Text>가장 많이 검색된 주제, 가장 많은 댓글이 달린 게시글 등을 보여주는 백오피스 커뮤니티</Text>
                    </Card>
                    
                    <Card>
                        <ImageCard
                        img={Jaychis}
                        />
                        <Title>Jaychis</Title>
                        <Text>2024.09 ~ 2025.01</Text>
                        <Text>가장 많이 검색된 주제, 가장 많은 댓글이 달린 게시글 등을 보여주는 백오피스 커뮤니티</Text>
                    </Card>

                    <Card>
                        <ImageCard
                        img={Jaychis}
                        />
                        <Title>Jaychis</Title>
                        <Text>2024.09 ~ 2025.01</Text>
                        <Text>가장 많이 검색된 주제, 가장 많은 댓글이 달린 게시글 등을 보여주는 백오피스 커뮤니티</Text>
                    </Card>
                    
                    <Card>
                        <ImageCard
                        img={Jaychis}
                        />
                        <Title>Jaychis</Title>
                        <Text>2024.09 ~ 2025.01</Text>
                        <Text>가장 많이 검색된 주제, 가장 많은 댓글이 달린 게시글 등을 보여주는 백오피스 커뮤니티</Text>
                    </Card>
                    
                </Content>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Project


const ProjectContainer = styled.div`
    display: flex;
    margin-top: 1%;
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding-top: 5rem;
    &::-webkit-scrollbar {
    width: 0px;
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
`

const Content = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
    line-height: 2rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
   
`

const Card = styled.div`
    display: flex;
    margin: 1% 2%; 
    flex-direction: column;
    width: 45%;
    cursor: pointer;
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