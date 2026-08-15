// SICG — accordion for the "AI in practice" rows, plus the mobile nav toggle.
// Panels ship open in the HTML so the page is complete with JS disabled;
// this script collapses them on load and wires the toggles.

(function () {
  'use strict';

  document.querySelectorAll('.ai-trigger').forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    var glyph = trigger.querySelector('.ai-glyph');
    if (!panel) return;

    function setOpen(open) {
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open;
      if (glyph) glyph.textContent = open ? '−' : '+';
    }

    setOpen(false);
    trigger.addEventListener('click', function () {
      setOpen(trigger.getAttribute('aria-expanded') !== 'true');
    });
  });

  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      navLinks.classList.toggle('is-open', !open);
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
      }
    });
  }
})();
