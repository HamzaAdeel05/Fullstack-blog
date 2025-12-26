import React from 'react'
import BlogDetails from './_components/blog-details';

export default async function page({params}: {params: Promise<{id:string}>}) {

  const paramsID = await params
  console.log('params', paramsID.id);
  
  return (
    <div>
      <BlogDetails id={paramsID.id}/>
    </div>
  )
}

