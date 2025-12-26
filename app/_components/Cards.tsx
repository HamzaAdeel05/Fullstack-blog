'use client'
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";
interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;  // Cloudinary URL
    avatar: string; // Cloudinary URL
}
const Cards = ({blogs}:{blogs:Blog[]}) => {


    return (
        <div
            className=" bg-no-repeat w-full  "
            style={{ backgroundImage: "url('/image/bg.svg')" }}
        >
            <div className=" mx-auto max-w-350 py-10 ">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                    {blogs.map((blog:any) => (
                        <Link key={blog.name} href={`/blogs/${blog._id}`}>
                            <Card className="px-5 cursor-pointer h-full">
                                <img alt="card" height={100} width={100} src={blog.image} className="w-full" />
                                <h3 className="text-sm text-purple-700 font-medium">{blog.category}</h3>
                                <div className="flex justify-between">
                                    <h2 className="text-2xl font-medium">{blog.title}</h2>
                                    <ArrowUpRight />
                                </div>
                                <h2 className="text-gray-500">{blog.description}</h2>
                                <div className="flex justify-baseline">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-10 border rounded-full">
                                        <img src={blog.avatar} alt="Avatar" className=" rounded-full" />
                                        </div>
                                        <div className="text-sm">
                                            <h2 className="font-medium">{blog.name}</h2>
                                            <p className="text-gray-500">{blog.createdAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
