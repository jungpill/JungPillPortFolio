import styled from "styled-components"
import MyProfileHeader from "./Header"


const MyProfile = () => {
    return(
        <MyProfileContainer>
            <MyProfileHeader/>
        </MyProfileContainer>
    )
}

export default MyProfile

const MyProfileContainer = styled.div`
    display: flex;
    width: 30%;
    height: 90%;
    background-color: white;
    border-radius: 25px;
    padding: 30px;
    margin-right: 2%;
`