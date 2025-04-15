import styled from "styled-components";


const Poisoning = () => {


    return(
        <PoisoningContainer>
            아직 개발이 진행중인 프로젝트 입니다.
        </PoisoningContainer>
    )
}

export default Poisoning;

const PoisoningContainer = styled.div`
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
