import React, { useState, useReducer } from 'react'
// import ReactDOM from 'react-dom'

function appReducer(state, { type }) {
  switch (type) {
    case 'ADD':
      console.log(type)
      return [
        ...state,
        {
          id: Date.now(),
          text: '',
          completed: false
        }
      ]
    default:
      return state
  }
}

export default function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('DEFAULT VALUE')
  const [state, dispatch] = useReducer(appReducer, [])

  return (
    <div>
      <div style={{ border: '1px solid #000', padding: '20px', margin: '5px' }}>
        <h2>counter</h2>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>UP</button>
        <button onClick={() => setCounter(counter - 1)}>DOWN</button>
      </div>
      <div style={{ border: '1px solid #000', padding: '20px', margin: '5px' }}>
        <h2>text entry</h2>
        <p>{name}</p>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div style={{ border: '1px solid #000', padding: '20px', margin: '5px' }}>
        <button onClick={() => dispatch({ type: 'ADD' })}>ADD TO ARRAY</button>
        {state && state.map(i => <p key={i.id}>{i.id}</p>)}
      </div>
    </div>
  )
}

// const styles = {
//   outerContainer: {
//     height: '100vh',
//     width: '100vw',
//     background: '#ddd',
//     padding: '20px'
//   },
//   controller: {
//     background: 'rgba(0,0,255,0.2)',
//     padding: '8px',
//     width: 'fit-content'
//   },
//   container: {
//     background: '#fff',
//     padding: '20px'
//   }
// }

// export class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       height: 50,
//       width: 50,
//       difference: 0,
//       clickedMouseX: null,
//       clickedMouseY: null,
//       releasedMouseX: null,
//       releasedMouseY: null
//     }
//   }

//   resizePanel = () => {
//     return null
//   }

//   stopResize = (e, button) => {
//     let difference = this.state.difference
//     let width = this.state.width
//     if (button === 'up') {
//       difference += e.screenX
//       width = this.state.width + difference
//       this.setState({ width, difference: 0 })
//       console.log('diff: ' + difference)
//     }
//     if (button === 'down') {
//       difference = e.screenX
//       console.log('DOWN: x: ' + e.screenX)
//     }
//   }

//   componentDidMount() {
//     ReactDOM.findDOMNode(this).addEventListener('mousemove', this.resizePanel)
//     ReactDOM.findDOMNode(this).addEventListener('mouseup', e =>
//       this.stopResize(e, 'up')
//     )
//     ReactDOM.findDOMNode(this).addEventListener('mousedown', e =>
//       this.stopResize(e, 'down')
//     )
//   }

//   render() {
//     return (
//       <div style={styles.outerContainer}>
//         <h1>A Re-Sizable Element</h1>
//         <div style={styles.controller}>
//           <div
//             style={{
//               background: '#fff',
//               padding: '20px',
//               width: this.state.width
//             }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App
