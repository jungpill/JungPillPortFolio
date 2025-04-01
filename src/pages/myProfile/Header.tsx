import styled from "styled-components";
import {useState, useEffect} from 'react'


const MyProfileHeader = () => {

    const [visitor, setVisitor] = useState({
        today: '',
        total: ''
    })

    const Getvisitor = async () => {
        try {
          const response = await fetch('http://localhost:7001/visitor/increment/today', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
          });
      
          const data = await response.json();
          
          setVisitor(data)
        } catch (error) {
          console.error('Error:', error);
        }
    };

    useEffect(() => {
        Getvisitor()
    },[])

    return(
        <HeaderWrapper>
            <TodayVisitorCount>
                Today.. {visitor.today} | Total.. {visitor.total}
            </TodayVisitorCount>
            
        </HeaderWrapper>
    )
}

export default MyProfileHeader

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    flex-direction: row;
    margin-bottom: 2%;
`

const TodayVisitorCount = styled.p`
    display: flex;
    font-size: 12px;
    color: red;
    font-weight: 500;
    margin-left: 3.5%;
    align-items: center;
`

const Hr = styled.hr`
   
`

const Text = styled.p`
    display: flex;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
`