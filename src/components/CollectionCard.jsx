import React from 'react'
import { useDispatch } from 'react-redux'
import { addedToast, removeCollection } from '../redux/features/collectionSlice'

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()
    const removeFromCollection = (item) => {

        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }



    return (
        <div>
            <div>
                <a target='_blank' href={item.url}>
                    {item.type == 'photo' ? <img src={item.src} alt="" /> : ''}
                    {item.type == 'video' ? <video autoPlay loop muted src={item.src}></video> : ''}
                    {item.type == 'gif' ? <img src={item.src} alt="" /> : ''}
                </a>
                <div id='bottom'>
                    <h2>{item.title}</h2>
                    <button onClick={() => {
                        removeFromCollection(item)
                    }}>Remove</button>
                </div>
            </div >

        </div>
    )
}

export default CollectionCard