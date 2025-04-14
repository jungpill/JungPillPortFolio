import styled from "styled-components";
import image from '../../source/사진 푸른배경.jpg'

const ProfileImage = () => {

    return(
        <ProfileImageWrapper>
            <Image src = {image} alt = '이미지 로드중'/>
        </ProfileImageWrapper>
    )
}

export default ProfileImage

const ProfileImageWrapper = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 1rem;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`