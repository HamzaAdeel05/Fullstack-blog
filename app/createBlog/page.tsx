import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateBlog = () => {
    return (
        <div className='bg-[#F9F5FF] min-h-screen py-10'>
            <div className="p-6  max-w-300 mx-auto space-y-8">
                <h2 className='text-3xl md:text-6xl text-purple-950 font-bold text-center'>Create your Own Blog</h2>
                <Card className='py-10 px-6 space-y-4'>
                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>NAME*:</h2>
                        <Input />
                    </div>
                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>TITLE OF YOUR BLOG*:</h2>
                        <Input />
                    </div>
                    <div className="flex justify-between gap-6">

                        <div className="space-y-3 w-full">
                            <h2 className='text-[12px] text-gray-500'>YOUR EMAIL*:</h2>
                            <Input className='' />
                        </div>
                        <div className="space-y-3 w-full">
                            <h2 className='text-[12px] text-gray-500'>YOUR PHONE NUMBER*:</h2>
                            <Input />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>DESCRIPTION*:</h2>
                        <Textarea />
                    </div>
                    <div className="space-y-3">
                        <h2 className='text-[12px] text-gray-500'>IMAGE*:</h2>
                        <Input type='file' />
                    </div>
                    <div className="">
                        <Button variant={'secondary'} className='border border-purple-500 bg-purple-900 hover:text-purple-900 text-white w-full py-6'>Submit your Blog!</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default CreateBlog