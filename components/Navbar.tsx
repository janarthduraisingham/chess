import Link from 'next/link';

export default function Navbar() {
    return(
        <nav className='flex items-center justify-between px-6 py-4 border-b'>
            <div className='flex gap-6'>
                <Link href='/' className='font-bold text-lg'>chessmate.</Link>
                <Link href='/openings'>Openings journal.</Link>
                <Link href='/reading'>Reading.</Link>
                <Link href='/stats'>Stats.</Link>
            </div>
        </nav>
    )
}