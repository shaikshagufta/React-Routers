import { useParams } from "react-router";
// fetchid id from url
const Post = () => {

    const { id } = useParams();

    return <h2>ID is = {id}</h2>
};

export default Post;
