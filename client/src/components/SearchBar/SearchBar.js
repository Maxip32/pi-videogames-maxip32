import {React, useState} from 'react'
import { connect } from 'react-redux'
import { searchByName, getAllGames } from '../../actions/actions'
import './SearchBar.css'


function SearchBar({searchByName, getAllGames}) {

    const [input, setInput] = useState({
        find: ''
    })

    const handleInputChange = function(e) {
          setInput({
          [e.target.name]: e.target.value
        });
    }

    const handleOnClick = () => {
        searchByName(input.find)
        setInput({
            find: ''
        });
    }

    const handleOnClickAll = () => {
        getAllGames()
        setInput({
            find: ''
        });
    }

    return (
      <div className="searchbar">
        <input
          className="barbuton"
          name="Find"
          placeholder="Find the Game..."
          onChange={handleInputChange}
          value={input.find}
          autoComplete="off"
        ></input>
        <button className="buton" onClick={handleOnClick}>
          Find
        </button>
        <button className="buton" onClick={handleOnClickAll}>
          ChargeAll-Games
        </button>
      </div>
    );
}

export default connect(null, { searchByName, getAllGames })(SearchBar)
