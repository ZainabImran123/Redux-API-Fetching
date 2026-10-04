import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []

                if (activeTab === 'photos') {
                    const hits = await fetchPhotos(query) // fetchPhotos returns res.data.hits directly!
                    data = hits.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.tags || 'Photo',
                        thumbnail: item.webformatURL,
                        src: item.largeImageURL || item.webformatURL,
                        url: item.pageURL,
                    }))
                }

                if (activeTab === 'videos') {
                    const hits = await fetchVideos(query) // fetchVideos returns res.data.hits directly!
                    data = hits.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.tags || 'Video',
                        thumbnail: item.videos?.medium?.thumbnail || item.picture_id,
                        src: item.videos?.medium?.url || item.videos?.small?.url || item.video_files?.[0]?.link,
                        url: item.pageURL,
                    }))
                }

                if (activeTab === 'gif') {
                    const hits = await fetchGIF(query) // fetchGIF returns res.data.hits directly!
                    data = hits.map((item) => ({
                        id: item.id,
                        title: item.tags || 'GIF',
                        type: 'gif',
                        thumbnail: item.webformatURL,
                        src: item.largeImageURL || item.webformatURL,
                        url: item.pageURL,
                    }))
                }

                dispatch(setResults(data))

            } catch (err) {
                console.error("API Error:", err)
                dispatch(setError(err.message))
            }
        }

        getData()
    }, [query, activeTab, dispatch])

    if (error) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="bg-rose-50 border border-rose-100 text-rose-600 px-6 py-4 rounded-2xl shadow-sm text-sm font-semibold">
                    Failed to load media. Please try again.
                </div>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center py-32 gap-4">
                <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                <p className="text-sm font-medium text-slate-500 tracking-wide">Searching the universe...</p>
            </div>
        )
    }

    if (!query) {
        return (
            <div className="text-center py-24 px-4">
                <h3 className="text-lg font-semibold text-slate-700">Type something above to start exploring</h3>
                <p className="text-sm text-slate-400 mt-1">Discover stunning photos, videos, and GIFs instantly.</p>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {results.map((item) => (
                    <ResultCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ResultGrid