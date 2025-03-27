import styled from "styled-components";
import background from '../source/1593669114745.gif'
import MyProfile from "./myProfile/MyProfile";

const Layout = ({ children }: { readonly children: React.ReactNode }) => {
    return(
        <LayoutContainer>
            <ContentContainer>
                <MyProfile/>
                {children}
            </ContentContainer>
        </LayoutContainer>
    )
}

export default Layout


const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover; 
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 20px;
    align-items: center;
    justify-content: Center;
    padding: 20px;
    width: 80%;
    height: 70%;

`