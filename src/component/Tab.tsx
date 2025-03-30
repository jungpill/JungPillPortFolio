import styled from "styled-components";
import useTabStore from "../zustand/UseTypeStore";
import { useState } from "react";

const Tab = () => {
    
    const {type, setType} = useTabStore()
    const [isActive, setisActive] = useState(false)

    const handleTypeChange = (event: React.MouseEvent<HTMLUListElement>) => {
        const target = (event.target as HTMLElement).closest("li");
        if (!target) return;

        setType(target.getAttribute("data-type") as "Home" | "Profile" | 'CoverLetter' | 'Project' | 'GuestBook')
    }
    
    return(
        <TabContainer onClick = {handleTypeChange}>
           <Item data-type="Home" isActive={'Home' === type ? true : false}>홈</Item>
           <Item data-type="Profile" isActive={'Profile' === type ? true : false}>프로필</Item>
           <Item data-type="CoverLetter" isActive={'CoverLetter' === type ? true : false}>자소서</Item>
           <Item data-type="Project" isActive={'Project' === type ? true : false}>프로젝트</Item>
           <Item data-type="GuestBook" isActive={'GuestBook' === type ? true : false}>방명록</Item>
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

const Item = styled.li<{isActive: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
    background-color: ${props => props.isActive ? 'white' : '#468baf'};
    color: ${props => props.isActive ? '#468baf' : 'white'};
    margin-bottom: 8%;
    height: 35px;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 5px;
    cursor: pointer;
`