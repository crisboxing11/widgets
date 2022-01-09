import React from 'react'

const Link = ({ className, href, children })  => {
    const onClick = (e) => {
        e.preventDefault()
        window.history.pushState({},"",href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }
    return (
        <div>
            <a
             className={className} 
             href={href}
             onClick={onClick}
             >{children}</a>
        </div>
    )
}

export default Link
