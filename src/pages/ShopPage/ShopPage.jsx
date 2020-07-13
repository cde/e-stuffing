import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const ShopPage = ( { collections }) => (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                < CollectionPreview key= {id} {...otherCollectionProps} />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector ({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);


