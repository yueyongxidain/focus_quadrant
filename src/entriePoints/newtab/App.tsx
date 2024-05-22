import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className='progress-card'>
        <div className='progress-card-item'>
          我是重要紧急模块
        </div>
        <div className='progress-card-item'>
          我是重要不紧急模块
        </div>
        <div className='progress-card-item'>
          我是不重要紧急模块
        </div>
        <div className='progress-card-item'>
          我是不重要不紧急模块
        </div>
      </div>
      <div className='main-card'>
        <div className="content-card">
          我是功能区模块
        </div>
        <div className="side-card">
          我是侧边栏模块
        </div>
      </div>

    </>
  );
}

export default App;
