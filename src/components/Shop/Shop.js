import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setPtoducts]=useState(first10);

    console.log(first10);
    return (
        <div>
            <h1>This is h1</h1>
            <h3>{products.length}</h3>
            <ul>
                {products.map(el=><li key={el.key}>{el.name} </li>)}
            </ul>
            
        </div>
    );
};

export default Shop;