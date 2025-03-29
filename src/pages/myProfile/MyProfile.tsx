import styled from "styled-components"
import ProfileImageWrapper from './ProfileImage'
import Info from "./Info"

const MyProfile = () => {
    return(
        <MyProfileContainer>
            <ProfileImageWrapper/>
            <Info/>
        </MyProfileContainer>
    )
}

export default MyProfile

const MyProfileContainer = styled.div`
    display: flex;
    width: 90%;
    height: 90%;
    background-color: white;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px 10px 10px 10px;
    
    flex-direction: column;
    margin-left: 1%;
`
