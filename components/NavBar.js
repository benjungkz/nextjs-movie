import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../components/NavBar.module.css';
import cn from 'classnames'
import Image from 'next/image';


export default function NavBar(){
    // Use Router form Next.js
    const router = useRouter();

    return (
        <nav className={cn(styles.nav)}>
            <Image 
                className={cn(styles.image)}
                src="/vercel.svg" 
                alt="image"
                width={100}
                height={100}
                />
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        </nav>
    )
}