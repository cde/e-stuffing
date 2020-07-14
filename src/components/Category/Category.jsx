import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategorySections } from '../../redux/category/category.selectors';

import MenuItem from '../MenuItem/MenuItem';

import './Category.scss';

const Category = ({ sections }) => (
    <div className='category-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectCategorySections
});

export default connect(mapStateToProps)(Category);