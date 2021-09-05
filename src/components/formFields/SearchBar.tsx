import { ChangeEventHandler, FocusEventHandler, forwardRef } from "react";

// Icon Components
import { SearchIcon } from "@heroicons/react/solid";

interface ISearchBarProps {
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}
const SearchBar = forwardRef<HTMLInputElement, ISearchBarProps>(
  (
    { placeholder = "Search", name = "search", value, onChange, onBlur },
    ref
  ) => {
    return (
      <div className="w-full flex">
        <label htmlFor={name} className="sr-only">
          {placeholder}
        </label>
        <div className="relative w-full text-gray-400 dark:text-gray-400 focus-within:text-gray-600 dark:focus-within:text-gray-300">
          <div className="absolute inset-y-0 left-0 flex items-center justify-center pointer-events-none">
            <SearchIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            ref={ref}
            id={name}
            name={name}
            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-600 dark:focus:placeholder-gray-300 focus:ring-0 focus:border-transparent sm:text-sm bg-white dark:bg-gray-800"
            placeholder={placeholder}
            type="search"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
    );
  }
);

export default SearchBar;
