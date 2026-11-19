document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('social-qr-dialog');
  if (!dialog) return;
  const title = document.getElementById('social-qr-title');
  const image = document.getElementById('social-qr-image');
  const caption = document.getElementById('social-qr-caption');
  const codes = {
    wechat: {title:'WECHAT OFFICIAL ACCOUNT', src:'wechat-official.jpeg', alt:'Double Take WeChat official account QR code', caption:'微信公眾號 · 掃碼關注'},
    xiaohongshu: {title:'小紅書 / XIAOHONGSHU', src:'xiaohongshu-qr.jpeg', alt:'Double Take Press Xiaohongshu QR code', caption:'小紅書 · 掃碼關注'}
  };
  document.querySelectorAll('[data-qr-open]').forEach(button => {
    button.addEventListener('click', () => {
      const code = codes[button.dataset.qrOpen];
      if (!code) return;
      title.textContent = code.title;
      image.src = code.src;
      image.alt = code.alt;
      caption.textContent = code.caption;
      if (!dialog.open) dialog.showModal();
    });
  });
  dialog.querySelector('[data-qr-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
});
