import React from 'react'
import Dice from './components/Dice'
import { nanoid } from 'nanoid'

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState('false')

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log('winnar')
    }
  }, [dice])

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDice()
      })
    )
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const diceElements = dice.map((die) => (
    <Dice
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
  ))

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all the dice are the same. Click a die to freeze it.
      </p>
      <div className="dice--container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        ROLL
      </button>
      {tenzies && <h1>YOU WIN BITCH</h1>}
    </main>
  )
}
