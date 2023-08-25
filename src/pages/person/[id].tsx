import { GetServerSideProps } from 'next'
import { FunctionComponent } from 'react'
import { IUser } from '../../../types'
import Head from 'next/head'

interface IParams {
    id: string
  }

const  SingleUsers: FunctionComponent<{
    singleData: IUser
}> = ({singleData: {name,email,id, phone, website,}}) => {
  return <>
  <Head>
    <title>{name} details</title>
  </Head>
  <div>
    <p>Local  users</p>
    <div className='border border-red-400 p-[0.5em]'>
    <p>{id}</p>
    <p>{name}</p>
    <p>{email}</p>
    <p>{website}</p>
    <p>{phone}</p>
    </div>
  </div>
  </>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const params:any = ctx.params;

    try{
        const res = await fetch(`http://localhost:3000/api/mens/${params.id}`);
        if(!res.ok){
            throw new Error('Failed to fetch user data');
        }
        const singleData = await res.json();
        return {
            props: {
                singleData,
            }
          };
    }
    catch (error) {
        return {
            notFound: true,
        }

    }
  
}

export default SingleUsers;


