import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import collectionItemComponent from "../../components/collection-item/collection-item.component";

import './collection.styles.scss';
import { useLocation, useParams } from "react-router-dom";

const CollectionPage = () => {
    const {pathname} = useLocation();
    console.log(pathname)
    return(
    <div className="collection-page">
        <h2>Collection Page</h2>
    </div>
)}
// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.id.collectionId)(state)
// })

export default CollectionPage;