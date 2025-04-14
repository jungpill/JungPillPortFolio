import styled from "styled-components";

const ImageCard = ({img}: {img:string}) => {

    return(
        <ImageCardContainer>
            <Img src = {img} alt = '이미지 로드중'/>
        </ImageCardContainer>
    )
}

export default ImageCard


const ImageCardContainer = styled.div`
    display: flex;
    width: 350px;
    height: 200px;
`

const Img = styled.img`
    width: 100%;
    height: 97%;
    border: 2px solid black;
    
    border-radius: 10px;
`