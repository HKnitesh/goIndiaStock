import Link from 'next/link'

export default function SignIn() {
    return(
        <div className="md:flex flex-row justify-between items-center h-10 hidden gap-3">
            <Link href="/Contact">
                <div className=' text-base font-medium'>Contact Us</div>
            </Link>
            <button className=' button '>
                SIGN UP
            </button>
            <button className=' button'>
                SIGN IN
            </button>
        </div>
    );
}