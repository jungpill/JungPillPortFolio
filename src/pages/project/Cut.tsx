import styled from "styled-components";
import 싹둑싹둑 from '../../source/webp/싹둑싹둑.webp'
import React from '../../source/webp/React.webp'
import Zustand from '../../source/webp/Zustand.webp'
import Tail from '../../source/webp/Tailwind.webp' 
import Antd from '../../source/webp/AntDesign.webp'
import CustomTooltip from "../../component/CustomTooltip";
import Javascript from '../../source/webp/JavaSCript.webp'
import ReactQuery from '../../source/webp/react-query.webp'

const Cut = () => {

    return(
        <JaychisContainer>
            <img src = {싹둑싹둑} width='100%' height='50%' style = {{marginTop: '1rem'}}/>
            <Title>
                프로젝트명
            </Title>
            <Content>
                싹둑싹둑
            </Content>
            <Wrapper>
                <Wrapper>
                    <Column>
                        <Title>
                            개발인원
                        </Title>
                        <Content>
                            4명
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            개발기간
                        </Title>
                        <Content>
                            24.02 ~ 24.06
                        </Content>
                    </Column>

                    <Column>
                        <Title>
                            깃허브 링크
                        </Title>
                        <Content >
                            <a href = 'https://github.com/jjsOrganization' target='_blank'>
                            https://github.com/jjsOrganization
                            </a>
                        </Content>
                    </Column>
                </Wrapper>
            </Wrapper>
            <Title>
                기술 스택
            </Title>
            <Wrapper>
            <Content>
                <CustomTooltip title="React" position="bottom"><Icon src = {React}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="JavaScript" position="bottom"><Icon src = {Javascript}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Zustand" position="bottom"><Icon src = {Zustand}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Antd" position="bottom"><Icon src = {Antd}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title="Tailwind-css" position="bottom"><Icon src = {Tail}/></CustomTooltip>
            </Content>
            <Content>
                <CustomTooltip title = 'ReactQuery' position="bottom"><Icon src = {ReactQuery}/></CustomTooltip>
            </Content>
            </Wrapper>
            <Hr/>
            <Title>
                상세내용
            </Title>
            <Content>
                1.카카오 API 사용을 통한 로그인 및 공유하기 기능<br/>
            </Content>
            <br/>

            <Content>
                2.에러 전역 관리
            </Content>
            <Li>
            개발자의 실수로 인한 에러와 네트워크 에러를 일관성 있게 처리하기 위해 에러 Context와 에러 Modal을 통해 에러를 전역적으로 관리
            </Li>
            <br/>

            <Content>
                3.무한 스크롤
            </Content>
            <Li>
           react-virtualized 라이브러리를 활용하여 가상화된 스크롤을 통해 화면에 보이는 DOM 요소만 렌더링 하는 방식으로 무한 스크롤을 구현하여 렌더링 시간이 15ms에서 2.8ms로 단축 
            </Li>
            <br/>

            <Content>
                4.초기로딩속도 개선
            </Content>
            <Li>
            lighthouse로 측정한 성능 점수 49점 -{">"} 92점으로 약 88% 개선 
            </Li>
            <Li>
                동적 로딩을 통한 메인번들 사이즈 감소, Tree Shaking를 통한 불필요한 코드 제거 
            </Li>
            <Li>
                Font Swap속성을 통한 렌더링 완료시 폰트 적용 
            </Li>
            <br/>

            <Content>
                5.2개의 서버를 통해 버그 최소화
            </Content>
            <Li>
            로컬 환경에서는 괜찮았지만 배포 이후 버그가 발생하거나 예상과 다른 UI가 적용될 수 있다는 점을 인지
            </Li>
            <Li>
            서버를 stage와 prod로 분리하여 stage 서버에서 테스트를 거친 후 prod로 배포
            </Li>
            <br/>

            <Content>
                6.이미지 최적화
            </Content>
            <Li>
            이미지 용량 문제로 초기 로딩 속도가 저하되는 문제가 발생
            </Li>
            <Li>
            이미지를 s3에 업로드하기 전 webp 형식으로 변환하는 기능을 구현하여 이미지 용량 30%압축
            </Li>
            <br/>

            <Content>
                7.커스텀 Hook
            </Content>
            <Li>
            반복적으로 사용되는 로직을 효율적으로 관리하고 코드의 재사용성을 높이기 위해 커스텀 Hook을 개발하여 사용하였습니다.
            </Li>
            <br/>

            <Content>
                8.테스트 코드 작성
            </Content>
            <Li>
            Jest와 testing-library를 활용하여 단위 테스트 코드를 작성하였습니다.
            </Li>
            <Li>
            코드 변경 시 발생할 수 있는 버그를 사전에 예방하고 유지 보수 효율성을 향상시켰습니다.
            </Li>
        </JaychisContainer>
    )
}

export default Cut;

const JaychisContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
     &::-webkit-scrollbar {
    width: 0px;
  }
`

const Title = styled.div`
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 1rem;
    color: #22222280;
    margin-right: 3rem;
`

const Content = styled.div`
    font-weight: 700;
    font-size: .9rem;
    color: black
`

const Wrapper = styled.div`
    display: flex;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.img`
    width: 60%;
    height: 60%;
    border-radius: 10px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), 
                var(--tw-ring-shadow, 0 0 #0000), 
                var(--tw-shadow);
    margin-top: .5rem;
`

const Hr = styled.hr`
    width: 100%;
    height: 0.1px;
    background-color: rgba(34,34,34)
`

const Li = styled.li`
    font-weight: 700;
    font-size: .8rem;
    line-height: 1.5rem;
    margin-left: .5rem;
    color: #22222280;
    margin-right: 3rem;
`