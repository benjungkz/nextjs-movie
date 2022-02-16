import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Seo from "../components/Seo"



export default function Home({results}){
    const router = useRouter()

    //Router를 이용한 페이지 요청 (Handles client-side transitions)
    const onClick = (id, title)=>{
        
        router.push(`/movies/${title}/${id}`)
    }

    return (
        <div>
            <Seo title="Home"/>
            <h1>Home</h1>
            {results?.map((movie)=>{
                return(
                    <div 
                        className="movie"
                        key={movie.id}
                        onClick={()=>onClick(movie.id, movie.original_title)}
                    >
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        {/* Link 컴포넌트를 이용한 페이지 요청 */}
                        <Link href={`/movies/${movie.original_title}/${movie.id}`}> 
                            <a>
                                <h4>{movie.original_title}</h4>
                            </a>
                        </Link> 
                    </div>
                )
            })}
        </div>
    )
}


// Select SSR (Server Side Rendering)
// + Connect data with react
export async function getServerSideProps(){
    const { results } = await (
        await fetch(
            `http://localhost:3000/api/movies`
        )
    ).json()
 
    return {
        props: {
            results,
        }
    } 
}