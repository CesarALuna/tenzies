import React from 'react'
import Dice from './components/Dice'

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map((die) => <Dice value={die} />)

  return (
    <main>
      <div className="dice--container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        ROLL
      </button>
    </main>
  )
}
