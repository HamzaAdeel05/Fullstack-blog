"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import React, { useState } from 'react'

const CreateBlog = () => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [blog, setBlog] = useState("")
    const [avatar, setAvatar] = useState<File | null>(null)
    const [picture, setPicture] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        try {
            const res = await axios.post('/api/blog', {
                name,
                category,
                title,
                description,
                blog,
                avatar: "temp-image",
                picture: "temp-image"
            })
            console.log(res.data)
            alert("Blog created successfully 🎉")
        } catch (error: any) {
            console.error(error)

            alert(
                error?.response?.data?.message || "Something went wrong"
            )
        }
    }

    return (
        <div className='bg-[#F9F5FF] min-h-screen py-10'>
            <div className="p-6 max-w-3xl mx-auto space-y-8">
                <h2 className='text-3xl md:text-6xl text-purple-950 font-bold text-center'>
                    Create your Own Blog
                </h2>

                <Card className='py-10 px-6 space-y-4'>
                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>NAME*</h2>
                        <Input onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>TITLE OF YOUR BLOG*</h2>
                        <Input onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="flex justify-between gap-6">
                        <div className="space-y-3 w-full">
                            <h2 className='text-[12px] text-gray-500'>CATEGORY*</h2>
                            <Input onChange={(e) => setCategory(e.target.value)} />
                        </div>

                        <div className="space-y-3 w-full">
                            <h2 className='text-[12px] text-gray-500'>YOUR PHONE NUMBER*</h2>
                            <Input />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>BRIEF DESCRIPTION*</h2>
                        <Input onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>BLOG DESCRIPTION*</h2>
                        <Textarea onChange={(e) => setBlog(e.target.value)} />
                    </div>

                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>BLOG IMAGE*</h2>
                        <Input type='file' onChange={(e) => setPicture(e.target.files[0])} />
                    </div>

                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>YOUR PICTURE*</h2>
                        <Input type='file' onChange={(e) => setAvatar(e.target.files[0])} />
                    </div>

                    <Button
                        onClick={handleClick}
                        type='submit'
                        variant='secondary'
                        className='border border-purple-500 bg-purple-900 hover:text-purple-900 text-white w-full py-6'

                    >
                        Submit your Blog!
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default CreateBlog
