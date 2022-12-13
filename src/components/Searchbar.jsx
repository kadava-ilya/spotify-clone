import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {

  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search/${search}`)
  }

  return (
    <form
      autoComplete="off"
      className="p-4 text-gray-400 focus-within:text-gray-600"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-field" className="sr-only">
        Search All Songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          id="search-field"
          name="search-field"
          type="search"
          placeholder="Search..."
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  )
};

export default Searchbar;
