import {  GetStaticProps } from 'next'
import { FunctionComponent } from 'react';
import { IPost } from '../../../types';
import dynamic from 'next/dynamic';
const PostDetails = dynamic(() => import ('./PostDetails'))   //dynamic import for fast loading and good performance

// post index page content here
const PostList: FunctionComponent<{
    data:IPost[]
}> = ({data}) => { 
  return <div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-[1rem]'>
        {
          data.map((post:IPost) => (
                <div key={post?.id}>
                    <PostDetails post={post}/>
                </div>
            ))
        }
    </div>
  </div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
  return {
    props: {
        data: data,
    },
  }
}

export default PostList

