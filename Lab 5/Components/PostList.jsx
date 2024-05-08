import PostCard from "./PostCard";

function PostsList({ posts, onPostClick }) {

    return (
    
    <div>
      {posts.map(post => (
    
        <PostCard
          key={[post.id](`http://post.id "‌"`)}
          title={post.title}
          subtitle={post.summary}
          onButtonClick={() => onPostClick([post.id](`http://post.id "‌"`))} // this needs something in between the quotation marks
        />
    
      ))}
    </div>
   
    );
    
    }

    export default PostsList;