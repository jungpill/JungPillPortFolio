import 싸이월드 from '../../source/싸이월드.jpg'
import styled from 'styled-components'


const HOME = () => {

    return(
        <BodyContainer>
            <Img src = {싸이월드}/>
        </BodyContainer>
    )
}

export default HOME

const BodyContainer = styled.div`
    margin-top: 1%;
    width: 100%;
    height: 100%;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`