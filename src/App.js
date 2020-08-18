import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Meli from './components/Meli'
import Preloader from './components/Preloader'

export default function App() {
  const [ activeMeli, setActiveMeli ] = useState(false)
  const [ activeCnova, setActiveCnova ] = useState(false)
  const [ activeMagalu, setActiveMagalu ] = useState(false)
 
  const activeResource = (id,flag) => {
    if (id === "meli") {
      setActiveMeli(flag)
      setActiveCnova(false)
      setActiveMagalu(false)
    } else if (id === "cnova") {
      setActiveCnova(flag)
      setActiveMeli(false)
      setActiveMagalu(false)
    } else {
      setActiveMagalu(flag)
      setActiveCnova(false)
      setActiveMeli(false)
    }
  }


    return (
        <div> 
            <Navbar onClickResource={activeResource} />
            {!activeMeli && !activeCnova && !activeMagalu && <Preloader />}
            {activeMeli && <Meli/>}
            {activeCnova && <div><span>Cnova</span><br /></div>}
            {activeMagalu && <div><span>Magalu</span><br /></div>}
        </div>
    )
}
