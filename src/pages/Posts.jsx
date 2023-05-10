import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import cont from "./Posts.module.css"


const Posts = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const navig = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                setError("");
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (error) {
        return <div>err: {error}</div>
    }

    return (
        <div className={cont.conteiner}>
            {loading || !post.length ? "loading" : post.map((el) => {
                return (
                    <div key={el.id} className={cont.man}>
                        <h2 className={cont.men}>{el.id} <br /> {el.title}
                            <button onClick={() => navig(`/posts/${el.id}`)}>Details</button></h2>
                        <div className={cont.wman}> <div className={cont.wmen}>{el.body}</div>
                            <Link to={`/posts/${el.id}`}> More </Link> </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;