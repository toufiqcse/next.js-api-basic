import Link from "next/link"

const Headers = () => {
    // const style  = {
    //     backgroundColor: 'skyBlue',
    //     fontSize: '1.2rem'
    // }
    return (
        <div className="text-center bg-sky-500" >
            <Link className="mx-[0.5em] px-4 py-8" href='/'>Home</Link>
            <Link className="mx-[0.5em] px-4 py-8" href='/about'>About</Link>
            <Link className="mx-[0.5em] px-4 py-8" href='/profile'>Profile</Link>
        </div>
    )
}



export default Headers
