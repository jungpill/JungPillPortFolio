import styled from "styled-components";
import { motion } from "framer-motion";
import stop from '../../src/source/webp/stop.webp'
import next from '../../src/source/webp/next.webp'
import square from '../../src/source/webp/square.webp'
import play from '../../src/source/webp/play.webp'
import { useState } from "react";

const MusicBar = () => {

    const [active, setActive] = useState<boolean>(true);

    const handleRemote = (e:React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        const type = target.getAttribute('data-type');
        switch(type){
            case 'play':
                setActive(false);
                break;
            case 'stop':
                setActive(true);
                break;
            case 'square':
                break;
            case 'next':
                break;
            case 'back':
                break;
                
        }
    }

    return(
        <MusicBarContainer>
            <TitleBox>
                거북이
            </TitleBox>
            <IconBox onClick = {handleRemote} >
                <Icon data-type = 'play' src = {active ? play : stop} alt = '이미지 로드중'/>
                <Icon data-type = 'square' src = {square} alt = '이미지 로드중'/>
                <Icon data-type = 'next' src = {next} style = {{transform: 'rotate(180deg)'}} alt = '이미지 로드중'/>
                <Icon data-type = 'back' src = {next} alt = '이미지 로드중'/>
            </IconBox>
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
    right: 0.8%;
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

const IconBox = styled.div`
    display: flex;
    padding-top: 0.3px;
`

const Icon = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
`