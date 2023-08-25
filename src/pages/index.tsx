import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-[5em] p-[2em] bg-gray-200">
      <p className="text-[1.5rem] font-bold text-center my-[1em]">Main landing page</p>
      <div className="border border-gray-400 p-[2em] mb-[1em]">
        <p className="text-[1.5rem] text-center">Static page generation content</p>
      <Link href='/about'>
        
        <p>Go to about page</p>
      
    </Link>
    <Link href='/profile'>
      
        <p>Go to about profile</p>
      
    </Link>
    <Link href='/posts'>
      
        <p>Go to tour posts</p>
      
    </Link>
    
      </div>
      {/* server site props here   */}
      <div className="border border-gray-400 p-[2em] mb-[1em]">
        <p className="text-[1.5rem] text-center">server side generation page</p>
        <Link href='/users'>
        <p className="text-blue-600">Go to your user list</p>
      
    </Link>
    <Link href='/person'>
      <p>Go to person List</p>
    </Link>
      </div>
    </div>
  )
}
