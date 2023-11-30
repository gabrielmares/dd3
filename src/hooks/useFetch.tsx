import { useState, useEffect } from 'react'

const useFetch = () => {

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState({})


    // useEffect(() => {
    //     if (loading) {
    //         fetch('/dictionary.json')
    //             .then(res => setList(res.json()))
    //             .finally(() => setLoading(prev => !prev))
    //     }
    // }, [])

    return { list, loading };
}

export default useFetch;