/* ============================================
   갈매기대도 랜딩페이지 스크립트
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ----- 모바일 GNB 토글 ----- */
  const hamburger = document.getElementById('gnbHamburger');
  const moNavOverlay = document.getElementById('moNavOverlay');
  const moNavClose = document.getElementById('moNavClose');
  const moNavLinks = document.querySelectorAll('.mo-nav__link');

  function openMoNav() {
    moNavOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMoNav() {
    moNavOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMoNav);
  moNavClose.addEventListener('click', closeMoNav);
  moNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMoNav);
  });


  /* ----- GNB 스크롤 시 배경 ----- */
  const gnb = document.getElementById('gnb');

  function updateGnbBg() {
    if (window.scrollY > 100) {
      gnb.classList.remove('gnb--transparent');
    } else {
      gnb.classList.add('gnb--transparent');
    }
  }

  updateGnbBg();
  window.addEventListener('scroll', updateGnbBg, { passive: true });


  /* ----- GNB 활성 링크 (스크롤 위치 기반) ----- */
  const gnbLinks = document.querySelectorAll('.gnb__link');
  const sections = [];

  gnbLinks.forEach(function (link) {
    var target = link.getAttribute('href');
    if (target && target.startsWith('#')) {
      var el = document.querySelector(target);
      if (el) sections.push({ el: el, link: link });
    }
  });

  function updateActiveLink() {
    var scrollPos = window.scrollY + 120;
    var currentSection = null;

    sections.forEach(function (item) {
      if (item.el.offsetTop <= scrollPos) {
        currentSection = item;
      }
    });

    gnbLinks.forEach(function (link) {
      link.classList.remove('gnb__link--active');
    });

    if (currentSection) {
      currentSection.link.classList.add('gnb__link--active');
    }
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });


  /* ----- 메뉴 탭 전환 ----- */
  var tabBtns = document.querySelectorAll('.menu-tab__btn');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('menu-tab__btn--active'); });
      btn.classList.add('menu-tab__btn--active');
    });
  });


  /* ----- 하단바 표시/숨김 (히어로 아래에서 나타남) ----- */
  var bottomBar = document.getElementById('bottomBar');
  var hero = document.getElementById('hero');

  function updateBottomBar() {
    if (!hero || !bottomBar) return;
    var heroBottom = hero.offsetTop + hero.offsetHeight;
    if (window.scrollY > heroBottom - 200) {
      bottomBar.style.display = 'block';
    } else {
      bottomBar.style.display = 'none';
    }
  }

  bottomBar.style.display = 'none';
  window.addEventListener('scroll', updateBottomBar, { passive: true });
  updateBottomBar();


  /* ----- 문의 폼 간단 검증 ----- */
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var agree = document.getElementById('contactAgree');
      if (!agree.checked) {
        alert('개인정보처리방침에 동의해 주세요.');
        return;
      }
      alert('문의가 접수되었습니다. 감사합니다.');
    });
  }

});
