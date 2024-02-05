export default function SearchBar() {
    return (
        <form>
            <label htmlFor="search-titles" className="mb-2 text-sm font-medium text-black sr-only dark:text-black">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="search-titles" className="block w-full p-4 ps-10 text-sm text-black border border-green-500 rounded-full focus:outline-green-500 bg-green-500 hover:bg-green-500 focus:ring-green-500 focus:border-green-500 focus: placeholder-black dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Rechercher un titre liké" required />
                <button type="submit" className="text-black absolute end-2.5 bottom-2.5 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
            </div>
        </form>
    )
}