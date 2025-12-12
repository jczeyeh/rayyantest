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
