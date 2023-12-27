const Post = ({ post }) => {
    const { categories, content, created_at, id, tags, title } = post;
  

  
    return (
      <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md mb-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">
          Categories: {categories} | Tags: {tags} | Created At: {new Date(created_at).toLocaleString()}
        </p>
        <p className="text-gray-800">{content}</p>
      </div>
    );
  };
  
  export default Post;