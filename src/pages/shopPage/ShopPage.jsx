import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import SHOP_DATA from './shop.data';
import { selectCollections } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview';
// import shopReducer from '../../redux/shop/shop.reducer';

// class ShopPage extends React.Component{
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA
//     };
//   }
//   render() {
//     const {collections} = this.state;
//     return (
//       <div className='shop-page'>
//       {collections.map(({id, ...otherCollection}) => (
//         <CollectionPreview key={id} {...otherCollection}/>
//       ))}
//     </div>
//     )
//   }
// }
const ShopPage = ({collections}) => {
  return (
    <div className='shop-page'>
      {collections.map(({id, ...otherCollection}) => (
        <CollectionPreview key={id} {...otherCollection}/>
      ))}
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// })

const mapStateToProps = createStructuredSelector ({
  collections: selectCollections
})

export default connect(mapStateToProps,null) (ShopPage);