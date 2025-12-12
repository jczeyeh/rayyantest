// Mobile tap pop-out for event gallery
document.querySelectorAll('.event-gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    // Remove 'active' from all other images
    document.querySelectorAll('.event-gallery-grid img.active').forEach(i => {
      if(i !== img) i.classList.remove('active');
    });
    // Toggle active class on clicked image
    img.classList.toggle('active');
  });
});

// Lightbox for full-screen image view
const galleryImages = document.querySelectorAll('.event-gallery-grid img');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src; // Set clicked image
    lightboxOverlay.style.display = 'flex'; // Show overlay
  });
});

function closeLightbox() {
  lightboxOverlay.style.display = 'none';
  lightboxImg.src = '';
}
