/* ============================================
   갈매기대도 랜딩페이지 - script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------------------------
     GNB: 스크롤 시 배경 변경
     ------------------------------------------- */
  var gnb = document.getElementById('gnb');

  function updateGnb() {
    if (window.scrollY > 100) {
      gnb.classList.add('scrolled');
    } else {
      gnb.classList.remove('scrolled');
    }
  }

  updateGnb();
  window.addEventListener('scroll', updateGnb);

  /* -------------------------------------------
     GNB: 메뉴 클릭 → smooth scroll
     ------------------------------------------- */
  document.querySelectorAll('.gnb-menu a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gnb-height')) || 64;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* -------------------------------------------
     모바일 GNB: 햄버거 메뉴
     ------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function () {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-menu-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';

      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gnb-height')) || 56;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* -------------------------------------------
     상차림: 탭 전환
     ------------------------------------------- */
  var tabBtns = document.querySelectorAll('.tab-btn');
  var menuSliders = document.querySelectorAll('[data-tab-content]');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tab = this.dataset.tab;

      tabBtns.forEach(function (b) {
        b.classList.remove('active');
        b.classList.add('inactive');
      });
      this.classList.remove('inactive');
      this.classList.add('active');

      menuSliders.forEach(function (slider) {
        slider.style.display = slider.dataset.tabContent === tab ? 'flex' : 'none';
        slider.style.transform = 'translateX(0)';
      });

      // Reset arrows
      currentSlide = 0;
      updateArrows();
    });
  });

  /* -------------------------------------------
     상차림: 메뉴 카드 슬라이드
     ------------------------------------------- */
  var currentSlide = 0;
  var prevBtn = document.querySelector('.menu-arrow-prev');
  var nextBtn = document.querySelector('.menu-arrow-next');

  function getVisibleCards() {
    return window.innerWidth <= 768 ? 2 : 4;
  }

  function getActiveSlider() {
    var active = document.querySelector('[data-tab-content]:not([style*="display: none"])') ||
                 document.querySelector('[data-tab-content]:not([style*="display:none"])');
    return active;
  }

  function getTotalCards() {
    var slider = getActiveSlider();
    return slider ? slider.children.length : 4;
  }

  function getMaxSlide() {
    return Math.max(0, getTotalCards() - getVisibleCards());
  }

  function updateArrows() {
    if (prevBtn) prevBtn.classList.toggle('disabled', currentSlide <= 0);
    if (nextBtn) nextBtn.classList.toggle('disabled', currentSlide >= getMaxSlide());
  }

  function slideMenu(direction) {
    var max = getMaxSlide();
    currentSlide = Math.max(0, Math.min(max, currentSlide + direction));

    var slider = getActiveSlider();
    if (slider && slider.children.length > 0) {
      var card = slider.children[0];
      var cardWidth = card.offsetWidth;
      var gap = 20;
      slider.style.transform = 'translateX(-' + (currentSlide * (cardWidth + gap)) + 'px)';
    }
    updateArrows();
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { slideMenu(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { slideMenu(1); });
  updateArrows();

  /* -------------------------------------------
     문의하기 폼: 유효성 검증
     ------------------------------------------- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var agree = document.getElementById('agreeContact').checked;

      if (!name) {
        alert('성함을 입력해주세요.');
        document.getElementById('name').focus();
        return;
      }

      if (!phone) {
        alert('휴대폰번호를 입력해주세요.');
        document.getElementById('phone').focus();
        return;
      }

      if (!agree) {
        alert('개인정보처리방침에 동의해주세요.');
        return;
      }

      alert('문의가 접수되었습니다.');
      contactForm.reset();
    });
  }

  /* -------------------------------------------
     하단 문의 바: 간이 처리
     ------------------------------------------- */
  document.querySelectorAll('.btn-inquiry').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var bar = this.closest('.inquiry-bar');
      if (!bar) return;

      var inputs = bar.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]');
      var checkbox = bar.querySelector('input[type="checkbox"]');
      var nameVal = inputs[0] ? inputs[0].value.trim() : '';
      var phoneVal = inputs[1] ? inputs[1].value.trim() : '';

      if (!nameVal) {
        alert('성함을 입력해주세요.');
        if (inputs[0]) inputs[0].focus();
        return;
      }

      if (!phoneVal) {
        alert('휴대폰번호를 입력해주세요.');
        if (inputs[1]) inputs[1].focus();
        return;
      }

      if (checkbox && !checkbox.checked) {
        alert('개인정보처리방침에 동의해주세요.');
        return;
      }

      alert('문의가 접수되었습니다.');
      inputs.forEach(function (input) { input.value = ''; });
      if (checkbox) checkbox.checked = false;
    });
  });

  /* -------------------------------------------
     선택: AOS 스크롤 진입 효과 (fade-up)
     ------------------------------------------- */
  var animateElements = document.querySelectorAll(
    '.section-header, .brand-left, .brand-right, .why-nukki, .why-text, ' +
    '.difference-left, .difference-cards, .menu-card, .step-card, ' +
    '.cost-table-wrap, .contact-box'
  );

  animateElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animateElements.forEach(function (el) { observer.observe(el); });

});
