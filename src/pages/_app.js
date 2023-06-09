import { useState, useEffect } from "react";

import SearchBox from "@/components/search-box/search-box.component";
import CardList from "@/components/card-list/card-list.component";
import './../styles/App.css'


const App = () => {

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)
   
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)

    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users))
    }, [])

   useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters)
   },[monsters, searchField])

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                className='monsters-searchBox'
                onChangeHandler={onSearchChange}
                placeholder='search monsters'
            />

            <CardList monsters={filteredMonsters} />
        </div>
    )
}

export default App;