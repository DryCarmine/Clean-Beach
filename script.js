// Clean Beach: interacciones ligeras. No requiere librerías ni servidor.
document.documentElement.classList.add('js');

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
  mainNav.classList.toggle('is-open', !expanded);
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
}));

document.getElementById('year').textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, {threshold: .11});
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'));
}

const filterButtons = [...document.querySelectorAll('.filter-btn')];
const galleryCards = [...document.querySelectorAll('.gallery-card')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach(b => {
    const active = b === button;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  galleryCards.forEach(card => { card.hidden = category !== 'todos' && card.dataset.category !== category; });
}));

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeButton = document.getElementById('lightbox-close');
let currentCard = null;
let returnFocus = null;
function visibleCards() { return galleryCards.filter(card => !card.hidden); }
function showImage(card) {
  if (!card) return;
  currentCard = card;
  lightboxImage.src = card.dataset.src;
  lightboxImage.alt = card.dataset.alt;
  lightboxCaption.textContent = card.dataset.caption;
}
function openLightbox(card) {
  returnFocus = document.activeElement;
  showImage(card);
  lightbox.hidden = false;
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  closeButton.focus();
}
function closeLightbox() {
  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  lightboxImage.removeAttribute('src');
  returnFocus?.focus();
}
function stepImage(direction) {
  const cards = visibleCards();
  if (!cards.length) return;
  const idx = cards.indexOf(currentCard);
  showImage(cards[(idx + direction + cards.length) % cards.length]);
}
galleryCards.forEach(card => card.addEventListener('click', () => openLightbox(card)));
closeButton?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev')?.addEventListener('click', () => stepImage(-1));
document.getElementById('lightbox-next')?.addEventListener('click', () => stepImage(1));
lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => {
  if (lightbox.hidden) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') stepImage(-1);
  if (event.key === 'ArrowRight') stepImage(1);
  if (event.key === 'Tab') {
    const controls = [closeButton, document.getElementById('lightbox-prev'), document.getElementById('lightbox-next')];
    const first = controls[0]; const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
