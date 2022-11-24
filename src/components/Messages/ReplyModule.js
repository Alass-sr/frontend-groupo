import React from "react";
import axios from "axios";
import { Button } from "../Button";

export const ReplyModule = ({ postId, fetchComments }) => {
  const [comment, setComment] = React.useState("");

  const sendComment = () => {
    const data = {
      postId: postId,
      text: comment,
      userId: localStorage.getItem("userId"),
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}api/comment/`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        fetchComments();
        setComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <input
        type="text"
        name="message"
        value={comment}
        onChange={onChangeComment}
        placeholder="Ajouter un commentaire"
        style={{
          flex: 1,
          height: 50,
          padding: 10,
          borderRadius: 5,
          border: "1px solid #aaa",
          marginRight: 10,
        }}
      />

      <Button title="Commenter" size="small" onClick={sendComment} />
    </div>
  );
};
