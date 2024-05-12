
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CollectionOverviewComponent from '../../components/collection-overview/collection-overview.component';
import Wrapper from '../../components/wrapper/wrapper.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
    <Routes>
     <Route exact path="/" element={<CollectionOverviewComponent/>}/>
     <Route exact path={`/:collectionId`} element={<Wrapper/>}/>
    </Routes>
    </div>
  )
}

export default ShopPage;