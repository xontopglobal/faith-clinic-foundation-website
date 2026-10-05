const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Faith Clinic Foundation social media links
const footer = document.querySelector('footer');

if (footer && !footer.querySelector('.social-links')) {
  const socialLinks = document.createElement('div');
  socialLinks.className = 'social-links';

  socialLinks.innerHTML = `
    <h3>Follow Faith Clinic Foundation</h3>
    <a href="https://www.facebook.com/share/1D5cYFZqDC/" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://www.tiktok.com/@faithclinic2" target="_blank" rel="noopener noreferrer">TikTok</a>
    <a href="https://www.instagram.com/faithclinicfoundation/" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a href="https://www.linkedin.com/company/faith-clinic-foundation/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  `;

  footer.querySelector('.footer-grid')?.appendChild(socialLinks) ||
    footer.appendChild(socialLinks);
}