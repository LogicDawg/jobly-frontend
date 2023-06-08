import { useState } from "react";

const Search = ({searchFor}) => {

    console.debug("SearchForm", "searchFor=", typeof searchFor);

    const [searchTerm, setSearchTerm] = useState("");
  
    /** Tell parent to filter */
    function handleSubmit(evt) {
      // take care of accidentally trying to search for just spaces
      evt.preventDefault();
      searchFor(searchTerm.trim() || undefined);
      setSearchTerm(searchTerm.trim());
    }
  
    /** Update form fields */
    function handleChange(evt) {
      setSearchTerm(evt.target.value);
    }
  
    return (
        <div className="">
          <form className="" onSubmit={handleSubmit}>
            <input
                className=""
                name="searchTerm"
                placeholder="Enter search term.."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit" className="">
              Submit
            </button>
          </form>
        </div>
    );
}

export default Search;