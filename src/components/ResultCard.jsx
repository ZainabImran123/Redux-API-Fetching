import React from 'react'

import { useDispatch } from 'react-redux'
import { addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {
    const dispatch = useDispatch()

    const addToCollection = (item) => {
        dispatch(addToCollection(item))
        dispatch(addedToast())


    }


    return (
        <div>
            <a target='_blank' href={item.url}>
                {item.type == 'photo' ? <img src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'gif' ? <img src={item.src} alt="" /> : ''}
            </a>
            <div id='bottom'>
                <h2>{item.title}</h2>
                <button onClick={() => {
                    addToCollection(item)
                }}>Save</button>
            </div>
        </div >
    )
}

export default ResultCard