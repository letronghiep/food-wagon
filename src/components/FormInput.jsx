import React from 'react'

function FormInput({ type, placeholder, onChange, value, label, check, message, ...props }) {
    return (
        <>
            <label className="relative mt-6 w-full rounded-lg border">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                    className="w-full py-2 px-6 text-base text-black   border-2 rounded-lg border-opacity-50 outline-none focus:border-orange-500 placeholder-gray-400 placeholder-opacity-0 transition duration-200"
                />
                <span className="px-2 uppercase text-gray-600 bg-white text-base text-opacity-80  absolute top-1/2 left-4 -translate-y-1/2 transition duration-200 input-text cursor-text">
                    {label}
                </span>
            </label>

        </>

    )
}

export default FormInput
