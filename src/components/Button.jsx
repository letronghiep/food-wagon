import React from 'react'

function Button({ LeftIcon, children, className, onClick, RightIcon, images, props }) {
    return (
        <button onClick={onClick} className={className} {...props}>
            {LeftIcon && <>{LeftIcon}</>}
            {images && <img src={images} alt='' />}
            <span className='ml-2'>{children}</span>
            {RightIcon && <>{RightIcon}</>}
        </button >
    )
}

export default Button
