// import React from 'react'
// import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'

// const App = () => {

//     function getPhotos() {

//     }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 gap-4 p-6">
//             <h1 className="text-2xl font-bold text-slate-800 mb-2">Pixabay Media App</h1>

//             <div className="flex flex-wrap gap-4 justify-center">
//                 <button
//                     onClick={async () => {
//                         const data = await fetchPhotos('cat')
//                         console.log(data)
//                     }}
//                     className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200"
//                 >
//                     Get Photos
//                 </button>

//                 <button
//                     onClick={async () => {
//                         const data = await fetchVideos('cat')
//                         console.log(data)
//                     }}
//                     className="px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-lg shadow-md hover:bg-emerald-700 active:scale-95 transition-all duration-200"
//                 >
//                     Get Videos
//                 </button>

//                 <button
//                     onClick={async () => {
//                         const data = await fetchGIF('cat')
//                         console.log(data)
//                     }}
//                     className="px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 active:scale-95 transition-all duration-200"
//                 >
//                     Get GIF
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default App






















// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
// import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'

// const ResultGrid = () => {

//     const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

//     useEffect(function () {
//         const getData = async () => {
//             let data
//             if (activeTab == 'photos') {
//                 let response = await fetchPhotos(query)
//                 data = response.results
//             }
//             if (activeTab == 'videos') {
//                 let response = await fetchVideos(query)
//                 data = response.videos
//             }
//             if (activeTab == 'gif') {
//                 let response = await fetchGIF(query)
//                 data = response.data.results
//             }
//         }

//         getData()
//     }, [query, activeTab])

//     return (
//         <div>
//             <button>Get Data</button>
//         </div>
//     )
// }

// export default ResultGrid