/**
 * 마라섬 프랜차이즈 창업문의 랜딩페이지
 * Interactions & Behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  initGNB();
  initMobileMenu();
  initTopButton();
  initBottomBar();
  initMenuSlider();
  initInteriorTabs();
  initStorePagination();
  initInquiryForm();
  initBottomBarForm();
  initScrollAnimations();
  initCountUp();
  initCostStamp();
});

/* ========================================
   GNB - 스크롤 시 배경 변경 + 메뉴 클릭 smooth scroll
   ======================================== */
function initGNB() {
  const gnb = document.getElementById('gnb');
  const links = document.querySelectorAll('.gnb-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      gnb.style.background = 'rgba(17,17,17,0.95)';
      gnb.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';
    } else {
      gnb.style.background = 'rgba(17,17,17,0.8)';
      gnb.style.boxShadow = '0 4px 16px rgba(0,0,0,0.29)';
    }
  });

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/* ========================================
   모바일 GNB - 햄버거 메뉴
   ======================================== */
function initMobileMenu() {
  const btn = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileMenuClose');
  const links = menu.querySelectorAll('.mobile-menu-link');

  function openMenu() {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    });
  });
}

/* ========================================
   Top 버튼 - 스크롤 투 탑
   ======================================== */
function initTopButton() {
  const btn = document.getElementById('topBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ========================================
   하단 문의바 - sticky 고정, 푸터에서 숨김
   ======================================== */
function initBottomBar() {
  const bar = document.getElementById('bottomBar');
  const footer = document.querySelector('.footer');

  window.addEventListener('scroll', () => {
    if (!footer) return;
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
      bar.classList.add('hidden');
    } else {
      bar.classList.remove('hidden');
    }
  });
}

/* ========================================
   메뉴 슬라이더
   ======================================== */
function initMenuSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;

  const items = track.querySelectorAll('.slider-item');
  const prevBtn = document.getElementById('menuPrev');
  const nextBtn = document.getElementById('menuNext');
  const nameEl = document.getElementById('sliderActiveName');
  let activeIndex = Array.from(items).findIndex(i => i.classList.contains('active'));
  if (activeIndex < 0) activeIndex = 0;

  function updateSlider() {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === activeIndex);
    });
    if (nameEl && items[activeIndex]) {
      nameEl.textContent = items[activeIndex].dataset.name || '';
    }
  }

  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % items.length;
    updateSlider();
  });
}

/* ========================================
   인테리어 탭 전환
   ======================================== */
function initInteriorTabs() {
  const tabs = document.querySelectorAll('.interior-tab');
  const gallery = document.getElementById('interiorGallery');
  if (!gallery) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      gallery.querySelectorAll('.interior-images').forEach(g => {
        g.classList.toggle('hidden', g.dataset.group !== group);
      });
    });
  });
}

/* ========================================
   가맹점찾기 페이지네이션
   ======================================== */
function initStorePagination() {
  const prevBtn = document.getElementById('storePrev');
  const nextBtn = document.getElementById('storeNext');
  const pageEl = document.getElementById('storePage');
  if (!pageEl) return;

  let page = 1;
  const maxPage = 10;

  function update() {
    pageEl.textContent = page;
  }

  prevBtn.addEventListener('click', () => {
    if (page > 1) {
      page--;
      update();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (page < maxPage) {
      page++;
      update();
    }
  });
}

/* ========================================
   창업문의 폼 유효성 검증
   ======================================== */
function initInquiryForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // 필수: 성함
    const name = form.querySelector('[name="name"]');
    if (!name.value.trim()) {
      name.classList.add('error');
      valid = false;
    } else {
      name.classList.remove('error');
    }

    // 필수: 연락처
    const phone = form.querySelector('[name="phone"]');
    if (!phone.value.trim()) {
      phone.classList.add('error');
      valid = false;
    } else {
      phone.classList.remove('error');
    }

    // 필수: 개인정보동의
    const privacy = form.querySelector('[name="privacy"]');
    if (!privacy.checked) {
      privacy.closest('.checkbox-label').style.color = 'var(--color-red)';
      valid = false;
    } else {
      privacy.closest('.checkbox-label').style.color = '';
    }

    if (valid) {
      alert('창업문의가 접수되었습니다. 감사합니다!');
      form.reset();
    } else {
      alert('필수 항목을 입력해주세요.');
    }
  });
}

/* ========================================
   하단 문의바 간단 폼
   ======================================== */
function initBottomBarForm() {
  const form = document.getElementById('bottomBarForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="bName"]');
    const phone = form.querySelector('[name="bPhone"]');
    const agree = form.querySelector('[name="bAgree"]');

    let valid = true;

    if (!name.value.trim()) {
      name.style.borderColor = 'var(--color-red)';
      valid = false;
    } else {
      name.style.borderColor = '';
    }

    if (!phone.value.trim()) {
      phone.style.borderColor = 'var(--color-red)';
      valid = false;
    } else {
      phone.style.borderColor = '';
    }

    if (!agree.checked) {
      valid = false;
    }

    if (valid) {
      alert('문의가 접수되었습니다. 감사합니다!');
      form.reset();
    } else {
      alert('이름, 연락처, 동의를 확인해주세요.');
    }
  });
}

/* ========================================
   스크롤 진입 효과 (fade-up) — IntersectionObserver
   ======================================== */
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.brand, .sales-banner, .report, .profit-section, .myfranchise, ' +
    '.donut-section, .sns-section, .menu-section, .conversion-section, ' +
    '.topping-section, .multistore-section, .interior-section, ' +
    '.cost-section, .process-section, .store-section, .inquiry-section'
  );

  targets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ========================================
   숫자 카운트업 애니메이션
   ======================================== */
function initCountUp() {
  const counters = document.querySelectorAll('.countup');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.done) {
        entry.target.dataset.done = 'true';
        const target = parseInt(entry.target.dataset.target, 10);
        animateNumber(entry.target, 0, target, 1500);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));

  // Text-based countup (e.g. "22억 3,242")
  const textCounters = document.querySelectorAll('.countup-text');
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.done) {
        entry.target.dataset.done = 'true';
        const targetText = entry.target.dataset.target;
        setTimeout(() => {
          entry.target.textContent = targetText;
        }, 800);
      }
    });
  }, { threshold: 0.5 });

  textCounters.forEach(el => textObserver.observe(el));
}

function animateNumber(el, start, end, duration) {
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * eased);
    el.textContent = current.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

/* ========================================
   창업비용 "전액면제" 스탬프 애니메이션
   ======================================== */
function initCostStamp() {
  const stamp = document.getElementById('costStamp');
  if (!stamp) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          stamp.classList.add('visible');
        }, 500);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(stamp.parentElement);
}
