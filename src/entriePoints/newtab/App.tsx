import React, { useState } from 'react';
import './App.css';
import Progress from './components/Progress'
function App() {
  return (
    <>
      <div className='progress-card'>
        <Progress txt="我是重要紧急模块" progress={0.8} color="rgb(255, 122, 82)" />
        <Progress txt="我是重要不紧急模块" progress={0.8} color="rgb(252, 187, 46)" />
        <Progress txt="我是不重要紧急模块" progress={0.8} color="rgb(76, 208, 139)" />
        <Progress txt="我是不重要不紧急模块" progress={0.8} color="rgb(125, 167, 254)" />
      </div>
      <div className='main-card'>
        <div className="content-card">
          <div className='important-notUrgent'>我是重要不紧急模块</div>
          <div className='important-urgent'>我是重要紧急模块</div>
          <div className='notImportant-notUrgent'>我是不重要不紧急模块</div>
          <div className='notImportant-urgent'>我是不重要紧急模块</div>
        </div>
        <div className="side-card">
          我是侧边栏模块
        </div>
      </div>

    </>
  );
}

export default App;
