import React from 'react'

const Search = () => {
  return (
    <form className='w-[50%] mx-auto mb-10'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
      <div className="absolute inset-y-0 end-36 flex items-center ps-3 pointer-events-none">
      <svg className="w-16 h-16" viewBox="0 0 58 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.7924 18.6219C32.2173 18.6219 35.8045 15.0347 35.8045 10.6098C35.8045 6.18481 32.2173 2.59767 27.7924 2.59767C23.3674 2.59767 19.7803 6.18481 19.7803 10.6098C19.7803 15.0347 23.3674 18.6219 27.7924 18.6219Z" stroke="#2D3748" stroke-width="1.33535" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.852 19.236C35.3238 20.6603 36.401 20.8028 37.2289 19.5564C37.9856 18.4169 37.4871 17.4822 36.1161 17.4822C35.1013 17.4733 34.5315 18.2656 34.852 19.236Z" stroke="#2D3748" stroke-width="1.33535" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
      <input type="search" id="default-search" className="placeholder-[#265E73] bg-white text-center block w-full p-4 ps-10 text-sm  border border-[#E2E8F0] rounded-[15px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kannst du etwas nicht finden? suche es hier!" required />
    </div>
  </form>
  )
}

export default Search