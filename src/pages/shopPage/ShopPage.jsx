
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewComponent from '../../components/collection-overview/collection-overview.component';
import Wrapper from '../../components/wrapper/wrapper.component';

import {firestore, convertCollectionsSnapshot} from '../../firebase/firebase.utils'
import { collection, onSnapshot } from 'firebase/firestore';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverviewComponent);
const WrapperWithSpinner = WithSpinner(Wrapper);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribFromSnapshot = null
  
  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = collection(firestore, 'collections');

    this.unsubscribFromSnapshot = onSnapshot(collectionRef, async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshot(snapShot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    })
  }

  render (){
    const {...props} = this.props
    const {loading} = this.state;
    return (
      <div className='shop-page'>
      <Routes>
       <Route exact path="/" element={<CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
       <Route exact path={`/:collectionId`} element={<WrapperWithSpinner isLoading={loading} {...props}/>}/>
      </Routes>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);