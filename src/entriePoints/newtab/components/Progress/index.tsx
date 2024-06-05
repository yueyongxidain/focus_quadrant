import React, { useState } from 'react';
import './index.css';
interface IProps {
    txt: string;
    color?: string;
    progress?: number;
}
function App(props: IProps) {
    console.log(props)
    const color = props.color || "#76ff7f"
    const background = props.progress && `conic-gradient(${color} 0%, ${color} ${(props.progress || 0) * 100}%,  #e8e8e844 ${(props.progress || 0) * 100}%, #e8e8e844 100%) `
    return (
        <div className='progress-card-item display-center' style={{ background }}>
            <div className='progress-card-item-txt display-center'>
                {props.txt}
            </div>
        </div>
    );
}

export default App;
