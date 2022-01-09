import React from 'react'

const Link = ({ className, href, children })  => {
    return (
        <div>
            <a className={className} href={href}>{children}</a>
        </div>
    )
}

export default Link
