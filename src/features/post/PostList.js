import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import ReactionButton from "./reactionButton";
import TimeAgo from "./TimeAgo";

import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";

const PostList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts?.map((post) => (
    <>
      <List sx={{ width: "100%", maxWidth: 900 }}>
        <ListItem alignItems="flex-start" key={post.id} className="ArticleList">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://source.unsplash.com/random/300×300"
            />
          </ListItemAvatar>
          <ListItemText
            primary={post.title}
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <p className="Author">
                    {" "}
                    <PostAuthor userId={post.userId} /> <br />{" "}
                  </p>
                </Typography>
                <p className="PostComment">
                  {post.content} <br />{" "}
                </p>
                <TimeAgo timestamp={post.date} />
                <ReactionButton className="reactionButton" post={post} />
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  ));

  return <section className="PostList">{renderedPosts}</section>;
};

export default PostList;
