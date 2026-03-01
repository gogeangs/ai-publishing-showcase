/**
 * 갈매기대도 브랜드 랜딩페이지 - JavaScript
 *
 * 기능 목록:
 * 1. GNB 스크롤 시 배경색 변경
 * 2. 모바일 햄버거 메뉴 열기/닫기
 * 3. 상차림 탭 전환 (구이류 / 곁들임)
 * 4. 모바일 메뉴 클릭 시 닫기 + 스크롤
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ==========================================================
     1. GNB 스크롤 시 배경색 변경 (흰색 배경 + 그림자)
     ========================================================== */
  const gnb = document.getElementById('gnb');

  function handleGnbScroll() {
    if (window.scrollY > 50) {
      gnb.classList.add('scrolled');
    } else {
      gnb.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleGnbScroll, { passive: true });
  handleGnbScroll(); // 초기 상태 체크


  /* ==========================================================
     2. 모바일 햄버거 메뉴 열기/닫기
     ========================================================== */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  if (hamburgerBtn && mobileNav && mobileNavClose) {
    hamburgerBtn.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    mobileNavClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });

    // 모바일 메뉴 항목 클릭 시 닫기
    const mobileNavItems = mobileNav.querySelectorAll('.mobile-nav__item');
    mobileNavItems.forEach(function (item) {
      item.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }


  /* ==========================================================
     3. 상차림 탭 전환 (구이류 / 곁들임)
     ========================================================== */
  const menuTabs = document.querySelectorAll('.menu-tab');
  const grillSlide = document.getElementById('menu-slide-grill');
  const sideSlide = document.getElementById('menu-slide-side');

  menuTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      // 탭 활성 상태 변경
      menuTabs.forEach(function (t) {
        t.classList.remove('menu-tab--active');
        t.classList.add('menu-tab--inactive');
      });
      this.classList.remove('menu-tab--inactive');
      this.classList.add('menu-tab--active');

      // 슬라이드 전환
      var tabName = this.getAttribute('data-tab');
      if (tabName === 'grill') {
        grillSlide.style.display = 'flex';
        sideSlide.style.display = 'none';
      } else {
        grillSlide.style.display = 'none';
        sideSlide.style.display = 'flex';
      }
    });
  });

});
