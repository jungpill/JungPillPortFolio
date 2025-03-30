import styled from "styled-components";



const Tab = () => {
    
    return(
        <TabContainer>
           <Item>홈</Item>
           <Item>프로필</Item>
           <Item>자소서</Item>
           <Item>프로젝트</Item>
           <Item>방명록</Item>
        </TabContainer>
    )
}

export default Tab;

const TabContainer = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 70px;
    height: 250px;
    right: 8%;
    top: 20%;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    background-color: #468baf;
    margin-bottom: 8%;
    height: 35px;
    color: white;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 5px;

    &:hover {
    background-color: white;
    color: #468baf;
  }
`