import styled from "styled-components";



const Tab = () => {
    
    return(
        <TabContainer>
           <Item>ABOUT</Item>
           <Item>dasd</Item>
           <Item>dasd</Item>
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
    height: 40px;
    color: white;
    border-radius: 5px;
    
    &:hover {
    background-color: white;
  }
`