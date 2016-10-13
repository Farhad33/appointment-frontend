import './App.css'
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Services from './components/Services'
import Schedule from './scheduler/Schedule'
import ContactInfo from './components/ContactInfo'




// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { isModalOpen: false }
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.openModal()}>Open modal</button>
//         <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
//           <h1>Modal title</h1>
//           <p>hello</p>
//           <p><button onClick={() => this.closeModal()}>Close</button></p>
//         </Modal>
//       </div>
//     )
//   }

//    openModal() {
//       this.setState({ isModalOpen: true })
//     }

//     closeModal() {
//       this.setState({ isModalOpen: false })
//     }
// }

const App = (props) => {
  return (
    <ContactInfo />,
    <Services />
  )
}

export default App
