import React from 'react';
import './App.css';
import YourTasks from './YourTasks';
import './Screensize.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
      
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);

  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem
    if(newItem.text!==""){
      const newitems=[...this.state.items, newItem];
      this.setState({
        items: newitems,
        currentItem: {
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })
  }

  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key===key) {
        item.text=text;
      }
    })
    this.setState ({
      items: items
    })
  }

  render(){
    return(
      <div className="App">
        <header>
          <h1>Huskeliste</h1>
        </header>

        <main>
          <form className="new-task" onSubmit={this.addItem}>
              <input
                type="text" 
                placeholder="Hva vil du huske?" 
                value={this.state.currentItem.text} 
                onChange={this.handleInput}
                alt="Skriv her hva du vil huske. text-input.">  
              </input>
              <button 
                type="submit" 
                alt="Trykk her for å legge til gjøremål. button.">
              Legg til</button>
            </form>

          <YourTasks 
            items = {this.state.items} 
            deleteItem = {this.deleteItem}
            setUpdate = {this.setUpdate}
            handleChange = {this.handleChange}>
          </YourTasks>
        </main>
      </div>
    )
  }
}

export default App;