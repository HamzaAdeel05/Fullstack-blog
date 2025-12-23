import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className="bg-[#F9F5FF] p-6 ">
            <div className=" space-y-6  flex flex-col justify-center items-center text-center mt-10">
                <div className="">
                    <h2 className='font-medium text-purple-900 bg-[#F3EBFF] rounded-full px-2 py-1'>Our blog</h2>
                </div>
                <h2 className='text-purple-950 font-semibold text-5xl'>Resource and insights</h2>
                <h3 className='text-purple-800 text-lg'>The lastest industry news, interviews, technologies and resourses.</h3>
                <div className="flex items-center  border px-2 py-1 rounded-lg bg-white">
                    <Search className='text-gray-500' />
                    <Input placeholder='Search'
                        className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                    />

                </div>
            </div>
        </div>
    )
}

export default Header