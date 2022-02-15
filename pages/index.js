import { useEffect, useState } from "react"
import Seo from "../components/Seo"



const Home = () =>{
    const [ movies, setMovies ] = useState()

    useEffect(()=>{
        (async () =>{
            const { results } = await (
                await fetch(
                    `/api/movies`
                )
            ).json()
            console.log(results)
            setMovies(results)
        })()
    },[])

    return (
        <div>
            <Seo title="Home"/>
            <h1>Home</h1>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie)=>{
                return(
                    <div key={movie.id}>
                        <h4>{movie.original_title}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Home