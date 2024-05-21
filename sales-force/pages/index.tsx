    import { useEffect } from "react";
    import { fetchData } from "../utils/api";
    import Link from "next/link"

    const HomePage = () =>{

        const [posts,setPosts] = useState([]);

        useEffect(() =>{
            const fetchPosts = async () =>{
                const data = await fetchData('post');
                if(data){
                    setPosts(data);
                }
            }
            fetchPosts();
        },[])

        return(
            <>
                <h1>Home Page</h1>
                <ul>
                    {
                        posts.map((post: any) =>(
                            <li key={post.id}>
                                {posts.tittle}
                            </li>
                        )) 
                    }
                </ul>
            </>
        )
    }

    export default HomePage;
