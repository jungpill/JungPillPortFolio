import styled from "styled-components";
import MyProfile from "./myProfile/MyProfile";
import Header from './myProfile/Header'
import Gif from '../source/1593669114745.gif'
import Ling from '../source/링.png'
const Layout = ({ children }: { readonly children: React.ReactNode }) => {
    return(
        <LayoutContainer>
            <ContentContainer>
            <DottedLine>
                <Header/>
                <MyProfile/>
            </DottedLine>
            <img src = {Ling} width='55px' height='60px' style = {{position: 'absolute', left: '31%', top: '20%'}}/>
            <img src = {Ling} width='55px' height='60px' style = {{position: 'absolute', left: '31%', top: '25%'}}/>
            <img src = {Ling} width='55px' height='60px' style = {{position: 'absolute', left: '31%', top: '70%'}}/>
            <img src = {Ling} width='55px' height='60px' style = {{position: 'absolute', left: '31%', top: '75%'}}/>
            <BackGroundgray>
                {children}
            </BackGroundgray>
            </ContentContainer>
        </LayoutContainer>
    )
}

export default Layout


const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(black 1px, transparent 1px), 
                    linear-gradient(90deg, black 1px, transparent 1px);
    background-size: 20px 20px;
    background-color: skyblue;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    display: flex;
    border: 2px dashed white;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 80%;
    height: 80%;
    
`

const BackGroundgray = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
    width: 70%;
    border-radius: 5px;
`

const DottedLine = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 25%;
    height: 95%;
    padding: 10px;
    background-color: white;
`


