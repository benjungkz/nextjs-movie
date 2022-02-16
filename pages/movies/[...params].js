import { useRouter } from "next/router"
import Seo from "../../components/Seo"

export default function Detail({params}){
    const router = useRouter()
    
    console.log(router)

    // Client Side Rendering(CSR) + Pre-Rendering from Next.js
    //const [title, id] = router.query.params || []

    // Server Side Rednering(SSR)
    const [title, id] = params || []

    return(
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    )

}


export function getServerSideProps({params:{params}}){
    return{
        props:{
            params
        }
    }
}