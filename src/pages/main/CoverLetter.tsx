import styled from "styled-components";


const CoverLetter = () => {


    return(
        <CoverLetterContainer>
            <CoverLetterWrapper>
                <Title>
                    노력하면 된다
                </Title>
                <Text>
                제 성격의 장점은 노력과 끈기 입니다. 
                새로운 기술이나 기능을 적용하면서 예기치 못한 버그가 발생할 때도 쉽게 포기하지 
                않고 문제의 근본 원인을 찾기 위해 노력합니다. 예시로 쇼핑몰 프로젝트에서 
                액세스 토큰이 만료될시 리프레시 토큰을 이용하여 새로운 액세스 토큰을 발급받는 
                기능 구현을 담당했지만 그 과정에서 알 수 없는 이유로 계속적인 네트워크 오류가 발생하였습니다. 
                해당 오류 하나를 해결하기 위해 일주일간 계속적인 코드 
                수정과 네트워크 창 분석을 통해 기존 쿠키가 제대로 삭제되지 않아 발생하는 문제라는 것을 알아내 해결한 경험이 있습니다. 
                해당 경험을 통해 복잡한 문제를 해결하는 데 노력과 끈기가 얼마나 중요한지 깨닫게 되었고 
                만약 귀사에 입사하여 새로운 문제를 맞닥뜨리더라도 노력과 끈기로 극복해 나가는 모습을 보여드리겠습니다.
                </Text>
                <Title>
                    반쪽짜리 개발자 
                </Title>
                <Text>
                졸업작품 설계때 팀장을 맡고 있었던 저는 팀원들과 회의를 통해 요구사항 분석 작업을 완료한 후 개발을 진행 하였습니다.
                하지만 막상 개발을 시작하니 회의당시 각자 이해한 내용이 조금씩 달랐고 
                정리한 내용에도 차이가 있었습니다. 이로인해 작은 기능 한 가지를
                개발하게 되더라도 서로 의견이 달라 예상보다 더 많은 시간이 소요되었습니다. 결국 저는
                팀원들에게 1주일간 개발을 중단하고 요구사항 분석을 다시 진행하는 것을 제안했고 모든 팀원들의 
                동의하에 일주일간 요구사항 분석을 다시 진행하며 필수 기능과 불필요한 기능 그리고 여유가
                된다면 구현해 볼 기능들을 명확히 구분하였습니다. 또한 이전 요구사항 분석 실패로 인해 문서화의 중요성을 
                깨닫게 되었고 노션을 통해 공통 회의록 및 문서화 작업을 진행하였습니다. 그 결과 남은 기간 동안 개발에 더욱 집중할 수
                있었고 모든 기능을 계획한 알정 내에 구현할 수 있었습니다. 이러한 과정 덕분에 저희 팀은 졸업
                작품 경진대회에서 좋은 성과를 거둘 수 있었으며 추후 학교 측에서 특허 출원 제안까지 받게 되었
                습니다. 해당 경험을 통해서 개발만 잘하는 개발자보다는 개발뿐 아니라 팀원들과 잘 협력하며
                소통할 수 있는 능력을 가진 개발자가 되기 위해 노력하고 있습니다.
                </Text>
            </CoverLetterWrapper>
        </CoverLetterContainer>
    )
}

export default CoverLetter;


const CoverLetterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    margin-top: 1%;
    border-radius: 10px;
    
    &::-webkit-scrollbar {
    width: 0px;
  }
`

const CoverLetterWrapper = styled.div`
    display: flex;
    margin-left: 4%;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`

const Title = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1.2rem;
    margin: 5% 0 2% 0;
    color: #007AFF;
`

const Text = styled.div`
    font-weight: 600;
    line-height: 2rem;
    font-size: 1rem;
    width: 95%;
    word-wrap: break-word;
    word-break: keep-all; /* 한글 줄바꿈을 더 자연스럽게 */
    white-space: normal; /* 공백을 정리하면서 줄바꿈 적용 */
    text-align: justify;
`