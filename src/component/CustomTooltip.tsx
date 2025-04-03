import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; 

interface Props {
  readonly title: string;
  readonly position: 'top' | 'bottom';
  readonly children:React.ReactElement;
}

const CustomTooltip = ({title,position,children}:Props) => {
  return (
    <div style={{ width: '50px', height: '50px', marginRight: '1.5%', fontSize: '0.8rem', fontWeight: '400', lineHeight: '1.5rem'}}>
      <Tippy content = {title} placement={position}>
        {children}
      </Tippy>
    </div>
  );
};

export default CustomTooltip;

