import React, { useState } from "react";
import axios from "axios";

export default function Message() {
  const [imageUrl, setImageUrl] = useState(null);
  const [message, setMessage] = useState();
  const [comment, setComment] = useState();

  const handleOnChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleOnChangeImage = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    setImageUrl(files[0]);
  };

  return (
    <div className="container-post">
      <div className="image-post">
        <input type="file" onChange={handleOnChangeImage} />
      </div>
      <div className="post-message">
        <input
          type="text"
          name="message"
          value=""
          onChange={handleOnChangeMessage}
          placeholder="Ajouter un message"
        />
      </div>
      <div>
        <input
          type="text"
          name="comment"
          value=""
          placeholder="Ajouter un commentaire"
        />
      </div>

      <div className="reply">
        <button type="button">Répondre</button>
      </div>
      <div className="send">
        <button type="button">Envoyer</button>
      </div>
    </div>
  );
}
