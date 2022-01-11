import React from 'react'

const Search = ({find}) => (
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-primary" type="submit" onClick={(e) => find(e)}>Search</button>
      </form>
)

export default Search;