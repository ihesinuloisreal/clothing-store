import React from 'react';
import { Route, Routes, useLocation, useParams} from 'react-router-dom';

import CollectionOverviewComponent from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
  const {pathname} = useLocation();
  console.log(pathname);
  return (
    <div className='shop-page'>
    <Routes>
     <Route exact path="/" element={<CollectionOverviewComponent/>}/>
     <Route path={`/:categoryId`} element={<CollectionPage/>}/>
    </Routes>
    </div>
  )
}

export default ShopPage;