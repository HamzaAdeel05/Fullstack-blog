import { Separator } from '@/components/ui/separator';
import { SeparatorHorizontal } from 'lucide-react';
import React from 'react'

const Blogs = async ({ params }: { params: string }) => {
    const { name }: any = await params;
    const Blogs =
        [
            {
                "category": "Design",
                "title": "UX review presentations",
                "description": "How do you create compelling presentations that wow your colleagues and impress your managers?",
                "author": "Olivia Rhye",
                "date": "20 Jan 2022"
            },
            {
                "category": "Product",
                "title": "Migrating to Linear 101",
                "description": "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
                "author": "Phoenix Baker",
                "date": "19 Jan 2022"
            },
            {
                "category": "Software Engineering",
                "title": "Building your API Stack",
                "description": "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
                "author": "Lana Steiner",
                "date": "18 Jan 2022"
            },
            {
                "category": "Management",
                "title": "Bill Walsh leadership lessons",
                "description": "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
                "author": "Alec Whitten",
                "date": "17 Jan 2022"
            },
            {
                "category": "Product",
                "title": "PM mental models",
                "description": "Mental models are simple expressions of complex processes or relationships.",
                "author": "Demi Wilkinson",
                "date": "16 Jan 2022"
            },
            {
                "category": "Design",
                "title": "What is Wireframing?",
                "description": "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
                "author": "Candice Wu",
                "date": "15 Jan 2022"
            },
            {
                "category": "Design",
                "title": "How collaboration makes us better designers",
                "description": "Collaborating with other designers can help you grow and learn new skills.",
                "author": "Natali Craig",
                "date": "14 Jan 2022"
            },
            {
                "category": "Product",
                "title": "Our top 10 Javascript frameworks to use",
                "description": "JavaScript frameworks are essential for building modern web applications.",
                "author": "Drew Cano",
                "date": "13 Jan 2022"
            },
            {
                "category": "Customer Success",
                "title": "Podcast: Creating a better CX Community",
                "description": "Learn how to build a community that supports your customers and your business.",
                "author": "Orlando Diggs",
                "date": "12 Jan 2022"
            }
        ]
    const pageData = Blogs.find((post) => post.category === name)
    return (
        <div className='bg-[#F9F5FF] min-h-screen py-10'>
            <div className=" max-w-320 mx-auto space-y-8">
                <div className="p-6">
                    <div className=" space-y-6  flex flex-col justify-center items-center text-center">
                        <div className="">
                            <h2 className='font-medium text-purple-900 bg-[#F3EBFF] rounded-full px-2 py-1'>{pageData?.date}</h2>
                        </div>
                        <h2 className='text-purple-950 font-semibold text-5xl'>{pageData?.title}</h2>
                        <h3 className='text-purple-800 text-lg'>{pageData?.author}</h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img className='w-full' src='http://localhost:3000/_next/static/media/ImageCard.79702b74.svg' />
                </div>
                <div className="space-y-4">
                    <h2 className='text-center text-sm text-purple-900'>{pageData?.author}</h2>
                    <Separator className='px-5'/>
                    <h3 className='text-gray-600 text-sm'>{pageData?.description}</h3>
                </div>
            </div>
        </div>
    )
}

export default Blogs