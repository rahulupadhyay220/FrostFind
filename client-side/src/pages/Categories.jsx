import React, { useState } from 'react';
// import Searchbar from '../components/Searchbar';
// import school from '../components/data_store/school';
// import college from '../components/data_store/college';
// import hospitals from '../components/data_store/hospitals';
// import ecommerce from '../components/data_store/ecommerce';
// import hotel from '../components/data_store/hotel';
// import restaurants from '../components/data_store/restaurants';
// import ResultCard from '../components/Resultcard';
// import { Search } from 'lucide-react';


// function Categories() {
//   const CATEGORIES = [
//     { id: 'ecommerce', name: 'E-commerce', icon: 'ShoppingBag' },
//     { id: 'school', name: 'School', icon: 'GraduationCap' },
//     { id: 'college', name: 'College', icon: 'Building2' },
//     { id: 'hospitals', name: 'Hospitals', icon: 'Stethoscope' },
//     { id: 'hotel', name: 'Hotel', icon: 'Hotel' },
//     { id: 'restaurants', name: 'Restaurants', icon: 'Utensils' },
//     { id: 'upcoming', name: 'Upcoming', icon: 'Clock' },
//   ];

//   const DATA_STORE = {
//     ecommerce,
//     school,
//     college,
//     hospitals,
//     hotel,
//     restaurants
//   };
//   <ResultCard/>

//   const [currentCategory, setCurrentCategory] = useState('school');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeFilter, setActiveFilter] = useState('bestMatch');
//   const data = DATA_STORE[currentCategory] || [];
//   let filteredData = data.filter(item => 
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   if (activeFilter === 'topRated') {
//     filteredData = [...filteredData].sort((a, b) => b.rating - a.rating);
//   } else if (activeFilter === 'verifiedOnly') {
//     filteredData = filteredData.filter(item => item.isVerified);
//   }

//   const activeCategoryObj = CATEGORIES.find(c => c.id === currentCategory) || CATEGORIES[0];

//   return (
//     <div>
//       <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col">

//       {/* Header & Categories */}
//       <div className="bg-white border-b border-gray-200 pb-8">
//         <div className="bg-white pt-6 pb-2">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Scrollbar hidden with custom class or inline style */}
//                 <div className="flex justify-between sm:justify-start sm:gap-12 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
//                     {CATEGORIES.map((cat) => {
//                       const isActive = cat.id === currentCategory;
//                       const Icon = cat.icon;
//                       return (
//                         <button 
//                           key={cat.id}
//                           onClick={() => setCurrentCategory(cat.id)}
//                           className={`flex flex-col items-center gap-2 min-w-20 group transition-all duration-200 cursor-pointer ${isActive ? 'scale-105' : ''}`}
//                         >
//                             <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${isActive ? 'bg-blue-50 border-blue-500 shadow-md' : 'bg-white border-transparent hover:bg-gray-50 hover:border-gray-200'}`}>
//                                 <Icon className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
//                             </div>
//                             <span className={`text-xs font-semibold ${isActive ? 'text-blue-700' : 'text-gray-500'}`}>{cat.name}</span>
//                         </button>
//                       );
//                     })}
//                 </div>
//             </div>
//         </div>
//         <Searchbar/>
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grow w-full">
//           <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6 gap-4">
//             <div>
//                 <h1 className="text-2xl font-bold text-gray-900">{activeCategoryObj.name} Analysis Results</h1>
//                 <p className="text-gray-500 text-sm mt-1">Showing top rated and verified entities based on our FrostFind AI.</p>
//             </div>
//             <div className="flex bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
//                 <button 
//                   onClick={() => setActiveFilter('bestMatch')}
//                   className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeFilter === 'bestMatch' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
//                 >
//                   Best Match
//                 </button>
//                 <button 
//                   onClick={() => setActiveFilter('topRated')}
//                   className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeFilter === 'topRated' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
//                 >
//                   Top Rated
//                 </button>
//                 <button 
//                   onClick={() => setActiveFilter('verifiedOnly')}
//                   className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeFilter === 'verifiedOnly' ? 'bg-gray-100 text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
//                 >
//                   Verified Only
//                 </button>
//             </div>
//         </div>

//         {/* Results Grid */}
//         <div className="space-y-4">
//           {filteredData.length > 0 ? (
//             filteredData.map(item => (
//               <ResultCard key={item.id} item={item} />
//             ))
//           ) : (
//             <div className="text-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
//                    <Search className="w-8 h-8 text-gray-300" />
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-900">No results found for {activeCategoryObj.name}</h3>
//                 <p className="text-gray-500 mt-1">This category is just a demo placeholder or your search returned no results.</p>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Categories;