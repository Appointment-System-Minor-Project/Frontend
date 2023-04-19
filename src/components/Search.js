import { useState } from "react";
import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";


const Search = ({
  onQueryChange,
  query,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortBYChange,
}) => {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          onChange={(event) => {
            onQueryChange(event);
          }}
          type="text"
          name="query"
          id="query"
          value={query}
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
