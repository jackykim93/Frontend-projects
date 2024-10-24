## 여행 정보 사이트를 구현한 개인 프로젝트
# "Koala Travels" 

React 기반의 플랫폼으로, 여행지를 탐색하고 주요 정보를 확인하며 호텔 및 항공사와 같은 유용한 리소스에 접근할 수 있는 웹 애플리케이션입니다.

## 프로젝트 개요
이 프로젝트는 React로 제작된 여행 정보 웹 애플리케이션입니다. 여행은 많은 사람들에게 즐거운 경험이지만, 여행 계획을 세우는 과정은 복잡하고 스트레스가 될 수 있습니다. 특히, 호텔 예약이나 항공편 정보, 국가에 대한 기본 정보를 잘 모르는 경우 더 어려움을 겪을 수 있습니다. 이러한 문제를 해결하고, 여행 준비를 조금이라도 더 편리하게 돕기 위해 Koala Travels를 제작했습니다. 이 앱은 사용자가 여행 정보를 쉽게 찾아보고, 필요한 리소스를 빠르게 확인할 수 있도록 도와줍니다.

## 주요 기능

- 인터랙티브 지도: 지도의 국가 위에 마우스를 올리면 각국의 수도와 통화 같은 주요 정보를 표시합니다.
- 추천 여행지: Swiper 기능을 통해 추천 여행지를 쉽게 탐색할 수 있습니다.
- 홍보 영상: 추천 여행지 이미지를 클릭하면 해당 국가의 홍보 영상을 시청할 수 있습니다.
- 직접 링크: 호텔 및 항공사 웹사이트로 바로 연결되는 링크를 제공합니다.
- 네비게이션: Navbar를 통해 애플리케이션의 다른 섹션으로 쉽게 이동할 수 있습니다.

## 스택
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
- ![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)
- ![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)

## Package Managers
- ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)

## Modules
- npx create-react-app . -> 해당 폴더에 React 설치
- npm install react react-dom
- npm install react-icons --save -> 직관적인 아이콘을 제공하는 라이브러리
- npm install swiper -> 부드럽게 슬라이드할 수 있도록 지원
- npm install highcharts highcharts-react-official -> 데이터 시각화를 위한 라이브러리
- npm install react-scroll -> 섹션 간 부드러운 스크롤을 지원하는 모듈
- npm install react-router-dom -> 페이지 간 원할한 네비게이션 관리

### 메인 페이지
- ![Frontpage](./public/Koala-travels%20frontpage.png)

### 추천 여행지 섹션
- ![Swiper function](./public/Koala-travels%20swiper%20기능.png)

### 유튜브 영상 
- ![Youtube onclick demand](./public/Koala-travels%20영상.png)

## 설치

1. 해당 repository-url git clone
2. cd react-travel-page
3. $ npm install

## 실행

react-travle-page에서 $ npm run start
http://localhost:3000 들어가면 앱이 브라우저에 실행됩니다 