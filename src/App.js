import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import ToDoListScreen from './ToDoListScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/todo" element={<ToDoListScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
