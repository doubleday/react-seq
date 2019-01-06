import React from 'react'
import { observer } from 'mobx-react-lite'
import { useDispatcher } from '../App'

interface MyCounterProps {
    clickCount: number, onIncrement: () => void
}

function MyCounter (props: MyCounterProps) {
  return (
    <div className='counter'>
      <p>You clicked {props.clickCount} times</p>
      <button onClick={props.onIncrement}>Click me!</button>
    </div>
  )
}

const Counter = () => {
  const [store, dispatcher] = useDispatcher()
  const onIncrement = () => dispatcher.dispatch({type: 'Increment'})
  return (
    <MyCounter clickCount={store.currentCount} onIncrement={onIncrement} />
  )
}

// const Counter = observer(() => {
//   return (
//     <div className='counter'>
//       <p>You clicked {counterStore.currentCount} times</p>
//       <button onClick={() => counterStore.increment()}>Click me!</button>
//     </div>
//   )
// })

export default Counter
