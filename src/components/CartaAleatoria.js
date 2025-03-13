import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CartaAleatoria.css";
import sonido from "../assets/sonido.mp3";

// Lista de mensajes románticos
const cartas = [
  "✨ Eres la luz de mis días y la calma de mis noches.",
  "💖 Cada latido de mi corazón lleva tu nombre.",
  "🌹 Amarte es la mejor decisión que he tomado en mi vida.",
  "💫 Tenerte a mi lado hace que cada día sea especial.",
  "💞 Eres mi refugio, mi hogar y mi felicidad.",
  "🌙 En cada estrella del cielo veo reflejado tu amor.",
  "❤️ No necesito un cuento de hadas, te tengo a ti.",
  "🎶 Eres la melodía más hermosa en la canción de mi vida.",
  "🌿 Como el sol a la mañana, así iluminas mi existencia.",
  "💌 Mi amor por ti es como el universo: infinito.",
  "Cada nuevo amanecer es una oportunidad para escribir una nueva página en tu historia, una llena de amor y esperanza. Recuerda que cada día trae consigo una nueva posibilidad.",
  "A veces la vida nos pone en pausa, pero incluso en la espera hay crecimiento. Confía en tu proceso, porque todo lo que es para ti llegará en el momento perfecto.",
  "Si el mundo te parece frío, recuerda que llevas dentro un fuego que nunca se apaga. Permite que esa luz ilumine cada rincón de tu vida.",
  "La paciencia es un puente que te llevará a donde quieres estar. No apresures las cosas, todo llega cuando debe llegar.",
  "Los días grises también son parte del paisaje, pero nunca opacan la belleza del sol que llevas dentro. No permitas que los momentos difíciles definan tu vida.",
  "Cada pequeña batalla ganada en tu interior es un paso más hacia la victoria. Nunca subestimes el poder de tu resiliencia.",
  "Las pausas en la vida no significan el final, solo son momentos de preparación para lo mejor que está por venir. Confía en el proceso.",
  "No hay prisa, todo lo bueno llega en el tiempo perfecto, y tú mereces lo mejor. La paciencia es una virtud que te llevará lejos.",
  "En cada instante de duda, escucha a tu corazón, él siempre te guiará a lo correcto. La verdad está en tu interior.",
  "La resiliencia es tu mayor fortaleza, sigue avanzando con fe en ti misma. Eres más fuerte de lo que imaginas.",
  "No tienes que tener todas las respuestas hoy, solo confía en que llegarán en su momento. Cada día es una oportunidad para aprender.",
  "Recuerda que no estás sola, yo siempre estaré aquí para recordarte lo increíble que eres. Tienes un corazón inmenso y valioso.",
  "El amor propio es el primer paso para seguir adelante, cuida de ti con la misma ternura con la que cuidas a los demás. Eres tu mejor refugio.",
  "En cada caída hay un aprendizaje, en cada aprendizaje hay un paso más hacia tu mejor versión. Todo suma en el camino.",
  "Si sientes que el mundo pesa demasiado, no dudes en compartir tu carga, siempre hay alguien que quiere sostener tu mano. No tienes que hacerlo sola.",
  "La tristeza no define quién eres, solo es una nube pasajera en el cielo infinito de tu vida. Deja que pase y sigue brillando.",
  "El amor verdadero no se mide en tiempo, sino en la profundidad de los sentimientos. El corazón siempre encuentra su camino.",
  "Cuando todo parezca incierto, respira hondo, confía y sigue adelante, la claridad llegará. No todo necesita ser resuelto hoy.",
  "No importa cuántas veces caigas, lo importante es que siempre tengas el valor de levantarte. Cada caída es una oportunidad para volver más fuerte.",
  "La vida no se trata de correr, sino de caminar con propósito y disfrutar el viaje. Disfruta el presente sin miedo al futuro.",
  "A veces, lo único que necesitas es un respiro y recordar cuánto has avanzado. Eres capaz de lograr cosas increíbles.",
  "No permitas que los miedos de hoy opaquen los sueños de mañana. Todo lo que deseas está esperando por ti.",
  "La luz dentro de ti es más fuerte que cualquier oscuridad exterior. Nunca dejes de brillar.",
  "El amor y la paz comienzan en el corazón, cultívalos y todo a tu alrededor florecerá. Lo mejor está por venir.",
  "No te preocupes si hoy sientes que no avanzas, cada semilla tarda en crecer antes de florecer. Estás en el camino correcto.",
  "La espera puede ser difícil, pero siempre vale la pena cuando lo que se espera es sincero y real. Ten fe en lo que viene.",
  "No te compares con los demás, tu camino es único y perfecto tal como es. Confía en tu propia historia.",
  "La felicidad no se encuentra en el destino, sino en cada paso que das para llegar. Disfruta cada instante.",
  "Rodéate de amor, de energía positiva, y verás cómo todo empieza a brillar a tu alrededor. La luz atrae luz.",
  "Recuerda que cada tormenta pasa y deja detrás un cielo más despejado y hermoso. Todo tiene su tiempo.",
  "✨ Eres la luz de mis días y la calma de mis noches.",
  "💖 Cada latido de mi corazón lleva tu nombre.",
  "🌹 Amarte es la mejor decisión que he tomado en mi vida.",
  "💫 Tenerte a mi lado hace que cada día sea especial.",
  "💞 Eres mi refugio, mi hogar y mi felicidad.",
  "🌙 En cada estrella del cielo veo reflejado tu amor.",
  "❤️ No necesito un cuento de hadas, te tengo a ti.",
  "🎶 Eres la melodía más hermosa en la canción de mi vida.",
  "🌿 Como el sol a la mañana, así iluminas mi existencia.",
  "💌 Mi amor por ti es como el universo: infinito.",
  "🌟 Eres la estrella que guía mis noches más oscuras.",
  "💖 En tu mirada encuentro la paz que mi alma necesita.",
  "🌹 Amar y ser amado por ti es el mejor regalo de la vida.",
  "✨ Cada día a tu lado es una historia que vale la pena contar.",
  "💞 Tu amor es mi refugio en medio del caos del mundo.",
  "🌙 No importa la distancia, siempre te llevo en mi corazón.",
  "💌 Si mi corazón hablara, solo diría tu nombre una y otra vez.",
  "❤️ Eres el sueño que nunca quiero dejar de vivir.",
  "🎶 En el silencio de la noche, tu amor es mi melodía favorita.",
  "🌿 Crecemos juntos como las raíces de un árbol fuerte y eterno.",
  "🌅 Cada amanecer contigo es una razón más para sonreír.",
  "🔥 Aunque el viento sople fuerte, nuestro amor es inquebrantable.",
  "🌊 Como el mar a la orilla, siempre vuelvo a ti.",
  "🍃 Eres la brisa suave que calma mi alma en los días difíciles.",
  "🕊️ Tu amor es libertad, paz y hogar en un solo abrazo.",
  "💫 Brillas con una intensidad que ilumina incluso mis días más oscuros.",
  "🏹 Mi corazón es una flecha que siempre apunta hacia ti.",
  "💎 En un mundo lleno de ilusiones, tu amor es mi única certeza.",
  "🎇 Contigo, cada instante se siente como fuegos artificiales en el cielo.",
  "🌻 Eres el sol que hace florecer lo mejor de mí.",
  "🌠 No necesito pedir deseos a las estrellas, porque ya te tengo a ti.",
  "📖 Si mi vida fuera un libro, cada página estaría escrita con amor por ti.",
  "🔮 El futuro es incierto, pero si estás en él, sé que será maravilloso.",
  "🌍 En todo el universo, eres mi lugar favorito.",
  "💕 Amarte no es una opción, es una necesidad de mi alma.",
  "🏡 Mi hogar no es un lugar, es estar contigo.",
  "🎭 En un mundo de apariencias, tú eres mi única verdad.",
  "💃 Contigo, incluso la rutina se siente como una danza infinita.",
  "🍂 Como las estaciones, cambiamos, pero nuestro amor siempre florece.",
  "🌞 Eres mi sol en los días grises y mi estrella en las noches oscuras.",
  "🕰️ Cada momento a tu lado es un tesoro que guardo en mi corazón.",
  "💏 Nuestro amor no necesita palabras, se expresa en cada mirada.",
  "🌿 Como la naturaleza, nuestro amor crece fuerte y sin límites.",
  "🎵 Eres la canción que quiero escuchar por el resto de mi vida.",
  "💖 No hay distancia capaz de apagar el fuego de nuestro amor.",
  "🧭 No importa a dónde vaya, siempre quiero que mi camino me lleve a ti.",
  "🌜 En cada noche oscura, tu amor es la luna que me ilumina.",
  "🚀 Contigo, incluso el cielo es solo el principio.",
  "💓 Tu amor es el latido más fuerte dentro de mi pecho.",
  "🏞️ Eres mi paisaje favorito, ese que nunca me canso de admirar.",
  "🎇 Amarte es como ver fuegos artificiales en el cielo de mi alma.",
  "📅 No importa el día ni la hora, siempre pienso en ti.",
  "🕊️ Contigo, mi corazón siempre encuentra paz y libertad.",
  "🔥 Nuestro amor es un fuego eterno que nada puede apagar.",
  "💡 Si alguna vez me pierdo, tu amor será la luz que me guíe de regreso.",
  "🧡 En un mundo lleno de caos, tu amor es mi calma.",
  "🌸 Eres la flor más hermosa en el jardín de mi vida.",
  "💬 No necesito palabras, solo un abrazo tuyo para sentirme completo.",
  "⏳ En cada instante que paso contigo, el tiempo deja de existir.",
  "🌙 En cada luna llena, veo reflejado el brillo de tu amor.",
  "🚢 Navegaría los mares más profundos solo para estar a tu lado.",
  "🔑 Eres la llave que abre cada puerta de mi felicidad.",
  "🏆 Si el amor fuera un premio, tú serías mi victoria eterna.",
  "🌀 En el torbellino de la vida, tú eres mi centro y mi paz.",
  "🌈 Contigo, cada día es un nuevo arcoíris de felicidad.",
  "🌍 Eres mi mundo entero en una sola persona.",
  "🌟 Cada día es una nueva oportunidad para crecer y ser mejor.",
  "💪 No importa cuántas veces caigas, lo importante es levantarte con más fuerza.",
  "🌱 La paciencia es clave, incluso la semilla más pequeña se convierte en un árbol enorme.",
  "⏳ Todo llega en su tiempo, confía en el proceso.",
  "🚀 No tengas miedo de soñar en grande, porque los sueños se hacen realidad con esfuerzo.",
  "🌈 Después de la tormenta, siempre llega el arcoíris.",
  "🔥 Eres más fuerte de lo que crees, no subestimes tu capacidad.",
  "💡 Cada error es una lección que te acerca más a tu meta.",
  "🎯 No compares tu camino con el de otros, cada persona tiene su propio ritmo.",
  "🌍 Aprecia lo que tienes mientras trabajas por lo que quieres.",
  "🛤️ Si el camino se ve difícil, recuerda por qué empezaste.",
  "🏆 El éxito no es el final, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
  "🌊 Como el mar, la vida tiene olas altas y bajas, pero siempre sigue adelante.",
  "🏗️ Todo lo que construyes con esfuerzo, se mantiene con orgullo.",
  "🕊️ La paz viene cuando aceptas que no puedes controlar todo.",
  "📖 Cada día es una página nueva, asegúrate de escribir una gran historia.",
  "💫 Nunca dudes de tu propio brillo, el mundo necesita tu luz.",
  "🎶 Incluso las notas más bajas hacen hermosa una melodía.",
  "⚡ Un pequeño paso cada día te acerca más a tu sueño.",
  "🛠️ No te preocupes si todo parece difícil ahora, cada prueba te está fortaleciendo.",
  "🛤️ No te desanimes si el progreso es lento, avanzar es avanzar.",
  "🌺 Aprende a florecer incluso en los días más oscuros.",
  "🧭 La dirección es más importante que la velocidad.",
  "🚦 No te compares, cada quien avanza a su propio ritmo.",
  "🎈 Deja ir lo que no puedes controlar y confía en lo que está por venir.",
  "📅 Hoy puede ser difícil, pero mañana será un nuevo día con nuevas oportunidades.",
  "🔥 El fuego que llevas dentro es más fuerte que cualquier tormenta exterior.",
  "🎯 La única competencia real es contigo mismo, mejora cada día.",
  "🌓 No todas las noches son estrelladas, pero todas traen un nuevo amanecer.",
  "🛤️ Si el camino se pone difícil, es porque vas en la dirección correcta.",
  "🏔️ Cada desafío que superas te hace más fuerte para el siguiente.",
  "🚀 No dejes que el miedo te detenga, lánzate y confía en tu capacidad.",
  "🔑 La clave del éxito es la constancia, no la velocidad.",
  "💖 Recuerda ser amable contigo mismo, estás haciendo lo mejor que puedes.",
  "📢 No te rindas, el mundo necesita todo lo bueno que llevas dentro.",
  "🛶 Remar contra la corriente es difícil, pero vale la pena si sabes a dónde vas.",
  "🌟 Lo mejor aún está por venir, sigue creyendo en ti.",
  "⏰ No apresures el tiempo, lo que es para ti llegará en su momento justo.",
  "🌻 Aún en medio de la adversidad, siempre hay algo por lo que agradecer.",
  "📍 No pierdas el enfoque, cada pequeño esfuerzo suma.",
  "💙 Las mejores cosas en la vida toman tiempo, sigue adelante.",
  "🛤️ Si hoy parece difícil, mañana puede ser el día en que todo cambie.",
  "🎭 A veces las pruebas más difíciles nos llevan a las mejores versiones de nosotros mismos.",
  "🌌 Nunca subestimes el poder de empezar de nuevo.",
  "🦋 Todo cambio trae consigo la oportunidad de crecimiento.",
  "🛠️ Construye hoy el futuro que quieres vivir mañana.",
  "🌬️ A veces es necesario soltar lo viejo para dejar espacio a lo nuevo.",
  "📢 No dejes que el miedo apague tu voz, tienes mucho que ofrecer al mundo.",
  "🏹 Mantén la vista en la meta y no en los obstáculos.",
  "🚶‍♂️ Avanza un paso a la vez, lo importante es no detenerse.",
  "🌙 La noche más oscura es justo antes del amanecer, sigue adelante.",
  "💖 Rodéate de personas que sumen, no de quienes resten.",
  "🎨 La vida es como un lienzo, pinta tu propia historia con colores vibrantes.",
  "🏆 Todo gran logro comenzó con la decisión de intentarlo.",
  "🌞 Cada día trae consigo una nueva oportunidad, aprovéchala.",
  "💎 A veces las dificultades pulen tu carácter como un diamante en bruto.",
  "🎯 No permitas que una mala racha te haga olvidar lo lejos que has llegado.",
  "🌊 La calma viene después de la tormenta, solo resiste un poco más.",
  "🏔️ Las vistas más hermosas vienen después de la subida más difícil.",
  "🌸 Permítete florecer en tu propio tiempo, sin presiones externas.",
  "🎇 Nunca dejes que una mala temporada te haga dudar de un buen futuro.",
  "💫 Si no encuentras motivación, recuerda por qué empezaste.",
  "💞 A veces, lo único que necesitas es un poco de amor propio.",
  "🎯 Cada esfuerzo vale la pena, aunque los resultados no sean inmediatos.",
  "🌟 Mantén la fe en ti mismo, eres más capaz de lo que imaginas.",
  "🎶 Hasta la melodía más hermosa necesita silencios, tómate tu tiempo.",
  "🦁 Sé valiente, aunque el miedo intente detenerte.",
  "🔄 Si el plan no funciona, cambia el plan, pero nunca la meta.",
  "🛤️ Confía en que cada paso, por pequeño que sea, te acerca a donde quieres estar.",
  "🌼 Creer en ti mismo es el primer paso para lograr grandes cosas."
];

const CartaAleatoria = () => {
  const [mensaje, setMensaje] = useState("💌 Presiona el botón para generar una carta.");
  const [escribiendo, setEscribiendo] = useState(false);
  const audio = new Audio(sonido);

  const generarCarta = () => {
    if (escribiendo) return; // Evita que se genere un nuevo mensaje antes de terminar

    const nuevaCarta = cartas[Math.floor(Math.random() * cartas.length)];
    if (!nuevaCarta) return;

    audio.play();
    setEscribiendo(true);
    setMensaje("");

    let i = 0;
    let nuevoMensaje = "";

    const escribir = setInterval(() => {
      if (i < nuevaCarta.length) {
        nuevoMensaje += nuevaCarta[i];
        setMensaje(nuevoMensaje);
        i++;
      } else {
        clearInterval(escribir);
        setEscribiendo(false);
      }
    }, 50);
  };

  return (
    <motion.div
      className="carta-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>💌 Carta de Amor</h2>
      <motion.p
        key={mensaje}
        className="mensaje"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {mensaje}
      </motion.p>
      <motion.button
        onClick={generarCarta}
        className="boton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        💖 Generar Carta
      </motion.button>
    </motion.div>
  );
};

export default CartaAleatoria;
