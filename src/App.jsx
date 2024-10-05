import React, { useState } from 'react'
import Background from './Components/Background/Background';

function App() {
  let heroData =[
    {text1:"Dive into", text2:"What you love"},
    {text1:"Indulge", text2:"Your passion"},
    {text1:"Give in to", text2:"Your passion"}
  ]
  const [heroCount, setHeroCount]= useState(2);
  const [playStatus, setPlayStatus]= useState(false);  
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/> 
    </div>
  )
}

export default App
