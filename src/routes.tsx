import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';



const _Routes: React.FC = () => (
    <Routes>
        <Route path="/main" element={<Main />} />
        
    </Routes>
);

export default _Routes;
