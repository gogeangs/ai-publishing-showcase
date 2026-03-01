/* ========================================
   AI 퍼블리싱 쇼케이스 - 인터랙션
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 모바일 메뉴 ---------- */
  const hamburger = document.getElementById('scHamburger');
  const mobileMenu = document.getElementById('scMobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  /* ---------- GNB 스크롤 스타일 ---------- */
  const gnb = document.querySelector('.sc-gnb');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      gnb.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
      gnb.style.background = 'rgba(15, 23, 42, 0.95)';
    }
  });

  /* ---------- 탭 전환 (라이브 비교) ---------- */
  const testData = {
    1: { similarity: '~35%', quality: '91/100', sections: '12/12', assets: '0개', interactions: '3개' },
    2: { similarity: '~30%', quality: '85/100', sections: '10-11/12', assets: '0개', interactions: '5개' },
    3: { similarity: '~65%', quality: '88/100', sections: '11/12', assets: '32개', interactions: '5개' },
    4: { similarity: '70-75%', quality: '93/100', sections: '12/12', assets: '30개', interactions: '11개' }
  };

  const tabs = document.querySelectorAll('.sc-tab');
  const frames = document.querySelectorAll('.sc-compare-frame');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const testNum = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      frames.forEach(f => f.classList.remove('active'));
      const activeFrame = document.querySelector(`.sc-compare-frame[data-frame="${testNum}"]`);
      if (activeFrame) activeFrame.classList.add('active');

      // 통계 업데이트
      const data = testData[testNum];
      if (data) {
        updateStat('statSimilarity', data.similarity);
        updateStat('statQuality', data.quality);
        updateStat('statSections', data.sections);
        updateStat('statAssets', data.assets);
        updateStat('statInteractions', data.interactions);
      }
    });
  });

  function updateStat(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    const valueEl = el.querySelector('.sc-stat-value');
    if (valueEl) {
      valueEl.style.opacity = '0';
      valueEl.style.transform = 'translateY(5px)';
      setTimeout(() => {
        valueEl.textContent = value;
        valueEl.style.opacity = '1';
        valueEl.style.transform = 'translateY(0)';
      }, 150);
    }
  }

  // stat-value 전환 애니메이션을 위한 스타일 적용
  document.querySelectorAll('.sc-stat-value').forEach(el => {
    el.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
  });

  /* ---------- 스크롤 페이드인 ---------- */
  const fadeEls = document.querySelectorAll('.fade-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeEls.forEach(el => fadeObserver.observe(el));

  /* ---------- 숫자 카운트업 ---------- */
  const counterEls = document.querySelectorAll('.sc-metric-number');
  let counterAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterAnimated) {
        counterAnimated = true;
        animateCounters();
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  counterEls.forEach(el => counterObserver.observe(el));

  function animateCounters() {
    counterEls.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1500;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.round(target * eased);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  /* ---------- 바 차트 애니메이션 ---------- */
  const barFills = document.querySelectorAll('.sc-bar-fill');

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.sc-bar-fill');
        fills.forEach(fill => {
          const width = fill.dataset.width;
          fill.style.setProperty('--bar-width', width + '%');
          setTimeout(() => fill.classList.add('animated'), 100);
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.sc-bar-group').forEach(group => {
    barObserver.observe(group);
  });

  /* ---------- 부드러운 스크롤 (GNB 높이 보정) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const gnbHeight = 64;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - gnbHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
