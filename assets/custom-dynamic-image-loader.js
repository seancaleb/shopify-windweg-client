function handleImageLoader(container) {
  const img = container.querySelector('img');
  if (!img) return;

  // Already loaded (from cache or visible instantly)
  if (img.complete && img.naturalWidth > 0) {
    container.classList.remove('img-loader__loading');
  } else {
    img.addEventListener('load', () => {
      container.classList.remove('img-loader__loading');
    });
  }
}

// Watch images globally (initial and future)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1 && node.classList?.contains('img-loader__loading')) {
        handleImageLoader(node);
      }
    });
  });
});

// Observe all body changes (modals, dynamic sections, etc.)
observer.observe(document.body, { childList: true, subtree: true });

// Or manually call on DOM load
document.querySelectorAll('.img-loader__loading').forEach(handleImageLoader);
