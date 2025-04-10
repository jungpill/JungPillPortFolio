import styled from "styled-components";
import MyProfile from "./myProfile/MyProfile";
import Header from './myProfile/Header'
import Ling from '../source/webp/링.webp'
import Tab from "../component/Tab";
import MusicBar from "../component/MusicBar";

const Layout = ({ children }: { readonly children: React.ReactNode }) => {
    return(
        <LayoutContainer>
            <MusicBar/>
            <ContentContainer>
            <DottedLine>
                <Header/>
                <MyProfile/>
            </DottedLine>
            <img src = {Ling} width='50px' height='60px' style = {{position: 'absolute', left: '31.2%', top: '20%'}}/>
            <img src = {Ling} width='50px' height='60px' style = {{position: 'absolute', left: '31.2%', top: '25%'}}/>
            <img src = {Ling} width='50px' height='60px' style = {{position: 'absolute', left: '31.2%', top: '70%'}}/>
            <img src = {Ling} width='50px' height='60px' style = {{position: 'absolute', left: '31.2%', top: '75%'}}/>
            <BackGroundgray>
                {children}
            </BackGroundgray>
            <Tab/>
            </ContentContainer>
        </LayoutContainer>
    )
}

export default Layout


const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(white 1px, transparent 1px), 
                    linear-gradient(90deg, white 1px, transparent 1px);
    background-size: 20px 20px;
    background-color: rgba(193, 193, 193) ;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    display: flex;
    border: 2px dashed white;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 80%;
    height: 85%;
    background-color: skyblue;
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
    border-radius: 30px;
    width: 25%;
    height: 95%;
    padding: 10px;
    background-color: #F2F2F2;
`

const Test = styled.div`
    display: flex;
    border: 2px solid white;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 85%;
    height: 85%;
    background-color: skyblue;
`


