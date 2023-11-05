import "./search_bar.scss"

const SearchBar = () => {
    
    return (
        <form className="search-bar">
            <input type="text" title="Search" placeholder="Search for your pet..."/>
            <button type="submit"></button>
        </form>
    )
}

export default SearchBar