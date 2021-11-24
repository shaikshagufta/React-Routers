import { useEffect } from "react"

const Home = () => {

    //to continue the other page from top insted of 
    //its previous position the page was when we were on another page 
    useEffect(() => {
        window.scroll(0,0)
    }, [])


    return (
        <div>
            HOME PAGE
        </div>
    )
}

export default Home
