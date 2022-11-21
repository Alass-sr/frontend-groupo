import React,  { useState }from "react";
import axios from "axios"

export default function Message() {
  

  
   const [imageUrl, setImageUrl] = useState(null);
   const [message, setMessage] = useState();
   const [comment, setComment] = useState();

   const handleOnChangeMessage = (e) => {
     setMessage(e.target.value);
   };

   const handleOnChangeComment = (e) => {
     setComment(e.target.value);
   };
   const handleOnChangeImage = (e) => {
     const files = e.target.files || e.dataTransfer.files;
     setImageUrl(files[0]);
   };

   const data = { imageUrl, message, comment };
   const handleOnSend = (e) => {
     axios
       .post(`${process.env.REACT_APP_API_URL}api/auth/message`, data)
       .then((res) => {
  console.log(res);
       })
       .catch((err) => {
         console.log(err);
       });
   };

   return (
     <div className="container-post">
       <div className="post-add">
         <div className="image-post">
           <input type="file" onChange={handleOnChangeImage} />
         </div>
         <div className="post-message">
           <input
           type="text"
           name="message"
           value={message}
           onChange={handleOnChangeMessage}
           placeholder="Ajouter un message"
         />
       </div>
       <div>
         <input
           type="text"
           name="comment"
           value={comment}
           onChange={handleOnChangeComment}
           placeholder="commentaire"
         />
       </div>

       <div className="reply">
         <button type="button">Répondre</button>
       </div>
       <div className="send">
         <button type="button" onClick={handleOnSend}>
           Envoyer
         </button>
       </div>
     </div>
   </div>
 );
}
