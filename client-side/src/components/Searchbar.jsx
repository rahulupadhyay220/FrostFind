import React from 'react'

const Searchbar = () => {
  return (
    <div>
          <div className="max-w-3xl mx-auto px-4 mt-6">
            <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-blue-500 transition-colors" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search specific items in ${activeCategoryObj.name}...`}
                  className="w-full pl-12 pr-32 py-3.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 shadow-sm text-sm"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 text-white px-6 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors">
                  Search
                </button>
            </div>
        </div>
      </div>
  )
}

export default Searchbar