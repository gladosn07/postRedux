import { useState } from "react";

import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

import React from "react";
import { Button, TextField } from "@mui/material";

export const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [usersId, setUsersId] = useState("");

  const onSavePostClicked = async () => {
    if (title && content) {
      dispatch(postAdded(title, content, usersId));
      setContent("");
      setTitle("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(usersId);

  return (
    <section className="SectionForm">
      <h2 className="Title">Add a New Post</h2>
      <form className="FormSection">
        <TextField
          margin="normal"
          id=""
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          margin="normal"
          label="Author"
          variant="outlined"
          value={usersId}
          id="postAuthor"
          onChange={(e) => setUsersId(e.target.value)}
        />

        <TextField
          margin="normal"
          label="Post"
          variant="outlined"
          multiline
          id="postTitle"
          name="postTitle"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          variant="contained"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </Button>
      </form>
    </section>
  );
};
