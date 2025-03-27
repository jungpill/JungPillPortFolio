import styled from "styled-components"
import MyProfileHeader from "./Header"
import ProfileImageWrapper from './ProfileImage'

const MyProfile = () => {
    return(
        <MyProfileContainer>
            <MyProfileHeader/>
            <ProfileImageWrapper/>
        </MyProfileContainer>
    )
}

export default MyProfile

const MyProfileContainer = styled.div`
    display: flex;
    width: 20%;
    height: 90%;
    background-color: white;
    border-radius: 25px;
    padding: 10px 30px 10px 30px;
    margin-right: 2%;
    flex-direction: column;
`