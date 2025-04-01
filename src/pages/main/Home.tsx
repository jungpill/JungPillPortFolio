import 싸이월드 from '../../source/싸이월드.jpg'
import styled from 'styled-components'


const HOME = () => {


   const handleTest = () => {
    fetch('http://localhost:7000/visitor/increment', {
        method: 'POST', // POST 방식으로 방문자 수를 증가시킨다고 가정
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // 응답이 성공적이면 JSON 데이터 반환
        }
        throw new Error('Failed to increment visitor count');
    })
    .then(data => {
        console.log('Visitor count incremented:', data);
        // 방문자 수가 증가한 후, 필요한 처리를 여기서 할 수 있음 (예: UI 업데이트)
    })
    .catch(error => {
        console.error('Error:', error);
        // 에러가 발생하면 사용자에게 알림을 주거나 에러 처리 로직을 추가할 수 있음
    });
}

    return(
        <BodyContainer>
            <Img src = {싸이월드}/>
            <Balloon onClick = {handleTest}>유저의 입장에서 생각하며 최선의 방향을 고민하는 개발자 이정필입니다.</Balloon>
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

const Balloon = styled.div`
  position: absolute;
  background: #553DF2;
  color: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 450px;
  height: 50px;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  top: 37%;
  left: 50%;

  /* 말풍선 위쪽 삼각형 */
  &::after {
   content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #553DF2;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;
