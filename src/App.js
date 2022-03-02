import React, { Component } from "react";
import { CardList } from "./Components/CardList/CardList";
import { SearchBox } from "./Components/SearchBox/SearchBox";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.monsterSearchHandler = this.monsterSearchHandler.bind(this)
  }

  monsterSearchHandler = (event) => {
    this.setState({ searchField: event.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" onChange={this.monsterSearchHandler}  />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
