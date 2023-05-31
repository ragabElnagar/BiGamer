import { useState } from "react";

const title = "Search Your keywords";

function SearchBar() {
  const [search, setSearch] = useState("");
  return (
    <div className="widget widget-search">
      <div className="widget-header">
        <h5>{title}</h5>
      </div>
      <form action="/" className="search-wrapper">
        <input
          type="text"
          name="s"
          id="item01"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Here..."
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
