import React from "react";
import { Input } from "../Input";
import { modifyMessage } from "../../api";
import { Button } from "../Button";

export function ModifyMessage({ message, onModalClose }) {
  const [text, setText] = React.useState(message.message || "");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSend = async () => {
    await modifyMessage(text, "", message._id);
    onModalClose();
  };

  return (
    <div className="create-message" style={{ width: "50%" }}>
      <h2>Modifier ce commentaire</h2>
      <Input
        type="text"
        label="Votre message"
        value={text}
        onChange={onChange}
      />
      <div>
        <div style={{ width: 150, marginTop: -40 }}>
          <Button title="Modifier" onClick={onSend} />
        </div>
      </div>
    </div>
  );
}
