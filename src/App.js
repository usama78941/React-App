import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css'


class App extends Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
            .catch(() => console.log(`The error is below: `))
    }

    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    handleChange = (e) => {
        (this.setState({searchField: e.target.value}))
    } // this is an arrow function that does not require us to bind the scope of  'this' to 'this'

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(singleMonster =>
            singleMonster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className='App'>
                <h1 className='h1'>Monsters Rolodex</h1>
                <SearchBox handleChange={e => this.handleChange(e)}
                           placeHolder='Search Monsters'/>
                <CardList monster={filteredMonsters}/>
            </div>
        )
    }
}

export default App;