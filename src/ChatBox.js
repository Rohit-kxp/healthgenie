import React, { useState } from "react";
import { FaCamera, FaPaperPlane, FaRobot } from "react-icons/fa";

const ChatBox = () => {
  const [inputText, setInputText] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [chatResponse, setChatResponse] = useState("");

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //let response = You sent: "${inputText}";
    if (selectedImages.length > 0) {
      const fileNames = selectedImages.map((file) => file.name).join(", ");
      response += ` with images: ${fileNames}`;
    }
    setChatResponse(response);
    setInputText("");
    setSelectedImages([]);
  };

  return (
    <div className="chat-container">
      <div className="chatbox">
        <div className="chatbot-header">
          <FaRobot className="chatbot-icon" />
          <span>Chatbot</span>
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <textarea
            placeholder="Type your message..."
            value={inputText}
            onChange={handleTextChange}
            className="chat-input"
            rows="4"
          />
          <div className="file-input-container">
            <label htmlFor="imageUpload" className="camera-button">
              <FaCamera />
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {selectedImages.length > 0 && (
              <div className="selected-files">
                {selectedImages.map((file, index) => (
                  <span key={index} className="file-name">
                    {file.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="send-button">
            <FaPaperPlane />
          </button>
        </form>
      </div>
      <div className="chat-response">
        <h3>Response:</h3>
        <p>{chatResponse}</p>
      </div>
    </div>
  );
};

export default ChatBox;
