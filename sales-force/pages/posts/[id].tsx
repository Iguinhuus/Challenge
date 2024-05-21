import { ReactNode, useEffect, useState } from "react";
import { fetchData } from "../../utils/api";
import { useRouter } from "next/router";


interface Post {
    body: ReactNode;
    id: string;
    title: string;
    description: string;
    published: boolean;
  }

  const PostPage = () =>{

    const router = useRouter();
    const { id } = router.query;
    const[post,setPost] = useState<Post | null>(null);

    useEffect(() =>{
        const fetchPosts = async () =>{
          if(id){
                const data = await fetchData(`posts/${id}`);
                if(data){
                    setPost(data);
                }
          }
            
        }
        fetchPosts();
    },[id])

    if(!post){
        return(
            <>
            <h1>Carregando</h1>
            </>
        )
    }

    
    return(
        <>
<h1>{ post.title }</h1>
<p>{ post.body }</p>
        </>
    )
  }

function setPosts(data: import("../../utils/api").Post[]) {
    throw new Error("Function not implemented.");
}

export default PostPage;