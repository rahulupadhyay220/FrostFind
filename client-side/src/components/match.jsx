import React from 'react'

function match() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6 gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{activeCategoryObj.name} Analysis Results</h1>
                <p className="text-gray-500 text-sm mt-1">Showing top rated and verified entities based on our FrostFind AI.</p>
            </div>
            <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
                <button 
                  onClick={() => setActiveFilter('bestMatch')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeFilter === 'bestMatch' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Best Match
                </button>
                <button 
                  onClick={() => setActiveFilter('topRated')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeFilter === 'topRated' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Top Rated
                </button>
                <button 
                  onClick={() => setActiveFilter('verifiedOnly')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeFilter === 'verifiedOnly' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Verified Only
                </button>
            </div>
        </div>
  )
}

export default match