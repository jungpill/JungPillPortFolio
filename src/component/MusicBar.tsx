import styled from "styled-components";
import { motion } from "framer-motion";

const MusicBar = () => {


    return(
        <MusicBarContainer>
            <TitleBox>
                거북이
            </TitleBox>
        </MusicBarContainer>
    )
}

export default MusicBar;

const MusicBarContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 8rem;
    height: 3.5rem;
    background-color: darkgray;
    right: 1%;
    top: 10%;
    font-size: 10px;
`

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 90%;
    border: 1px solid black;
    background-color: white;
`