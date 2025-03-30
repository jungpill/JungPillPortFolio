import styled from "styled-components";



const MyProfileHeader = () => {

    return(
        <HeaderWrapper>
            <TodayVisitorCount>
                Today.. 50 | Total.. 250
            </TodayVisitorCount>
            
        </HeaderWrapper>
    )
}

export default MyProfileHeader

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    flex-direction: row;
    margin-bottom: 2%;
`

const TodayVisitorCount = styled.p`
    display: flex;
    font-size: 12px;
    color: red;
    font-weight: 500;
    margin-left: 3.5%;
    align-items: center;
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