import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')

    }


    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <input value={text} onChange={(e) => {
                    setText(e.target.value)
                }} required type="text" placeholder='Seacrh Anything...' />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar