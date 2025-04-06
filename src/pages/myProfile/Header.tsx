import styled from "styled-components";
import {useState, useEffect} from 'react'
import { axiosInstance } from "../../api/axios";

const MyProfileHeader = () => {

    const [visitor, setVisitor] = useState({
        today: '',
        total: ''
    })

    const Getvisitor = async () => {
        try {
          const response = await axiosInstance.post('/visitor/increment')
          
          setVisitor(response.data)
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
                <VisitorSpan>Today..</VisitorSpan> {visitor.today} <VisitorSpan>| Total..</VisitorSpan> {visitor.total}
            </TodayVisitorCount>
        </HeaderWrapper>
    )
}

export default MyProfileHeader

const HeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    flex-direction: row;
    justify-content: center; 
`

const TodayVisitorCount = styled.p`
    display: flex;
    color: red;
    font-weight: 600;
    line-height: 1.5rem;
    font-size: 0.9rem;
    margin: 10px 0 0 0;
`

const VisitorSpan = styled.span`
    color: black;
    margin-right: 5px;
    margin-left: 5px;
`