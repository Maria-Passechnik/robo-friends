import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 br2 mb4 ba b--black bg-light-gray'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
