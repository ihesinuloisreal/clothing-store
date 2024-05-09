import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';

import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview';

const collectionsOverview = ({collections}) =>(
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollection}) => (
        <CollectionPreview key={id} {...otherCollection}/>
      ))}
    </div>
);

const mapStateToProps = createStructuredSelector ({
    collections: selectCollections
})

export default connect(mapStateToProps)(collectionsOverview)