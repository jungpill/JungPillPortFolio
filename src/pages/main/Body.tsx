import 미니홈피 from '../../source/미니홈피.png'
import styled from 'styled-components'


const Body = () => {


    return(
        <BodyContainer>
            <Img src = {미니홈피}/>
        </BodyContainer>
    )
}

export default Body

const BodyContainer = styled.div`
    margin-top: 3%;
    width: 100%;
    height: 75%;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`