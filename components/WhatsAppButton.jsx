export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919742483054?text=Hi%20GK%20Home%20Interiors%2C%20I%20want%20to%20know%20about%20your%20interior%20design%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600 md:h-auto md:w-auto md:px-5 md:py-3"
    >
      <span className="text-2xl md:hidden">💬</span>
      <span className="hidden text-sm font-medium md:inline">WhatsApp</span>
    </a>
  );
}