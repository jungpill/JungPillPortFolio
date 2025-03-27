import styled from "styled-components";
import MyProfile from "./myProfile/MyProfile";
import Header from './myProfile/Header'

const Layout = ({ children }: { readonly children: React.ReactNode }) => {
    return(
        <LayoutContainer>
            <ContentContainer>
                <OutSideText>
                    <DottedLine>
                        <Header/> 
                        <Book>
                            <MyProfile/>
                            {children}
                        </Book>
                    </DottedLine>
                </OutSideText>
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
    background-color: darkgray;
    background-size: 19px 19px;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 80%;
    height: 80%;
    background-color: skyblue;
`

const OutSideText = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 20px;
`

const Book = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 90%;
`

const DottedLine = styled.div`
    border: 3px dashed black;
    width: 100%;
    height: 95%;
    padding: 15px;
`


