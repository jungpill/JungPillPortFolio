import styled from "styled-components";



const MyProfileHeader = () => {

    return(
        <HeaderWrapper>
            <TodayVisitorCount>
                Today.. 50 | Total.. 250
            </TodayVisitorCount>
            <Hr/>
        </HeaderWrapper>
    )
}

export default MyProfileHeader

const HeaderWrapper = styled.div`
    width: 100%;
`

const TodayVisitorCount = styled.p`
    font-size 1rem;
    color: skyblue;
    font-weight: 500;
`

const Hr = styled.hr`
   
`