import React, { Component } from 'react';
import './Category.scss'
import MenuItem from "../MenuItem/MenuItem";
import categorySections from './category_data_demo'

class Category extends Component {
    constructor(){
        super();

        this.state = {
            sections: categorySections
        }
    }


    render() {
        return( <div className='category-menu'>
            {
                this.state.sections.map( ({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }

        </div>)
    }
}

export default Category;