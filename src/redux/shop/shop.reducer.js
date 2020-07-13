import shopData from './shop_data_demo'
const initialState = {
    collections: shopData
}

const ShopReducer = (state = initialState ,action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default ShopReducer;