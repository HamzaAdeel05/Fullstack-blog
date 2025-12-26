'use client'
import { Separator } from '@/components/ui/separator';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

type Blog = {
    _id: string;
    title: string;
    blogDes: string;
    description: string;
    name: string;
    image: string;
    createdAt: string;
};

export default function BlogDetails({ id }: { id: string }) {
    console.log('Id', id);

    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`/api/blog/${id}`);
            if (res.status !== 200) throw new Error("Blog not found");
            const data = await res.data;
            setBlog(data);
        } catch (err: any) {
            setError(err?.message || "Failed to load blog");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, [id]);

    if (loading) {
        return(  <div className="flex justify-center items-center gap-2 min-h-screen ">
            <p className='text-3xl font-medium'>Loading please wait!</p>
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>)

    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">{error}</p>;
    }

    if (!blog) {
        return <p className="text-center mt-10">Blog not found</p>;
    }

    return (
        <div className="bg-[#F9F5FF] min-h-screen py-10">
            <div className=" space-y-8">

                <div className="max-w-3xl mx-auto">


                    <div className="p-6 text-center space-y-4">
                        <h2 className="font-medium text-purple-900 bg-[#F3EBFF] inline-block px-3 py-1 rounded-full">
                            {blog.createdAt}
                        </h2>

                        <h1 className="text-purple-950 font-semibold text-7xl">
                            {blog.title}
                        </h1>

                        <h3 className="text-purple-800 text-lg">{blog.name}</h3>
                    </div>

                    <div className="flex justify-center">
                        <img
                            className="w-full rounded-lg px-5"
                            src={blog.image}
                            alt="Blog"
                        />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-center text-sm text-purple-900 my-5">
                            {blog.name}
                        </h2>
                        <Separator className='my-5' />
                    </div>

                </div>
                <p className="text-gray-600 text-sm text-center w-full px-10">{blog.blogDes}</p>
            </div>
        </div>
    )
}
