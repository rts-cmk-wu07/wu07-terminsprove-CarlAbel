import { SearchIcon } from "lucide-react"

export default function SearchField() {
  return (
    <div className="w-full px-2">
      <form className="relative flex ">
        <button
          className="absolute inset-y-0 left-0 flex items-center pl-3"
          type="submit"
        >
          <SearchIcon className="text-gray-400" size={16} />
        </button>
        <input
          className="w-full center border-2 border-gray-250 bg-gray-200 h-12 px-5 pl-10 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search classes"
        />
      </form>
    </div>
  )
}
