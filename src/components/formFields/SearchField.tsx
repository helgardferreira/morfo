import { forwardRef } from "react";

// Icon Components
import { SearchIcon } from "@heroicons/react/solid";

interface IProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const SearchField = forwardRef<HTMLInputElement, IProps>(
  (
    { placeholder = "Search", name = "search", value, onChange, onBlur },
    ref
  ) => {
    return (
      <div className="max-w-lg w-full lg:max-w-xs">
        <label htmlFor={name} className="sr-only">
          {placeholder}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            ref={ref}
            id={name}
            name={name}
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
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

export default SearchField;
