import styles from "../../../styles/Home.module.css"

export default function Details(){
    return (
        <div>
            <h1>Details page</h1>
        </div>
    )
}

export async function getStaticPaths(){
    return {
        paths : [
            {params : {id : "1"} }
        ],
        fallback : false
    }
}


export async function getStaticProps(context){
    const {params} = await context
    console.info(params)
    return {
        props:{
            data : {
                username : "andi ismail"
            }
        }
    }
}