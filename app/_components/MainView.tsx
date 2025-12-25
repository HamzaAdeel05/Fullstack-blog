"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Cards from './Cards'
import axios from 'axios';

const MainView = () => {
    const [blogs, setBlogs] = useState<any[]>([]);
    useEffect(() => {
        axios.get("/api/blog").then(res => setBlogs(res.data)).catch(err => console.error(err))
    }, [])

    return (
        <div>
            <Header blogs={blogs} />
            <Cards blogs={blogs} />
        </div>
    )
}

export default MainView