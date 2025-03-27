import styled from "styled-components";


const News = () => {

    return(
        <TitleContainer>
            <Header>
                <Title>
                유저의 입장에서 생각하며 최선의 방향을 고민하는 개발자 입니다.
                </Title>
            </Header>
            <Hr/>
        </TitleContainer>
    )
}

export default News

const TitleContainer = styled.div`
    width: 100%;
`

const Header = styled.div`
    display: flex;
`

const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
`

const Hr = styled.hr`
  margin-top: -1vh;
`