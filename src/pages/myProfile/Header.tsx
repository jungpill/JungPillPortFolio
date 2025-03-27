import styled from "styled-components";



const MyProfileHeader = () => {

    return(
        <HeaderWrapper>
            <TodayVisitorCount>
                Today.. 50 | Total.. 250
            </TodayVisitorCount>
            <Text>유저의 입장에서 생각하며 최선의 방향을 고민하는 개발자 이정필 입니다.</Text>
        </HeaderWrapper>
    )
}

export default MyProfileHeader

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`

const TodayVisitorCount = styled.p`
    display: flex;
    font-size 1rem;
    color: red;
    font-weight: 500;
`

const Hr = styled.hr`
   
`

const Text = styled.p`
    display: flex;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
`