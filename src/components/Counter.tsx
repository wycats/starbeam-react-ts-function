import { Component } from '@starbeam/react';
import { Cell } from '@starbeam/universal';
import './Counter.css';

export function Counter(): JSX.Element {
  return Component(() => {
    const count1 = Cell(0);
    const count2 = Cell(0);

    const total = () => count1.current + count2.current;

    return () => (
      <>
        <pre>
          <span>count1</span> + <span>count2</span> = <span>total</span>
        </pre>
        <pre>
          <span>{count1.current}</span> + <span>{count2.current}</span> ={' '}
          <span>{total()}</span>
        </pre>
        <h3 className="count1">count1</h3>
        <div className="buttons">
          <button onClick={() => count1.current++}>increment</button>
          <button onClick={() => count1.set(0)}>reset</button>
        </div>
        <h3 className="count2">count2</h3>
        <div className="buttons">
          <button onClick={() => count2.current++}>increment</button>
          <button onClick={() => count2.set(0)}>reset</button>
        </div>
      </>
    );
  });
}
