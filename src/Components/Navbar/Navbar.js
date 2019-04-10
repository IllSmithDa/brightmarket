import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            shopCategory: 'All Categories',
            searchTerm: '',        
        }
    }
    setCategory = (category) => {
        this.setState({ shopCategory: category});
    }
    updateTerm = (event) => {
        this.setState({ searchTerm: event.target.value})
    }
    searchPage = () => {
        const {searchTerm} = this.state;
        window.location = `/result/${searchTerm}`
      }
    goHome = () => {
        window.location = "/";
    }
    
    onKeyPressed = (e) => {
      console.log(e.keyCode);
      // 13 is keycode for Enter
      if (e.keyCode === 13) {
        const {searchTerm} = this.state;
        window.location = `/result/${searchTerm}`
      }
    }
    render () {
        const { shopCategory } = this.state;
        return(
         <div className="navbar-container">
            <div className="left-container">
                <h1 className="app-title" onClick={this.goHome}>Light Market</h1>
            </div>
            <div className="right-container">
              <div className="dropdown">
                <button className="dropdown-button">{shopCategory} &#x25BE; </button>
                <div className="dropdown-content">
                  <a href="#computers" className="dropdown-item" onClick={() => {this.setCategory('Computers')}}> Computers</a>
                  <a href="#tablets" className="dropdown-item" onClick={() => {this.setCategory('Tablets')}}> Tablets</a>
                  <a href="#laptops" className="dropdown-item" onClick={() => {this.setCategory('Laptops')}}> Laptops</a>
                </div>
              </div>
              <input onChange={this.updateTerm} className="search-input" onKeyDown={this.onKeyPressed} />
              <button className="search-button" onClick={() => {this.searchPage()}}>Search</button>
            </div>
          </div>
          
        )
    }
}