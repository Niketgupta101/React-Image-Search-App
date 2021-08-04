import React, { useState } from "react";
import "../../App.css";
import searchIcon from '../../img/icons8-search-50.png'
import { setQuery } from "../../state/action-creator";

const Search = ({ Change }) => {
  const [text, settext] = useState('');

  const onChange = (q) => {
    settext(q);
    setQuery(q==='' ? 'Random':q);
    Change(q==='' ? 'Random':q);
  }

  return (
    <>
      <div className="searchBar">
        <input type="text" placeholder='Type to search ...' className="searchBox" value={text} onChange={(e) => onChange(e.target.value)}/>
        <button type='submit' className='btn btn-primary searchButton' onClick={()=>onChange(text)}><img src={searchIcon} alt="Search"/></button>
      </div>
    </>
  );
};

export default Search;
