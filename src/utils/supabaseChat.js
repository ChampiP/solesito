import { supabase } from "../supabase";

// Enviar un mensaje al chat
export const sendMessage = async (sender, message) => {
  const { error } = await supabase.from("chat_secreto").insert([{ sender, message }]);
  return error;
};

// Obtener mensajes del chat
export const getMessages = async () => {
  const { data, error } = await supabase.from("chat_secreto").select("*").order("created_at", { ascending: true });
  return { data, error };
};

// Escuchar nuevos mensajes en tiempo real
export const subscribeToMessages = (callback) => {
  return supabase
    .channel("chat_secreto")
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "chat_secreto" }, (payload) => {
      callback(payload.new);
    })
    .subscribe();
};
