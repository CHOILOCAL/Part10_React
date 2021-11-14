import React, {useEffect, useState} from 'react';

const UseWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const resize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, []);

    return width;
};

export default UseWindowWidth;
