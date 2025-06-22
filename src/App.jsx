import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Deck from '../components/Deck'
import Card from '../components/Card'
import { animateDeal } from './animations/dealcards'
import styles from './styles.module.scss'
import {useIsMobile} from "./hooks/useMobile.jsx";

export default function App() {

  const decks = [1, 2, 3, 4, 5, 6, 7]

  const [dealtCards, setDealtCards] = useState([])
  const [deckCount, setDeckCount] = useState(0)

  const [selectedDeck, setSelectedDeck] = useState('')

  const dealtRefs = useRef([])
  const deckGroupRef = useRef()

  const handleDeckChange = (count) => setDeckCount(count)
  const handleDeal = (cards) => {
    dealtRefs.current = cards.map(() => React.createRef())
    setDealtCards(cards)
  }
  
  useEffect(() => {
    if(!dealtRefs.current || !Array.isArray(dealtRefs.current)) return
    if (dealtRefs.current.length === 0 || !deckGroupRef.current) return
    
    const tryAnimate = () => {
      const ready = dealtRefs.current.every(ref => ref?.current)

      if(ready) {
        animateDeal(dealtRefs.current, deckGroupRef)
      } else {
        requestAnimationFrame(tryAnimate)
      }
    }

    tryAnimate()
  },[dealtCards])

  const requestDeal = (n) =>
    window.dispatchEvent(new CustomEvent('deal-request', { detail: n }))
  
  const resetDeck = () => window.dispatchEvent(new Event('reset-deck'))

  const handleSelectDeck = (val) => {
    const {value} = val.target
    console.log("val", value)
    requestDeal(value)
    setSelectedDeck("default")
  }

  const isMobileView = useIsMobile()

  console.log(isMobileView)
  const CanvasWidth = isMobileView ? '349px' : ' 1000px'
  const CanvasHeight = isMobileView ? '294px' : '715px'


  return (
    <div className={styles.container}>
    {/*  <div className="controls">*/}
    {/*  <div className="deck-count">Deck: {deckCount} cards left</div>*/}
    {/*  <div className="buttons">*/}
    {/*    {[1, 2, 3, 4, 5, 6, 7].map((n) => (*/}
    {/*        <button key={n} onClick={() => requestDeal(n)}>*/}
    {/*          Deal {n}*/}
    {/*        </button>*/}
    {/*    ))}*/}
    {/*    <button onClick={resetDeck}>*/}
    {/*      Reset Deck*/}
    {/*    </button>*/}
    {/*  </div>*/}
    {/*</div>*/}
      <div className={styles.controls}>
        <div className={styles.dropdownContainer}>
          <select value={selectedDeck} onChange={handleSelectDeck} >
            <option value='default'>Select Decks</option>
            {decks.map((deck) =>  {
              return (
                  <option value={deck}>{deck}</option>
              )})
            }

          </select>
          <button  onClick={resetDeck}>Reset</button>
        </div>
        <div className="textContainer">
          <h4>Deck: {deckCount} cards left</h4>
        </div>

      </div>

      <div className={styles.canvaWrapper}>
        <Canvas
            style={{ width:  CanvasWidth, height: CanvasHeight }}
              shadows
          dpr={[1, 2]}
          camera={{ position: [0, 2, 12], fov: 50 }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight
            castShadow
            position={[5, 5, 5]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <Deck 
            onDeal={handleDeal}
            onDeckChange={handleDeckChange}
            groupRef={deckGroupRef}
          />

          {dealtCards.map((code, idx) => {
            const count = dealtCards.length
            //const xOffset = -((count - 1) / 2) + idx * 1.2
            const rotY = (idx - (count - 1) / 2) * 0.1
            const origin = deckGroupRef.current.position
            return (
              <Card
                key={`${code}-${idx}`}
                ref={dealtRefs.current[idx]}
                code={code}
                dealt={true}
                rotation={[0, rotY, 0]}
                position={[origin.x, origin.y, origin.z]}
              />
            )
          })}
        </Canvas>
      </div>

    </div>
  )
}
