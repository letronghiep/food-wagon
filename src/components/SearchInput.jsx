import React from 'react'
function SearchInput({ Icon, placeholder, className, src }) {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                {src && <img src={src} alt='search' />}
                {Icon && <Icon />}

            </span>
            <input className=" placeholder:text-slate-400 block bg-white w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-200 focus:ring-orange-400 focus:ring-1 sm:text-sm text-black" placeholder={placeholder} type="text" name="search" />
        </div>
    )
}

export default SearchInput
