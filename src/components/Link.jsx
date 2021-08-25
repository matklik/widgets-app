import React, { useState } from 'react';

const Link = ({ className, href, children }) => {
    const [activeIndex, setActiveIndex] = useState('');

    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        setActiveIndex(href);
    };
    const active = window.location.pathname === activeIndex ? ' active' : '';

    return <a onClick={onClick} className={className + active} href={href}>{children}</a>; 
};

export default Link;