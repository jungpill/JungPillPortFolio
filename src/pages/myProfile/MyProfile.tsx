import styled from "styled-components"
import ProfileImageWrapper from './ProfileImage'
import Info from "./Info"

const MyProfile = () => {

    return(
        <MyProfileContainer>
            <Wrapper>
            <ProfileImageWrapper/>
            <Info/>
            </Wrapper>
        </MyProfileContainer>
    )
}

export default MyProfile

const MyProfileContainer = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    background-color: white;
    border: 2px solid skyblue;
    border-radius: 20px;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    margin-left: 1%;
    padding-bottom: 1rem;
`

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius: 25px;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    margin-left: 1%;
`
