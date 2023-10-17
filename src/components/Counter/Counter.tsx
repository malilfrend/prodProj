import React from 'react';
import s from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  return (
    <div className={s.btn}>
      <h1 className={s.green}>{count}</h1>
      <button onClick={increment} type='button'>+1</button>
    </div>
  )
}
