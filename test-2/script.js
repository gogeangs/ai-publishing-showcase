/**
 * 갈매기대도 브랜드 랜딩페이지 스크립트
 *
 * 목차:
 * 1. 모바일 내비게이션 토글
 * 2. GNB 스크롤 투명/불투명 전환
 * 3. GNB 메뉴 클릭 시 스크롤 & 활성 표시
 * 4. 메뉴 탭 전환
 * 5. 문의 폼 기본 유효성 검증
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ================================
     1. 모바일 내비게이션 토글
     ================================ */
  var hamburger = document.getElementById('gnbHamburger');
  var moNav = document.getElementById('moNav');
  var moNavClose = document.getElementById('moNavClose');
  var moNavLinks = moNav.querySelectorAll('.mo-nav__link');

  function openMoNav() {
    moNav.classList.add('is-open');
    moNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMoNav() {
    moNav.classList.remove('is-open');
    moNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMoNav);
  moNavClose.addEventListener('click', closeMoNav);

  // 모바일 메뉴 링크 클릭 시 닫기
  moNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMoNav);
  });


  /* ================================
     2. GNB 스크롤 투명/불투명 전환
     ================================ */
  var gnb = document.getElementById('gnb');
  var hero = document.getElementById('hero');

  function updateGnbStyle() {
    if (!hero) return;
    var heroBottom = hero.offsetHeight - 100;
    if (window.scrollY < heroBottom) {
      gnb.classList.add('gnb--transparent');
    } else {
      gnb.classList.remove('gnb--transparent');
    }
  }

  updateGnbStyle();
  window.addEventListener('scroll', updateGnbStyle, { passive: true });


  /* ================================
     3. GNB 메뉴 클릭 시 활성 표시
     ================================ */
  var gnbLinks = document.querySelectorAll('.gnb__link');
  var sections = document.querySelectorAll('section[id]');

  // 스크롤에 따른 활성 메뉴 업데이트
  function updateActiveNav() {
    var scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        // PC GNB
        gnbLinks.forEach(function (link) {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('is-active');
          }
        });
        // 모바일 GNB
        moNavLinks.forEach(function (link) {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('is-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });


  /* ================================
     4. 메뉴 탭 전환
     ================================ */
  var tabBtns = document.querySelectorAll('.menu-tab__btn');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
    });
  });


  /* ================================
     5. 문의 폼 기본 유효성 검증
     ================================ */
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('cName').value.trim();
      var phone = document.getElementById('cPhone').value.trim();
      var checkbox = contactForm.querySelector('.contact-form__checkbox');

      if (!name) {
        alert('성함을 입력해주세요.');
        return;
      }
      if (!phone) {
        alert('휴대폰번호를 입력해주세요.');
        return;
      }
      if (!checkbox.checked) {
        alert('개인정보처리방침에 동의해주세요.');
        return;
      }

      alert('문의가 접수되었습니다. 감사합니다!');
      contactForm.reset();
    });
  }

});
