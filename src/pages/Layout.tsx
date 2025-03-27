import styled from "styled-components";
import MyProfile from "./myProfile/MyProfile";
import Header from './myProfile/Header'

const Layout = ({ children }: { readonly children: React.ReactNode }) => {
    return(
        <LayoutContainer>
            <ContentContainer>
                <Test>
                    <Header/>
                    <Test2>
                        <MyProfile/>
                        {children}
                    </Test2>
                </Test>
            </ContentContainer>
        </LayoutContainer>
    )
}

export default Layout


const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: skyblue;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    
    justify-content: Center;
    padding: 20px;
    width: 80%;
    height: 80%;
    background-color: white;
`

const Test = styled.div`
    display: flex;
    flex-direction: column;
    hegiht: 100%;
    width: 100%;
`

const Test2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1%;
`