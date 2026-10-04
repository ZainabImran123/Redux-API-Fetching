import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className="flex justify-center items-center gap-3 py-4 px-4">
            <div className="flex bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
                {tabs.map((elem, idx) => {
                    const isActive = activeTab === elem
                    return (
                        <button
                            key={idx}
                            onClick={() => dispatch(setActiveTabs(elem))}
                            className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                                }`}
                        >
                            {elem}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Tabs