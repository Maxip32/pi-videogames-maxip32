import {React, useState} from 'react'
import { connect } from 'react-redux'
import { searchByName, getAllGames } from '../../actions/actions'
import './SearchBar.css'


function SearchBar({searchByName, getAllGames}) {

    const [input, setInput] = useState({
        buscar: ''
    })

    const handleInputChange = function(e) {
          setInput({
          [e.target.name]: e.target.value
        });
    }

    const handleOnClick = () => {
        searchByName(input.buscar)
        setInput({
            buscar: ''
        });
    }

    const handleOnClickAll = () => {
        getAllGames()
        setInput({
            buscar: ''
        });
    }

    return (
      <div className="searchbar">
        <input
          className="barbuton"
          name="buscar"
          placeholder="Find the Game..."
          onChange={handleInputChange}
          value={input.buscar}
          autoComplete="on"
        ></input>
        <button className="buton" onClick={handleOnClick}>
          FIND
        </button>
        <button className="buton" onClick={handleOnClickAll}>
          ALL - GAMES
        </button>
      </div>
    );
}

export default connect(null, { searchByName, getAllGames })(SearchBar)
