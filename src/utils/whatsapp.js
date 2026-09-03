const STUDIO_PHONE = '59175098807';

/**
 * Genera un enlace directo a WhatsApp para enviar un mensaje preformateado.
 * @param {string} message
 * @returns {string}
 */
export const createWhatsappLink = (message) => {
  return `https://wa.me/${STUDIO_PHONE}?text=${encodeURIComponent(message)}`;
};

/**
 * Genera el mensaje de reserva para WhatsApp.
 */
export const createBookingWhatsappLink = ({ nombre, fecha, hora, tipo, paquete, notas }) => {
  const text = `¡Hola Melissa! 👋 Me gustaría reservar una sesión fotográfica en *MEL STUDIO*:
  
• *Nombre:* ${nombre}
• *Fecha deseada:* ${fecha}
• *Hora:* ${hora}
• *Tipo de sesión:* ${tipo}
• *Paquete:* ${paquete}
${notas ? `• *Notas:* ${notas}` : ''}

¿Podrías confirmarme la disponibilidad? ¡Gracias!`;

  return createWhatsappLink(text);
};

/**
 * Genera el mensaje de contacto general para WhatsApp.
 */
export const createContactWhatsappLink = ({ nombre, correo, tema, mensaje }) => {
  const text = `¡Hola Melissa! 👋 Te contacto desde el sitio web de *MEL STUDIO*:

• *Nombre:* ${nombre}
• *Correo:* ${correo}
• *Tema:* ${tema}
• *Mensaje:* ${mensaje}`;

  return createWhatsappLink(text);
};
