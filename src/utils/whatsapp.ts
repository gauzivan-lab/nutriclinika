export const WHATSAPP_PHONE = '79370643055';

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
