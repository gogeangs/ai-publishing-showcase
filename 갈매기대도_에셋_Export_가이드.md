# Figma 에셋 Export 가이드

## Export 방법

### Figma 데스크톱 앱에서 Export하기
1. Figma에서 해당 파일 열기: https://www.figma.com/design/Rsm420r5w1Q8ORRn0uFlIW
2. 좌측 레이어 패널에서 노드 ID로 검색하거나 직접 선택
3. 우측 패널 하단 **Export** 섹션에서 형식/배율 설정
4. **Export** 버튼 클릭

### 일괄 Export 팁
- 여러 에셋을 한 번에 선택 → `Ctrl+Shift+E` (일괄 Export 패널)
- SVG는 반드시 **Include "id" attribute** 체크 해제
- PNG는 **2x** 이상으로 Export (레티나 대응)

---

## 에셋 폴더 구조

```
assets/
├── images/          # 배경/사진 (JPG 또는 WebP)
├── svg/             # 로고, 벡터, 패턴
└── icons/           # 아이콘 (SVG)
```

---

## 1. 로고 / 브랜드 (→ `assets/svg/`)

| No | 파일명 | 노드 ID | Export 형식 | 사이즈 | 설명 |
|----|--------|---------|-----------|--------|------|
| 1 | `logo-horizontal-white.svg` | `16:847` | **SVG** | 321×64 | GNB 가로로고 (흰색) |
| 2 | `logo-horizontal-color.svg` | `8:881` | **SVG** | 324×64 | 브랜드 섹션 가로로고 (컬러/검정) |
| 3 | `logo-vertical.svg` | `3:1154` | **SVG** | 127×140 | 푸터 세로로고 |
| 4 | `favicon-80.svg` | `3:816` | **SVG** | 80×80 | 메인 비주얼 파비콘 |
| 5 | `favicon-64.svg` | `8:882` | **SVG** | 64×64 | 브랜드 섹션 파비콘 |
| 6 | `favicon.png` | `8:882` | **PNG 2x** | 128×128 | 브라우저 탭 파비콘 |

> **참고**: 로고가 마스크(clip-path) 구조인 경우, 노드를 선택한 뒤 **Outline Stroke** 후 SVG Export 하거나, 상위 프레임을 통째로 Export 하세요.

---

## 2. 배경 이미지 (→ `assets/images/`)

| No | 파일명 | 노드 ID | Export 형식 | 권장 사이즈 | 설명 |
|----|--------|---------|-----------|-----------|------|
| 7 | `hero-bg.jpg` | `3:85` 내부 배경 이미지 레이어 | **JPG (80%)** 또는 **WebP** | 1920px 이상 폭 | 메인 비주얼 배경 |
| 8 | `store-exterior.jpg` | `10:1069` | **JPG** 또는 **WebP** | 1073px 이상 폭 | 차별점 섹션 매장 외관 |
| 9 | `store-brand.jpg` | `8:875` | **JPG** 또는 **WebP** | 849px 이상 폭 | 브랜드 섹션 매장 사진 |
| 10 | `bg-food.jpg` | `10:955` 내부 배경 이미지 레이어 | **JPG** 또는 **WebP** | 1560px 이상 폭 | "왜 갈매기살인가?" 배경 |
| 11 | `galmaegi-nukki.png` | `10:958` | **PNG** (투명 배경) | 590×560 (2x→1180×1120) | 갈매기살 누끼 (투명) |
| 12 | `banner-left.jpg` | `18:980` | **JPG** 또는 **WebP** | 780px 이상 폭 | 중간 배너 좌측 |
| 13 | `banner-right.jpg` | `18:981` | **JPG** 또는 **WebP** | 780px 이상 폭 | 중간 배너 우측 |

---

## 3. 인증 / 후기 이미지 (→ `assets/images/`)

| No | 파일명 | 노드 ID | Export 형식 | 사이즈 | 설명 |
|----|--------|---------|-----------|--------|------|
| 14 | `cert-circle.jpg` | `20:808` | **JPG** 또는 **PNG** | 156×156 (2x→312×312) | 원형 인증 사진 |
| 15 | `baeknyeon-logo.jpg` | `19:796` | **PNG** (투명 가능) | 143×98 (2x→286×196) | 백년가게 로고 |
| 16 | `review-1.jpg` | `11:1315` 내부 이미지 | **JPG** | 380px 이상 폭 | 고객 후기 1 |
| 17 | `review-2.jpg` | `11:1316` 내부 이미지 | **JPG** | 380px 이상 폭 | 고객 후기 2 |
| 18 | `review-3.jpg` | `11:1317` 내부 이미지 | **JPG** | 380px 이상 폭 | 고객 후기 3 |
| 19 | `review-4.jpg` | `11:1318` 내부 이미지 | **JPG** | 380px 이상 폭 | 고객 후기 4 |
| 20 | `review-5.jpg` | `11:1319` 내부 이미지 | **JPG** | 380px 이상 폭 | 고객 후기 5 |

