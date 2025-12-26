import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;  // Cloudinary URL
    avatar: string; // Cloudinary URL
}

const Header = ({ blogs }: { blogs: Blog[] }) => {
    return (
        <div className="bg-[#F9F5FF] p-6 ">
            <div className=" space-y-6  flex flex-col justify-center items-center text-center mt-10 max-w-xl mx-auto">
                <div className="">
                    <h2 className='font-medium text-purple-900 bg-[#F3EBFF] rounded-full px-2 py-1'>Our blog</h2>
                </div>
                <h2 className='text-purple-950 font-semibold text-5xl'>Resource and insights</h2>
                <h3 className='text-purple-800 text-lg'>The lastest industry news, interviews, technologies and resourses.</h3>
                <div className="flex items-center w-full border px-2 py-1 rounded-lg bg-white">
                    <Search className='text-gray-500' />
                    <Input placeholder='Search'
                        className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                    />

                </div>
                <Button variant={'outline'} className=' hover:text-purple-900 border border-purple-400 bg-purple-900 text-white px-10 py-7' asChild><Link href='/createBlog'>
                    Create Your Own Blog
                </Link></Button>
            </div>
        </div>
    )
}

export default Header