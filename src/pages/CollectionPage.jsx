import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

    const collection = useSelector(state => state.collection.items)
    const dispatch = useDispatch()
    const clearAll = () => {
        dispatch(clearCollection())
    }


    return (
        <div>
            <div>
                <h2>{collection.length > 0 ? 'Your Collection' : 'Collection is Empty'}</h2>
                <button onClick={() => {
                    clearAll()
                }}>Clear Collection</button>
            </div>
            <div>
                {collection.map((item, idx) => {
                    return <div key={idx}>
                        <CollectionCard item={item} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default CollectionPage