import React from 'react'
import NavBar from './components/NavBar/NavBar';
import './style.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


export default function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer></ItemListContainer>
    </div>
  );
}