import React from 'react'

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : 'white',
  }

  return (
    <div className="dice--face" style={styles}>
      <h2 className="dice--number">{props.value}</h2>
    </div>
  )
}
