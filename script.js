/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== MOBILE NAV ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function toggleNav() {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
}
function closeNav() {
  navToggle.classList.remove('open');
  navLinks.classList.remove('open');
}



/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
reveals.forEach(el => revealObserver.observe(el));

/* ===== FORM HANDLING ===== */
const quoteForm = document.getElementById('quoteForm');
const submitBtn = document.getElementById('formSubmitBtn');
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.style.pointerEvents = 'none';

  fetch("https://formsubmit.co/ajax/websiteform@askowallprinting.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      Name: document.getElementById('formName').value,
      Email: document.getElementById('formEmail').value,
      Project_Type: document.getElementById('formProject').value,
      Message: document.getElementById('formMessage').value
    })
  })
    .then(response => response.json())
    .then(data => {
      submitBtn.textContent = 'Sent ✓';
      submitBtn.style.background = '#2a9d3a';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.pointerEvents = '';
        quoteForm.reset();
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      submitBtn.textContent = 'Error!';
      submitBtn.style.background = '#e8400c';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.pointerEvents = '';
      }, 3000);
    });
});

/* ===== SMOOTH ANCHOR SCROLLING ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== FAQ ===== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* ===== CMYK STREAK SPAWNER ===== */
(function () {
  const cmykContainer = document.getElementById('heroCmyk');
  const colors = [
    { bg: '#e8400c', name: 'orange' },
    { bg: '#f5a623', name: 'amber' },
    { bg: '#f5c842', name: 'gold' }
  ];

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function getPageHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
  }

  const presetFractions = [0, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95, 1.0];
  const activeLocations = new Set();

  function spawnStreak() {
    const available = presetFractions.filter(f => !activeLocations.has(f));
    if (available.length === 0) return;

    const el = document.createElement('div');
    el.classList.add('cmyk-swipe');

    const color = colors[Math.floor(Math.random() * colors.length)];
    const fraction = available[Math.floor(Math.random() * available.length)];
    activeLocations.add(fraction);

    const pageH = getPageHeight();
    const topPx = fraction * pageH;

    const height = rand(60, 160);
    const peakOpacity = rand(0.06, 0.15);
    const duration = rand(8, 16);
    const delay = rand(0, 0.5);

    el.style.background = color.bg;
    el.style.top = topPx + 'px';
    el.style.height = height + 'px';
    el.style.setProperty('--peak-opacity', peakOpacity);
    el.style.setProperty('--dur', duration + 's');
    el.style.setProperty('--delay', delay + 's');

    cmykContainer.appendChild(el);

    const totalMs = (duration + delay) * 1000;
    setTimeout(() => {
      el.remove();
      activeLocations.delete(fraction);
    }, totalMs + 200);
  }

  function scheduleNext() {
    spawnStreak();
    setTimeout(scheduleNext, rand(500, 1500));
  }

  // Wait for full page load so scrollHeight is accurate
  window.addEventListener('load', () => {
    for (let i = 0; i < 12; i++) {
      setTimeout(spawnStreak, i * 250);
    }
    setTimeout(scheduleNext, 3500);
  });
})();

/* ===== PORTFOLIO INTERACTION ===== */
(function () {
  const allPortfolioItems = document.querySelectorAll('.portfolio-item');

  allPortfolioItems.forEach(item => {
    const video = item.querySelector('.portfolio-video');
    let restartTimeout = null;
    let isHovering = false;

    // Helper to safely reset video to the final frame preview and force mobile render
    function resetToPreview() {
      if (video && video.duration && !isHovering && !item.classList.contains('touch-active')) {
        video.currentTime = Math.max(0, video.duration - 0.5);
        // Play and immediately pause to force mobile Safari/Chrome to paint/render the frame
        video.play().then(() => {
          video.pause();
        }).catch(() => {});
      }
    }

    if (video) {
      // When metadata is loaded, seek to the last frame as preview
      video.addEventListener('loadedmetadata', () => {
        resetToPreview();
      });

      // Also seek when video data is loaded to ensure it renders on mobile devices
      video.addEventListener('loadeddata', () => {
        resetToPreview();
      });

      // Listen for duration changes (e.g. if duration was initially NaN)
      video.addEventListener('durationchange', () => {
        resetToPreview();
      });

      // Video ended while hovering/active — pause on last frame, then restart after delay
      video.addEventListener('ended', () => {
        if (isHovering || item.classList.contains('touch-active')) {
          restartTimeout = setTimeout(() => {
            if (isHovering || item.classList.contains('touch-active')) {
              video.currentTime = 0;
              video.play().catch(() => { });
            }
          }, 1500);
        } else {
          resetToPreview();
        }
      });
    }

    // Mouse enter — start playing from the beginning
    item.addEventListener('mouseenter', () => {
      isHovering = true;
      if (video) {
        clearTimeout(restartTimeout);
        video.currentTime = 0;
        video.play().catch(() => { });
        item.classList.add('playing');
      }
    });

    // Mouse leave — pause, clean touch state, and revert to preview
    item.addEventListener('mouseleave', () => {
      isHovering = false;
      item.classList.remove('touch-active');
      if (video) {
        clearTimeout(restartTimeout);
        video.pause();
        item.classList.remove('playing');
        resetToPreview();
      }
    });

    // Click / Touch toggle
    item.addEventListener('click', (e) => {
      const isCurrentlyActive = item.classList.contains('touch-active');

      // Close and pause/reset all other items
      allPortfolioItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('touch-active');
          const otherVideo = otherItem.querySelector('.portfolio-video');
          if (otherVideo) {
            otherVideo.pause();
            otherItem.classList.remove('playing');
            if (otherVideo.duration) {
              otherVideo.currentTime = Math.max(0, otherVideo.duration - 0.5);
              otherVideo.play().then(() => {
                otherVideo.pause();
              }).catch(() => {});
            }
          }
        }
      });

      // Toggle current item
      if (isCurrentlyActive) {
        item.classList.remove('touch-active');
        if (video) {
          video.pause();
          item.classList.remove('playing');
          resetToPreview();
        }
      } else {
        item.classList.add('touch-active');
        if (video) {
          clearTimeout(restartTimeout);
          video.currentTime = 0;
          video.play().catch(() => { });
          item.classList.add('playing');
        }
      }
    });
  });
})();