import React from "react";
import "moment/locale/fr";
import { Edit3, Trash2 } from "react-feather";
import Modal from "react-modal";
import { Comments } from "../Comments";
import { ModifyMessage } from "../ModifyMessage";
import { deleteMessage } from "../../api";

// Modal custom styles
const customStyles = {
  content: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    border: 0,
    margin: 0,
    padding: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.4)",
  },
};

export const MessageInfo = ({ message, fetchData }) => {
  // State pour decider si la modale est ouverte ou fermée. Par défaut fermée
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // On compute si l'utilisateur courant est admin global ou juste pour ce post car il lui appartient
  const isAdmin =
    localStorage.getItem("isAdmin") === "true" ||
    message.userId === localStorage.getItem("userId");

  // Gère l'ouverture de la modale de modification
  const onModalOpen = () => {
    setIsOpen(true);
  };

  // Gère la fermeture de la modale de modification et on raffraichit les données lors de la fermeture
  const onModalClose = () => {
    setIsOpen(false);
    fetchData();
  };

  // Ouvre une alert système pour demande si on supprime le message ou non
  const onDeleteComment = async () => {
    if (window.confirm("Voulez vous supprimer ce message ?") === true) {
      await deleteMessage(message._id);
      fetchData();
    } else {
      return;
    }
  };

  return (
    <div className="message-info">
      <div className="message-header">
        <img
          src={message.imageUrl}
          className="img-header"
          alt={message.imageUrl}
        />
        <h2 style={{ flex: 1 }}>{message.message}</h2>

        {/* Edition du message si admin/proprietaire du message*/}
        {isAdmin && (
          <div className="edit-comment" onClick={onModalOpen}>
            <Edit3 size={20} />
            <span>Modifier</span>
          </div>
        )}

        {/* Edition du message si admin/proprietaire du message*/}
        {isAdmin && (
          <div className="delete-comment" onClick={onDeleteComment}>
            <Trash2 size={20} />
            <span>Supprimer</span>
          </div>
        )}
      </div>

      {/* Commentaires du message */}
      <Comments postId={message._id} isAdmin={isAdmin} />

      {/* Modale de modification du message */}
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        contentLabel="Modification d'un message"
        onRequestClose={onModalClose}
        style={customStyles}
      >
        <ModifyMessage onModalClose={onModalClose} message={message} />
      </Modal>
    </div>
  );
};
