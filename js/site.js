(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'read-progress';
    document.body.appendChild(bar);
    var article = document.querySelector('.prose .container') || document.querySelector('.prose');
    if (!article) return;
    function update() {
      var total = article.offsetHeight - window.innerHeight;
      var scrolled = window.scrollY - article.offsetTop + window.innerHeight * 0.1;
      var pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
      bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function initReveal() {
    var targets = document.querySelectorAll('.zone, .product-card');
    if (!targets.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.classList.add('is-visible'); });
      return;
    }
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (t) { observer.observe(t); });
  }

  function initQuickNav() {
    var nav = document.querySelector('.quick-nav');
    if (!nav) return;
    var links = nav.querySelectorAll('a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var sections = [];
    links.forEach(function (link) {
      var section = document.getElementById(link.getAttribute('href').slice(1));
      if (section) sections.push({ link: link, section: section });
    });
    if (!sections.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = sections.filter(function (s) { return s.section === entry.target; })[0];
        if (match && entry.isIntersecting) {
          sections.forEach(function (s) { s.link.classList.remove('active'); });
          match.link.classList.add('active');
        }
      });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(function (s) { observer.observe(s.section); });

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.getElementById(link.getAttribute('href').slice(1));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        history.pushState(null, '', link.getAttribute('href'));
      });
    });
  }

  function initBackToTop() {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Back to top');
    btn.textContent = '↑';
    document.body.appendChild(btn);
    function toggle() {
      btn.classList.toggle('is-visible', window.scrollY > 600);
    }
    window.addEventListener('scroll', toggle, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    toggle();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initProgressBar();
    initReveal();
    initQuickNav();
    initBackToTop();
  });
})();
