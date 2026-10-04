import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)
    return (
        <div>
            {tabs.map(function (elem, idx) {
                return (
                    <button key={idx} onClick={() => { dispatch(setActiveTabs(elem)) }}>{elem}</button>
                )
            })}
        </div>
    )
}

export default Tabs