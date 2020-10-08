import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Meli from './components/Meli'
import Skyhub from './components/Skyhub'
import Preloader from './components/Preloader'
import Zoom from './components/Zoom'

export default function App() {
  const [ activeMeli, setActiveMeli ] = useState(false)
  const [ activeCnova, setActiveCnova ] = useState(false)
  const [ activeSkyhub, setActiveSkyhub ] = useState(false)
  const [ activeZoom, setActiveZoom ] = useState(false)
 
  const activeResource = (id,flag) => {
    if (id === "meli") {
      setActiveMeli(flag)
      setActiveCnova(false)
      setActiveSkyhub(false)

    } else if (id === "skyhub") {
      setActiveSkyhub(flag)
      setActiveMeli(false)
      setActiveCnova(false)

    } else if (id === "zoom") {
      setActiveZoom(flag)
      setActiveSkyhub(false)
      setActiveMeli(false)
      setActiveCnova(false)

    } else if (id === "back") {
      setActiveMeli(false)
      setActiveCnova(false)
      setActiveSkyhub(false)
      setActiveZoom(false)

    } else {
      setActiveMeli(false)
      setActiveCnova(false)
      setActiveSkyhub(false)
      setActiveZoom(false)
      window.alert("As ferramentas para esse marketplace ainda estão em desenvolvimento.")
    }
  }


    return (
        <div> 
            <Navbar onClickResource={activeResource} />
            {!activeMeli && !activeCnova && !activeSkyhub && !activeZoom && <Preloader onClickResource={activeResource} />}
            {activeMeli && <Meli onClickResource={activeResource}/>}
            {activeSkyhub && <Skyhub onClickResource={activeResource} />}
            {activeCnova && <div><span>Cnova</span><br /></div>}
            {activeZoom && <Zoom onClickResource={activeResource} />}
        </div>
    )
}

//     "heroku-postbuild": "npm install && npm run build && cd backend && npm install && npm start"


/*   "engines": {
  "node": "12.18.4"
} */
