import styled from "styled-components";

const ImageCard = ({img}: {img:string}) => {

    return(
        <ImageCardContainer>
            <Img src = {img}/>
        </ImageCardContainer>
    )
}

export default ImageCard


const ImageCardContainer = styled.div`
    display: flex;
    width: 95%;
    height: 80%;
    border-radius: 10px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-right: 2%;
`