---

## 4. 메뉴 사진 (→ `assets/images/`)

| No | 파일명 | 노드 ID | Export 형식 | 사이즈 | 메뉴명 |
|----|--------|---------|-----------|--------|--------|
| 21 | `menu-dadocase.jpg` | `10:980` 내부 이미지 | **JPG** 또는 **WebP** | 290px 이상 (2x→580px) | 대도카세 |
| 22 | `menu-daefa.jpg` | `10:981` 내부 이미지 | **JPG** 또는 **WebP** | 290px 이상 | 통 대파 갈매기살 |
| 23 | `menu-raw.jpg` | `10:982` 내부 이미지 | **JPG** 또는 **WebP** | 290px 이상 | 생 갈매기살 |
| 24 | `menu-jumulluk.jpg` | `10:983` 내부 이미지 | **JPG** 또는 **WebP** | 290px 이상 | 주물럭 갈매기살 |

> **곁들임 탭 메뉴 사진**: 탭 전환 시 표시될 곁들임 메뉴 사진은 시안에 없으므로, 디자이너에게 별도 요청 필요

---

## 5. SVG 벡터 에셋 (→ `assets/svg/`)

| No | 파일명 | 노드 ID | Export 형식 | 사이즈 | 설명 |
|----|--------|---------|-----------|--------|------|
| 25 | `arch-text.svg` | `37:2090` | **SVG** | 386×100 | 아치형 "갈매기살의 새로운 기준" (KoreanTBSMR) |
| 26 | `brush-stroke.svg` | `8:382` | **SVG** | 510×181 | 붓터치 + "줄서는 맛집" |
| 27 | `pattern-tile.png` | `3:808` | **PNG** | 120×121 | 전통 패턴 타일 (반복 배경용) |
| 28 | `speech-bubble-tail.svg` | `20:803` | **SVG** | 45×33 | 말풍선 꼬리 삼각형 |
| 29 | `decoration-vector.svg` | `8:856` | **SVG** | 593×660 | 브랜드 섹션 장식 벡터 |
| 30 | `rarity-border.svg` | `10:964` | **SVG** | 326×64 | "단 0.3%의 희소성" 테두리 |
| 31 | `phone-mockup.svg` | `32:733` | **SVG** 또는 **PNG 2x** | 400×535 | 후기 폰 목업 프레임 |
| 32 | `pattern-box-bg.png` | `3:1364` 내부 패턴 | **PNG** | 1200px 폭 | 문의하기 외곽 패턴 배경 |
| 33 | `review-topbar-pattern.png` | `11:1307` | **PNG** | 1560×40 | 후기 상단 구분바 패턴 |

> **아치형 텍스트 주의**: `37:2090`을 선택하면 개별 글자 레이어가 포함됩니다. **반드시 프레임을 통째로 SVG Export** 하세요. 텍스트가 아웃라인 처리되어 있는지 확인하고, 아닌 경우 **Flatten(Ctrl+E)** 후 Export.

---

## 6. 아이콘 (→ `assets/icons/`)

### 6-1. 창업절차 아이콘 (10종)

모두 **SVG**, 64×64px로 Export

| No | 파일명 | 노드 ID | 아이콘 설명 |
|----|--------|---------|-----------|
| 34 | `step-01-inquiry.svg` | `10:1449` 내부 아이콘 레이어 | 문의접수 (문서+화살표) |
| 35 | `step-02-consult.svg` | `10:1281` 내부 아이콘 레이어 | 상담 (헤드셋) |
| 36 | `step-03-document.svg` | `10:1289` 내부 아이콘 레이어 | 정보공개서 (폴더) |
| 37 | `step-04-location.svg` | `10:1296` 내부 아이콘 레이어 | 상권분석 (지도핀) |
| 38 | `step-05-contract.svg` | `10:1303` 내부 아이콘 레이어 | 계약체결 (서명문서) |
| 39 | `step-06-interior.svg` | `10:1380` 내부 아이콘 레이어 | 인테리어 (설계도+연필) |
| 40 | `step-07-education.svg` | `10:1388` 내부 아이콘 레이어 | 교육 (학교+책) |
| 41 | `step-08-preview.svg` | `10:1396` 내부 아이콘 레이어 | 가오픈 점검 (사람들+별) |
| 42 | `step-09-open.svg` | `10:1404` 내부 아이콘 레이어 | 정식 오픈 (OPEN 간판) |
| 43 | `step-10-manage.svg` | `10:1412` 내부 아이콘 레이어 | 운영 관리 (사람+톱니바퀴) |

