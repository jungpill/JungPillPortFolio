import styled from "styled-components";
import { motion } from "framer-motion";

const GuestBook = () => {


    return(
        <GuestBookContainer>
            <GuestWrapper>
                <Header>
                    nickname (2025.02.05 17:58)
                </Header>
            </GuestWrapper>
        </GuestBookContainer>
    )
}

export default GuestBook;

const GuestBookContainer = styled(motion.div)`
    display: flex;
    margin-top: 3%;
    height: 90%;
    width: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding-bottom: 2rem;
    border-radius: 10px;

    &::-webkit-scrollbar {
    width: 0px;
  }
`

const GuestWrapper = styled.div`
    display: flex;
    margin-left: 8%;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-top: 5%;
    font-size: 1rem;
    background-color: #F2F2F2;
    height: 30px;
'`