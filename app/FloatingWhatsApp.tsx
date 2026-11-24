const whatsapp = 'https://wa.me/5524998310561?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Vitae.';

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Vitae pelo WhatsApp"
      data-cta="whatsapp-flutuante"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.04 3.2A12.7 12.7 0 0 0 5.2 22.53L3.5 28.8l6.4-1.68a12.68 12.68 0 1 0 6.14-23.92Zm0 22.95c-1.8 0-3.56-.49-5.1-1.42l-.36-.22-3.8 1 1.01-3.7-.24-.38a10.23 10.23 0 1 1 8.49 4.72Zm5.62-7.67c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.16-.2.3-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53a9.3 9.3 0 0 1-1.72-2.14c-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.95-2.3-.25-.6-.51-.52-.7-.53h-.59c-.2 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.56 0 1.52 1.1 2.98 1.26 3.19.15.2 2.17 3.31 5.26 4.64.73.32 1.3.5 1.75.65.73.23 1.4.2 1.93.12.59-.09 1.82-.75 2.08-1.47.25-.72.25-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
      </svg>
      <span>Fale pelo WhatsApp</span>
    </a>
  );
}
