const skillBars = document.querySelectorAll('.skill-fill');
  if (skillBars.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-width') + '%';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    skillBars.forEach(bar => observer.observe(bar));
  }

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const tw = document.querySelector('.typewriter');
  if (tw && tw.getAttribute('data-phrases')) {
    const words = tw.getAttribute('data-phrases').split(',');
    let wi = 0, ci = 0, deleting = false;
    const type = () => {
      const current = words[wi];
      ci += deleting ? -1 : 1;
      tw.textContent = current.substring(0, ci);
      let delay = deleting ? 50 : 110;
      if (!deleting && ci === current.length) { delay = 1600; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 350; }
      setTimeout(type, delay);
    };
    type();
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        form.reset();
        setTimeout(() => success.classList.remove('show'), 3500);
      }
    });
  }
