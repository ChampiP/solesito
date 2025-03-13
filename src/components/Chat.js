import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Cargar mensajes iniciales
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase.from("messages").select("*").order("created_at", { ascending: true });
      if (!error) setMessages(data);
    };
    fetchMessages();

    // Suscribirse a mensajes en tiempo real
    const subscription = supabase
      .channel("messages")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload) => {
        setMessages((prevMessages) => [...prevMessages, payload.new]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // Enviar mensaje
  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    await supabase.from("messages").insert([{ content: newMessage }]);
    setNewMessage("");
  };

  return (
    <motion.div className="chat-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>💬 Chat Secreto</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className="chat-message">
            {msg.content}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Escribe tu mensaje..." />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </motion.div>
  );
};

export default Chat;
