import React from "react";
import moment from "moment";
import { deleteComment } from "../../api";
import { Trash2 } from "react-feather";

export const Comment = ({ comment, fetchComments, isAdmin }) => {
  // On change la locale de moment en francais
  moment.locale("fr");
  // On formate la date de modification du message pour qqchose de plus accessible visuellement
  const updatedAt = moment(comment.updatedAt).format("dddd HH:mm");

  // On appelle l'API pour supprimer le commentaire et on rafraichit les commentaires
  const onDeleteComment = async () => {
    await deleteComment(comment._id);
    fetchComments();
  };

  return (
    <div key={comment._id} className="comment">
      {/* Si on est admin ou propriétaire du message, on peut supprimer le commentaire */}
      {isAdmin && (
        <Trash2 className="icon-comment" size={20} onClick={onDeleteComment} />
      )}
      {/* Texte du commentaire + date de modification */}
      {comment.text} <span className="updated-at">Modifié {updatedAt}</span>
    </div>
  );
};
