import React, {useState} from "react";
import styled from "styled-components";

interface TooltipProps {
  title: string;
}

const CustomTooltip = ({title}: TooltipProps) => {

  const [active, setActive] = useState<boolean>(false);

  return (
    <TooltipContainer
    active={active}
    onMouseEnter={() => {setActive(true)}}
    onMouseLeave={() => {setActive(false)}}
    >
      {title}
    </TooltipContainer>
  );
};

export default CustomTooltip;

const TooltipContainer = styled.div<{active: boolean}>`
  background-color: #222222BF;
  line-height: 1.25rem;
  font-weight: 400;
  display: ${(props) => props.active ? 'flex' : 'none'}
`
