import React, { useState } from 'react';
import Link from './Link';

const Header = ({ items }) => {
    
    // eslint-disable-next-line no-unused-vars
    const [activeIndex, setActiveIndex] = useState(0);

    // eslint-disable-next-line no-unused-vars
    const onItemClick = (index) => {
        setActiveIndex(index);
    };

    const headerMenuItems = items.map((item, index) => {
        // eslint-disable-next-line no-unused-vars
        const active = window.location.pathname === item.href ? 'active' : '';

        return (<React.Fragment key={item.name}>
            <Link href={item.link} className="item">{item.name}</Link>
        </React.Fragment>
        );
    });

    return (
        <div className="ui secondary pointing menu">
            {headerMenuItems}
        </div>
    );
};

export default Header;