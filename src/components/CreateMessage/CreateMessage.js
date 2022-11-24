import React from "react";
import { Input } from "../Input";
import { createMessage } from "../../api";
import { Button } from "../Button";

export function CreateMessage({ fetchData }) {
  // Texte du message
  const [text, setText] = React.useState("");
  // Fichier a uploader
  const [file, setFile] = React.useState();
  // Miniature de l'image
  const [fileSrc, setFileSrc] = React.useState();
  // Reference a l'element input file
  const refFile = React.useRef(null);

  // Le texte du message change
  const onChange = (e) => {
    setText(e.target.value);
  };

  // On uploade une nouvelle image
  const onChangeFile = (e) => {
    // On recupere l'image dans e.target.files[0] [0] car on autorise pas de multi-upload.
    // Il n'y aura donc qu'une seule image
    const file = e.target.files[0];
    // On stocke dans le state l'image
    setFile(file);
    // On fait appel à FileReader API pour récupérer le contenu de l'image
    var reader = new FileReader();
    // On lit le fichier
    reader.readAsDataURL(file);
    // Une fois le fichier lu (c'est une callback apellee une fois que reader a lu entierement l'image)
    reader.onloadend = (e) => {
      // On stocke l'image dans le state
      setFileSrc([reader.result]);
    };
  };

  const onSend = async () => {
    // On fait appel a l'API pour créer un message
    await createMessage(text, file);
    // On rafraichit la liste des messages pour afficher le nouveau
    fetchData();
    // On reset les valeurs par défault une fois que tout est fini
    setText("");
    setFileSrc(undefined);
    setFile(undefined);
  };

  return (
    <div className="create-message">
      <h2>Postez un contenu intéressant pour votre entreprise</h2>

      {/* Input file caché qui ne sera accessible que par une ref*/}
      <input
        ref={refFile}
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        accept="image/jpeg, image/jpg, image.png"
      />

      {/* Miniature ou texte par default si pas de miniature */}
      <div className="upload">
        <div onClick={() => refFile.current.click()} className="upload-zone">
          {!fileSrc && <span>Ajouter une image</span>}
          {fileSrc && <img src={fileSrc} alt="pro" />}
        </div>
      </div>

      {/* Texte du message*/}
      <Input
        type="text"
        label="Votre message"
        value={text}
        onChange={onChange}
      />

      {/* Bouton d'upload */}
      <div className="send-button">
        <Button title="Envoyer" onClick={onSend} />
      </div>
    </div>
  );
}