> **Export 방법**: 각 step 카드를 더블클릭하여 내부 아이콘 레이어(Headset, SubmitDocument 등)만 선택 → SVG Export

### 6-2. UI 아이콘

모두 **SVG**로 Export

| No | 파일명 | 노드 ID | 사이즈 | 설명 |
|----|--------|---------|--------|------|
| 44 | `icon-phone.svg` | `3:639` | 11×12 | 하단바 전화 아이콘 |
| 45 | `icon-check-sm.svg` | `3:653` | 15×15 | 하단바 체크 (흰색) |
| 46 | `icon-check-lg.svg` | `3:1440` | 20×20 | 문의폼 체크 (흰색) |
| 47 | `icon-arrow-left.svg` | `10:986` | 50×50 (전체) 또는 48×22 (화살표만) | 메뉴 슬라이드 좌 |
| 48 | `icon-arrow-right.svg` | `10:987` | 50×50 (전체) 또는 48×22 (화살표만) | 메뉴 슬라이드 우 |
| 49 | `icon-dropdown.svg` | `3:1386` | 20×20 | 문의폼 셀렉트 화살표 |
| 50 | `icon-instagram.svg` | `3:1103` | 25×25 | 푸터 인스타그램 |
| 51 | `icon-hamburger.svg` | 모바일 GNB(`33:791`) 내부 | 24×24 (추정) | 모바일 햄버거 메뉴 |
| 52 | `icon-close.svg` | `3:167` 내부 X 버튼 | 24×24 (추정) | 모바일 메뉴 닫기 |

---

## 7. Export 설정 요약

| 형식 | 대상 | 설정 |
|------|------|------|
| **SVG** | 로고, 아이콘, 벡터 에셋 | Outline Text: ON, Include "id": OFF |
| **JPG** | 배경 사진, 메뉴/후기 사진 | Quality: 80~90%, 2x 배율 |
| **WebP** | JPG 대체 (용량 절약) | Quality: 80%, 2x 배율 |
| **PNG** | 투명 배경 필요한 에셋 (누끼, 패턴) | 2x 배율 |

---

## 8. Export 체크리스트

```
로고/브랜드 (6종)
[ ] logo-horizontal-white.svg
[ ] logo-horizontal-color.svg
[ ] logo-vertical.svg
[ ] favicon-80.svg
[ ] favicon-64.svg
[ ] favicon.png

배경 이미지 (7종)
[ ] hero-bg.jpg
[ ] store-exterior.jpg
[ ] store-brand.jpg
[ ] bg-food.jpg
[ ] galmaegi-nukki.png
[ ] banner-left.jpg
[ ] banner-right.jpg

인증/후기 (7종)
[ ] cert-circle.jpg
[ ] baeknyeon-logo.jpg (또는 .png)
[ ] review-1.jpg ~ review-5.jpg

메뉴 사진 (4종+)
[ ] menu-dadocase.jpg
[ ] menu-daefa.jpg
[ ] menu-raw.jpg
[ ] menu-jumulluk.jpg
[ ] (곁들임 탭 메뉴 — 디자이너 별도 요청)

SVG 벡터 (9종)
[ ] arch-text.svg
[ ] brush-stroke.svg
[ ] pattern-tile.png
[ ] speech-bubble-tail.svg
[ ] decoration-vector.svg
[ ] rarity-border.svg
[ ] phone-mockup.svg
[ ] pattern-box-bg.png
[ ] review-topbar-pattern.png

창업절차 아이콘 (10종)
[ ] step-01 ~ step-10 (.svg)

UI 아이콘 (9종)
[ ] icon-phone.svg
[ ] icon-check-sm.svg
[ ] icon-check-lg.svg
[ ] icon-arrow-left.svg
[ ] icon-arrow-right.svg
[ ] icon-dropdown.svg
[ ] icon-instagram.svg
[ ] icon-hamburger.svg
[ ] icon-close.svg
```

**총 52종 에셋**
