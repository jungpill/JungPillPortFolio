import styled from "styled-components";
import 제이치스 from '../../source/webp/Jaychis.webp'

const Jaychis = () => {

    return(
        <JaychisContainer>
            <img src = {제이치스} width='100%' height='50%'/>
        </JaychisContainer>
    )
}

export default Jaychis;

const JaychisContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`