import React from 'react';

function Navbar({ menu }) {
    const renderItem = (nombre) => <p>{nombre}</p>;

    return (
        <>
            {menu.map((item) => (
                <>{renderItem(item)}</>
            ))}
        </>
    );
}

export default Navbar;
