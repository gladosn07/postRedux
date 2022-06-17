const PostAuthor = ({ userId }) => {
  return <span>by {userId ? userId : "Unknown author"}</span>;
};

export default PostAuthor;
