import { blogDetailsData } from '../../../components/blogDetails/blogDetailsData';
import BlogDetails from '../../../components/blogDetails/BlogDetails'
import React from 'react'

export async function generateStaticParams() {
  return blogDetailsData.map((post) => ({
    id: post.id.toString(),
  }));
}

async function BlogInfoPage({ params  }) {
  
  
   const id = (await params).id;
 
  return (
    <div>
      <BlogDetails id={id}/>
    </div>
  )
}

export default BlogInfoPage
