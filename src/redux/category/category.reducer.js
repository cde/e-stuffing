import SECTIONS from './category.data_demo'
const INITIAL_STATE = {
    sections:  SECTIONS
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default CategoryReducer;