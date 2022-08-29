import React from 'react';

function Saludo({ nombre, apellido, profesion, edad }) {
    return (
        <div>
            {nombre && apellido && profesion && edad ? (
                <>
                    <p>
                        {' '}
                        Hola mi nombre es {nombre} {apellido} soy {profesion} y
                        el año que viene tendre {edad + 1}
                    </p>
                </>
            ) : (
                <>
                    <h1>Cargando...</h1>
                </>
            )}
        </div>
    );
}

export default Saludo;
