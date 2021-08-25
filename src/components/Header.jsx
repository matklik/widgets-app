import React, { useState } from 'react';
import Link from './Link';

const Header = ({ items }) => {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const headerMenuItems = items.map((item, index) => {

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