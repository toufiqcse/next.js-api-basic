import {  GetStaticProps, GetStaticPaths } from 'next'
import { FunctionComponent } from 'react'
import { IPost } from '../../../types';


// next functional component and data destructured here
const Post: FunctionComponent<{
  sPost:IPost,
  post: Object
}> = ({sPost:{body,title}}) => { 
  return <div>
    <p className='text-2xl text-center font-semibold'>Details post</p>
    <div className='p-[2em]'>
      <p className='font-medium text-[1.5rem] underline'>{title}</p>
      <p className='text-[1.2rem]'>{body}</p>
    </div>
  </div>
}

// get static props here
export const getStaticProps:GetStaticProps = async (ctx) => {
    const params:any = ctx.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const sPost = await res.json()
  return {
    props: {
        sPost
    },
  }
}

// get static paths settings here
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const paths:any  = data.map((post: IPost)=> {
    return {
      params : {id: `${post.id}`}
    }
  })
    return {
      paths,
      fallback: false, 
    }
  }

export default Post


