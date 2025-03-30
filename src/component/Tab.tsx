import styled from "styled-components";
import useTabStore from "../zustand/UseTypeStore";


const Tab = () => {
    
    const {type, setType} = useTabStore()

    const handleTypeChange = (event: React.MouseEvent<HTMLUListElement>) => {
        const target = (event.target as HTMLElement).closest("li");
        if (!target) return;

        setType(target.getAttribute("data-type") as "Home" | "Profile")
    }
    
    return(
        <TabContainer onClick = {handleTypeChange}>
           <Item data-type="Home">홈</Item>
           <Item data-type="Profile">프로필</Item>
           <Item data-type="자소서">자소서</Item>
           <Item data-type="Project">프로젝트</Item>
           <Item data-type="GuestBook">방명록</Item>
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