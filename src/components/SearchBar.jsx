import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(setQuery(text.trim()))
    }

    return (
        <div className="w-full flex justify-center items-center py-8 px-4">
            <form
                onSubmit={submitHandler}
                className="w-full max-w-2xl flex items-center bg-white border border-slate-200/80 rounded-full shadow-lg shadow-slate-100 p-2 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 transition-all duration-300"
            >
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    type="text"
                    placeholder="Search anything (e.g. nature, tech, animals)..."
                    className="w-full px-6 py-3 text-slate-700 bg-transparent placeholder:text-slate-400 focus:outline-none text-sm font-medium"
                />

                <button
                    type="submit"
                    className="px-8 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all duration-200 shrink-0"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar