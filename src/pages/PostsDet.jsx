import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import cont from "./Posts.module.css"

const PostsDet = () => {
  const navig = useNavigate();
  const params = useParams();
  console.log(params);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <div>err: {error}</div>;
  }
     
  return (
    <div>
      {loading || !post ? (
        "loading"
      ) : (
        <div className={cont.secman}>
          <button onClick={() => navig("/")}>Back</button>
          <h1 className={cont.men}> {post.id} <br />  {post.title} <br /></h1>
          <div> {post.body}</div>
        </div>
      )}
    </div>
  )
}

export default PostsDet;