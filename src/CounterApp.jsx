import Proptypes from 'prop-types'
import { useState } from 'react';

export default function CounterApp({ initialValue= 10 }) {
    const [value, setValue] = useState(initialValue)
    const increment = () => setValue( value + 1 )
    const decrement = () => setValue( value - 1 )
    const reset = () => setValue( initialValue )
  return (
    <main className='container'>
        <div>
            <h1>CounterApp</h1>
            <kbd data-testid="test-initialValue"> { value } </kbd>
        </div>
        <footer style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'  }} >
            <button 
                data-testid="test-increment"
                onClick={ increment }
                > +1 </button>
            <button 
                data-testid="test-decrement"
                onClick={ decrement }
            > -1 </button>
            <button
                data-testid="test-reset" 
                disabled={ value === initialValue } 
                onClick={ reset } 
            >
                 Reset 
            </button>
        </footer>
    </main>
  )
}

CounterApp.propTypes = {
    initialValue: Proptypes.number
}

// CounterApp.defaultProps = {
//     value: 10
// }