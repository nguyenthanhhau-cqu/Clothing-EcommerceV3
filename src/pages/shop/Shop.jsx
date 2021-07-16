import React from 'react';
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const Shop = () => {
    return <div>
        <div className='shop-page'>
            {
                SHOP_DATA
                    .map(({id, ...collectionProps}) => (
                        <CollectionPreview key={id} {...collectionProps} />
                    ))
            }
        </div>
    </div>
}

export default Shop;

