import React, { Component } from 'react'
import './header.css'



class Header  extends Component{

    constructor(){
      super();
      this.state = {
        mensaje : [
          'Hola, en que andas?', 
          'Bienvenido',
          'Cuidado donde entras'
        ],
        number : 0
      }
    }

    next(){
      this.setState ({ number: this.state.number + 1 })      
    }

    
    
    render(){
      
      return (
        <body onClick ={() => this.next()} >
            <h1> {this.state.mensaje[this.state.number]}</h1>
            <p className="subtitle">Vengan esos Euros!</p>
        </body>
      )
      
    }
}

export default Header


