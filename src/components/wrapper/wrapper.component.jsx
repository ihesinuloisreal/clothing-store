import React from "react";
import { useParams } from "react-router-dom";
import CollectionPage from "../../pages/collection/collection.component";

const Wrapper = () =>{
    const {collectionId} = useParams();
    return(

        <>
            <CollectionPage collectionId={collectionId}/>
        </>
    )
}

export default Wrapper;