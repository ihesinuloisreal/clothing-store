import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.styles.scss';
// import { useLocation } from "react-router-dom";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";

const CollectionPage = ({collection}) => {
    // console.log(collection);
    const {title, items} = collection
    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item => (
                    <CollectionItemComponent key={item.id} item={item} />
                ))
            }
        </div>

    </div>
)}
const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.collectionId)(state)
    }
    
}

export default connect(mapStateToProps)(CollectionPage);