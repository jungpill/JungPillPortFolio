import styled from "styled-components";
import HOME from "./Home";
import useTypeStore from "../../zustand/UseTypeStore";
import Profile from "./Profile";
import CoverLetter from "./CoverLetter";
import Project from './Project'
import GuestBook from "./GuestBook";

const Main = () => {

    const {type, setType} = useTypeStore()

    return(
    <MainContainer>
        {type === 'Home' && (<HOME/>)}
        {type === 'Profile' && (<Profile/>)}
        {type === 'CoverLetter' && (<CoverLetter/>)}
        {type === 'Project' && (<Project/>)}
        {type === 'GuestBook' && (<GuestBook/>)}
    </MainContainer>
    )
}

export default Main


const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;

    &::-webkit-scrollbar {
        width: 0px;
    }
`