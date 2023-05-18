// import React, { useEffect, useState } from 'react';
// import { useChannel } from "./AblyReactEffect";
// import styles from './AblyChatComponent.module.css';

// const AblyChatComponent = ({setMessages,receivedMessages,channel,ably}) => {

//   let inputBox = null;
//   let messageEnd = null;

//   const [messageText, setMessageText] = useState("");
//   const messageTextIsEmpty = messageText.trim().length === 0;
//   const [author,setAuthor]=useState('')
//   // const [channel, ably] = useChannel("chat-demo", (message) => {
//   //   const history = receivedMessages.slice(-199);
//   //   setMessages([...history, message]);
//   // });

//   const sendChatMessage = (messageText) => {
//     channel.publish({ name: "chat-message", data: messageText });
//     setMessageText("");
//     inputBox.focus();
//   }

//   const handleFormSubmission = (event) => {
//     event.preventDefault();
//     sendChatMessage(messageText);
//   }

//   const handleKeyPress = (event) => {
//     if (event.charCode !== 13 || messageTextIsEmpty) {
//       return;
//     }
//     sendChatMessage(messageText);
//     event.preventDefault();
//   }

//   const messages = receivedMessages.map((message, index) => {
//     const author = message.connectionId === ably.connection.id ? "me" : "other";
//     return (
// <div key={index} className={`${author=='me'?'ml-auto mr-0':'mr-auto ml-0'} `}>
//     <span  className={`${author=='me'?'bg-green-200/90 rounded-t-lg rounded-l-lg':'bg-blue-200/90 rounded-t-lg rounded-r-lg'} px-6 text-sm py-1 text-black block `} data-author={author}
//     >{message.data}
//     </span>
//      <span className={`${author=='me'?'text-right':'text-left'}  block my-1 text-xs text-gray-500 `}>
//      {author=='me'?'me':'Anonymous'}
//    </span>
// </div>
//     )
//   });
 

//   useEffect(() => {
//     messageEnd.scrollIntoView({ behaviour: "smooth" });
//   });

//   return (
//     <div className={styles.chatHolder}>
//       <div className={styles.chatText}>
//         {messages}
//         <div ref={(element) => { messageEnd = element; }}></div>
//       </div>
//       <div>
//       <form onSubmit={handleFormSubmission} className={styles.form}>
//         <textarea
//           ref={(element) => { inputBox = element; }}
//           value={messageText}
//           placeholder="Say something..."
//           onChange={e => setMessageText(e.target.value)}
//           onKeyPress={handleKeyPress}
//           className={styles.textarea}
//         ></textarea>
//         <button type="submit" className='px-5 py-3 bg-gray-700 rounded-r-lg' disabled={messageTextIsEmpty}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
// </svg>
//         </button>
//       </form>
//       </div>
//     </div>
//   )
// }

// export default AblyChatComponent;