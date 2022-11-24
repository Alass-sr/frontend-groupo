import React from "react";
import { getCommentsByPostId } from "../../api";
import { Comment } from "./Comment";
import { ReplyModule } from "../Messages/ReplyModule";

export const Comments = ({ postId, isAdmin }) => {
  const [comments, setComments] = React.useState([]);

  // On appelle l'API pour récupérer les commentaires a partir d'un post ID
  const fetchComments = async () => {
    const results = await getCommentsByPostId(postId);
    // On set les commentaires dans le state local
    setComments(results);
  };

  // Lors du premier chargement du composant, on appelle la recuperation des commentaires
  React.useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="comments">
      {/*On affiche tous les commentaires si les commentaires sont chargés */}
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            fetchComments={fetchComments}
            isAdmin={isAdmin}
          />
        ))}
      {/* Module de réponse aux commentaires */}
      {postId && <ReplyModule postId={postId} fetchComments={fetchComments} />}
    </div>
  );
};
