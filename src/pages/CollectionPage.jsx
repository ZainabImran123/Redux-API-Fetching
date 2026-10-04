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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 min-h-[80vh]">
            {/* Header & Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                        {collection.length > 0 ? 'Your Collection' : 'Collection is Empty'}
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        {collection.length > 0
                            ? `You have saved ${collection.length} media item${collection.length === 1 ? '' : 's'}`
                            : 'Save your favorite photos, videos, and GIFs while exploring.'}
                    </p>
                </div>

                {collection.length > 0 && (
                    <button
                        onClick={clearAll}
                        className="px-5 py-2.5 rounded-full text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 hover:text-rose-700 active:scale-95 transition-all duration-200 border border-rose-100/60 shadow-sm"
                    >
                        Clear Collection
                    </button>
                )}
            </div>

            {/* Content Grid or Empty State */}
            {collection.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {collection.map((item) => (
                        <CollectionCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 px-4 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 mt-6">
                    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        ✨
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700">No saved items yet</h3>
                    <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
                        Head over to the search page, find something inspiring, and click "Save" to build your private collection.
                    </p>
                </div>
            )}
        </div>
    )
}

export default CollectionPage