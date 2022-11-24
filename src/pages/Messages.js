import React, { useState } from "react";
import { MessageInfo } from "../components/Messages/MessageInfo";
import { fetchMessages } from "../api";
import { Loading } from "../components";
import { CreateMessage } from "../components/CreateMessage";

export default function Message() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  // Chargement des messages
  const fetchData = async () => {
    // On change le loading a true
    setLoading(true);
    // On fait un appel a l'API pour récupérer les messages
    const messages = await fetchMessages();
    // On enlève le chargement
    setLoading(false);
    // On met les messages dans le state
    setMessages(messages);
  };

  // Lors du premier chargement du composant, on charge les messages
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-post">
      <div className="messages">
        <h1>Messages</h1>
        {/* Container */}
        <div className="container">
          {/* Chargement lorsque les données ne sont pas prêtes */}
          {loading && <Loading />}

          {/* Module de creation de message */}
          <CreateMessage fetchData={fetchData} />

          {/* Liste des messages */}
          {messages && (
            <div className="list">
              {messages.map((message) => (
                <MessageInfo
                  key={message._id}
                  message={message}
                  fetchData={fetchData}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
