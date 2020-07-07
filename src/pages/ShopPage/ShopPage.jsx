import React, { Component } from 'react';

import shopData from './shop_data_demo';
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: shopData
        }
    }
    render(){
        const { collections } = this.state;
        console.log(collections);
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        < CollectionPreview key= {id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
};

export default ShopPage;


