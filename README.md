## 자기설계학기 프로젝트 kscold의 바램 블로그

## 목차

- [프로젝트 소개](#-프로젝트-소개)
- [설치 및 구동](#-설치-및-구동)
- [프로젝트 설명](#-프로젝트-설명)
- [화면 정의서](#-화면-정의서)
- [만든이](#-만들이)
- [느낀점](#-느낀점)

## ❓ 프로젝트 소개

상명대학교 자기설계학기 전공 과목으로 React와 Node.js(Express)를 활용하여 진행한 사이드 프로젝트이며 개인 기술 블로그의 기능과 여러 시도해보고 싶은 기술을 적용시켜보기 위해 개발한 프로젝트이다.
이 프로젝트는 프론트엔드와 백엔드 모두를 다루며, 실시간 통신 기능을 포함하고 있다.

[자기설계학기 Repository](https://github.com/kscold/Self-design-major)이며 [Git-Hub Projects](https://github.com/users/kscold/projects/5) 기능을 적극활용하여 Issue를 열고 이를 기준으로 Commit하는 전략을 사용했다.
동시에 자바스크립트를 정리한 문법은 kscold.site로 배포했다.

## 🙋‍♀️ 설치 및 구동

**1. Clone the Repository**

**2. Move the Directory**

- FE 및 BE 디렉토리로 이동한다.

**3. Install the npm | yarn**

```bash
$ npm install or yarn intstall
```

**4. Start the npm | yarn & project**


```bash
$ npm start or yarn start
```

## 🛠 프로젝트 설명

- ### 1. 폴더 구조

 #### FrontEnd

  ```bash
    React
    ┣ public
    ┃ ┣ favicon.ico
    ┃ ┣ index.html
    ┃ ┣ logo192.png
    ┃ ┣ logo512.png
    ┃ ┣ manifest.json
    ┃ ┗ robots.txt
    ┣ src
    ┃ ┣ api
    ┃ ┃ ┗ index.js
    ┃ ┣ assets
    ┃ ┃ ┣ images
    ┃ ┃ ┃ ┣ join.png
    ┃ ┃ ┃ ┣ login.png
    ┃ ┃ ┃ ┣ logo.png
    ┃ ┃ ┃ ┣ profile.jpg
    ┃ ┃ ┃ ┗ video.mp4
    ┃ ┃ ┗ Poppin.ttf
    ┃ ┣ components
    ┃ ┃ ┣ modals
    ┃ ┃ ┃ ┣ AlertModal.jsx
    ┃ ┃ ┃ ┗ LoginStateModal.jsx
    ┃ ┃ ┣ AdminChatList.jsx
    ┃ ┃ ┣ ChatWindow.jsx
    ┃ ┃ ┣ CheckToken.jsx
    ┃ ┃ ┣ GptChatRoom.jsx
    ┃ ┃ ┣ Loading.jsx
    ┃ ┃ ┗ UserChatRoom.jsx
    ┃ ┣ hooks
    ┃ ┃ ┗ useCheckToken.jsx
    ┃ ┣ layout
    ┃ ┃ ┣ Layout.jsx
    ┃ ┃ ┣ Nav.jsx
    ┃ ┃ ┣ SideBar.jsx
    ┃ ┃ ┗ SideBarItem.jsx
    ┃ ┣ page
    ┃ ┃ ┣ auth
    ┃ ┃ ┃ ┣ Login.jsx
    ┃ ┃ ┃ ┣ Register.jsx
    ┃ ┃ ┃ ┗ index.jsx
    ┃ ┃ ┣ coding
    ┃ ┃ ┃ ┣ CodingPageDetail.jsx
    ┃ ┃ ┃ ┣ CodingPageList.jsx
    ┃ ┃ ┃ ┣ CodingPagePostCreate.jsx
    ┃ ┃ ┃ ┣ CodingPagePostUpdate.jsx
    ┃ ┃ ┃ ┣ CodingPageSidebarCreate.jsx
    ┃ ┃ ┃ ┣ index.jsx
    ┃ ┃ ┃ ┗ quillSetting.js
    ┃ ┃ ┣ info
    ┃ ┃ ┃ ┗ index.jsx
    ┃ ┃ ┣ life
    ┃ ┃ ┃ ┗ index.jsx
    ┃ ┃ ┣ main
    ┃ ┃ ┃ ┗ index.jsx
    ┃ ┃ ┣ photo
    ┃ ┃ ┃ ┗ index.jsx
    ┃ ┣ redux
    ┃ ┃ ┣ coding.js
    ┃ ┃ ┣ index.js
    ┃ ┃ ┗ user.js
    ┃ ┣ router
    ┃ ┃ ┣ codingRouter.js
    ┃ ┃ ┗ index.js
    ┃ ┣ scss
    ┃ ┃ ┣ components
    ┃ ┃ ┃ ┣ _alertmodal.scss
    ┃ ┃ ┃ ┣ _chatwindow.scss
    ┃ ┃ ┃ ┣ _loding.scss
    ┃ ┃ ┃ ┗ _loginstatemodal.scss
    ┃ ┃ ┣ section
    ┃ ┃ ┃ ┣ _coding.scss
    ┃ ┃ ┃ ┣ _info.scss
    ┃ ┃ ┃ ┣ _layout.scss
    ┃ ┃ ┃ ┣ _login.scss
    ┃ ┃ ┃ ┣ _main.scss
    ┃ ┃ ┃ ┣ _nav.scss
    ┃ ┃ ┃ ┗ _sidebar.scss
    ┃ ┃ ┣ setting
    ┃ ┃ ┃ ┗ _common.scss
    ┃ ┃ ┗ style.scss
    ┃ ┣ App.jsx
    ┃ ┣ index.jsx
    ┃ ┣ menuData.json
    ┃ ┣ postData.json
    ┃ ┣ postDetailData.json
    ┃ ┣ reportWebVitals.js
    ┃ ┣ setupProxy.js
    ┃ ┗ setupTests.js
    ┣ .gitignore
    ┣ .prettierrc
    ┣ package.json
    ┗ yarn.lock
  ```

  #### BackEnd

  ```bash
    Node
    ┣ config
    ┃ ┗ config.json
    ┣ controllers
    ┃ ┣ authController.js
    ┃ ┣ chatController.js
    ┃ ┣ condingPageController.js
    ┃ ┗ userController.js
    ┣ middlewares
    ┃ ┗ index.js
    ┣ models
    ┃ ┣ codingPost.js
    ┃ ┣ codingPostSidebar.js
    ┃ ┣ hashtag.js
    ┃ ┣ index.js
    ┃ ┗ user.js
    ┣ passport
    ┃ ┣ index.js
    ┃ ┗ localStrategy.js
    ┣ routes
    ┃ ┣ chat.js
    ┃ ┣ codingPage.js
    ┃ ┗ user.js
    ┣ schemas
    ┃ ┣ chat.js
    ┃ ┣ index.js
    ┃ ┗ user.js
    ┣ services
    ┃ ┣ codingPageService.js
    ┃ ┗ userService.js
    ┣ uploads
    ┣ .env
    ┣ .prettierrc
    ┣ app.js
    ┣ package.json
    ┗ yarn.lock
  ```


   <hr/>

  ### 2. 프로젝트 폴더 구조 설명

  FrontEnd와 BackEnd의 폴더 구조를 명확히 분리했다. FrontEnd는 React를 사용하여 개발하고, BackEnd는 Node.js(Express)를 사용하여 API 호출 용도로만 사용하도록 했다.
  보안성을 위해 환경 변수 파일(.env)을 사용하여 민감한 정보를 보호했다.

  #### FrontEnd

  React 기반으로 개발되었다.  

  - public/: React 앱의 기본 HTML 파일과 리소스들이 위치한다.
  -	api/: API 호출을 담당하는 파일들이 모여 있는 폴더이다.(axios 설정)
  -	assets/: 이미지, 폰트 등의 정적 리소스가 저장되는 폴더이다.
  -	components/: 페이지에 상관없이 주로 공통적으로 React 컴포넌트들이 위치하는 폴더이다.
  -	hooks/: React custom hook 함수들이 있는 폴더이다.
  -	layout/: 전체 레이아웃 관련 컴포넌트들이 위치하는 폴더이다.
  -	page/: 페이지 컴포넌트들이 위치하는 폴더이다.(실제로 조립되는 부분이다.)
  -	redux/: Redux 관련 파일들이 위치하는 폴더이다.(Duck 타입을 사용하였다.)
  -	router/: React Router 관련 파일들이 위치하는 폴더이다.
  -	scss/: SCSS 스타일 시트 파일들이 위치하는 폴더이다.
  -	App.jsx, index.jsx: React 애플리케이션의 진입점 파일이다.

  #### BackEnd

  Node.js(Express) 기반으로 개발되었다.
  스프링의 MVC 패턴을 모방했다.

  -	config/: 프로젝트 설정 파일들이 모여 있는 폴더이다.(시퀄라이즈 DB 설정이 있다.)
  -	controllers/: 컨트롤러들이 위치하는 폴더이다.
  -	middlewares/: 미들웨어들이 위치하는 폴더이다.
  -	models/: MySQL 데이터베이스 모델들이 정의된 폴더이다.
  -	passport/: 인증 관련 Passport 모듈 설정 파일들이 위치하는 폴더이다.
  -	routes/: 라우팅 관련 파일들이 위치하는 폴더이다.
  -	schemas/: MongoDB 데이터베이스 스키마 정의 파일들이 위치하는 폴더이다.
  - services/: 비즈니스 로직을 담당하는 서비스 파일들이 위치하는 폴더이다.
  - uploads/: 업로드된 파일들이 저장되는 폴더이다.(훗날 S3 분기 포인트이다.)
  - .env: 환경 변수 설정 파일이다.
  - app.js: Express 애플리케이션의 진입점 파일이다.

   <hr/>

  ### 3. 사용 기술

  <div>
           <h3>Frontend</h3>
           <table>
               <thead>
                   <tr>
                       <th><img src="https://img.shields.io/badge/React-61DBFB?style=flat-square&logo=React&logoColor=white"/></th>
                       <th><img src="https://img.shields.io/badge/Axios-00CCFF?style=flat-square&logo=axios&logoColor=white"/></th>
                       <th><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/></th>
                       <th><img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></th>
                   </tr>
               </thead>
           </table>
           <h3>Backend</h3>
           <table>
               <thead>
                   <tr>
                       <th><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></th>
                       <th><img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/></th>
                       <th><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/></th>
                       <th><img src="https://img.shields.io/badge/OpenAI-00AAFF?style=flat-square&logo=OpenAI&logoColor=white"/></th>
                   </tr>
               </thead>
           </table>
           <h3>DataBase</h3>
           <table>
               <thead>
                   <tr>
                       <th><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/></th>
                       <th><img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/></th>
                   </tr>
               </thead>
           </table>
  </div>

  <hr/>

 ### 4. 상세 기술 사용 방법(버전 1.0.0)
  
  #### FrontEnd
  
  **메인페이지 디자인 강조**
  
  -	배경 동영상 사용: src/assets 폴더를 만들어 최적화된 동영상을 저장하고, 이를 <video> 태그를 활용하여 메인 페이지의 배경으로 사용했다.

  **SCSS 적극 활용**

  -	동적 CSS 컴파일: SCSS의 @import 문법을 사용하여 동적으로 CSS를 컴파일했다.
	-	반응형 디자인: 최대한의 반응형 디자인을 위해 vh와 vw 단위를 사용했다.
	-	애니메이션 효과: 로그인/회원가입 페이지에서 동적 전환 애니메이션 효과를 구현했다.

  **로그인 검증 및 전역 상태 관리**

  - BackEnd 로그인 검증: 로그인 검증을 위해 쿠키에 저장된 accessToken을 사용했다.
  - Redux 상태 관리: Redux를 사용하여 로그인 상태를 관리하고, 로그인 상태에 따라 채팅 모달 구현 및 사이드바 생성 감지를 구현했다.

  **로그인 감지 및 사용자 역할**
  
  - Redux를 사용하여 로그인 정보를 저장하고, 로그인 상태에 따라 채팅 모달이 생기도록 했다. Admin 역할의 사용자는 채팅방을 선택하고 채팅할 수 있으며, 일반 사용자는 Admin과만 채팅할 수 있도록 UI를 분기 처리했다.

  **트리구조 카테고리 기반의 기술 블로그 페이지 개발**

  -	트리 구조 렌더링: React 컴포넌트의 재귀 호출을 통해 트리 구조의 카테고리를 렌더링했다. 이를 통해 최대 5레벨의 깊이까지 카테고리를 계층적으로 표시할 수 있게 구현했다.

  **글 작성 인터페이스**

  -	풍부한 글 작성 지원: 코드 블록과 Markdown 문법을 지원하는 React-Quill과 Markdown 에디터를 사용하여, 관리자가 더욱 풍부하고 형식화된 글을 작성할 수 있도록 구현했다.

  **글 작성 중 자유로운 이미지 삽입 기능**

  - 이미지 업로드: 글 작성 중 언제든 이미지를 삽입할 수 있도록, multipart/form-data 형식을 사용한 이미지 업로드 API를 구현했다.
	-	이미지 삽입: 서버에 업로드된 이미지의 URL을 반환 받아 글에 동적으로 이미지를 삽입할 수 있도록 했다.
	-	향후 확장성: 향후 AWS S3와의 연동을 고려하여 API를 설계했다. 이를 통해 확장성과 유연성을 확보하고, 이미지 저장소를 쉽게 확장할 수 있도록 했다.

  **실시간 채팅 기능**

  -	Socket.io 사용: 백엔드에서 socket.io를 사용하여 만든 실시간 채팅 기능을 위해 프론트엔드에서는 socket.io-client 라이브러리를 사용했다.
  
  **react-router-dom 라이브러리의 6.4 버전 적극 도입**
	-	페이지 라우팅: 최신 react-router-dom 라이브러리의 6.4 버전을 사용하여 객체 방식의 라우팅 문법을 적용했다. 특정 페이지(특히 coding 페이지)의 라우팅 URL 패스를 children으로 분기하여 세세하게 컴포넌트를 적용할 수 있도록 구현했다.
 
  
  #### BackEnd

  **Node.js와 Express 사용**

  -	API 서버 구현: Node.js와 Express를 사용하여 API 서버를 구현했다. 이를 통해 클라이언트와 서버 간의 데이터 통신을 원활하게 처리했다.

  **Sequelize를 통한 MySQL 연결**

  -	데이터베이스 설정: Sequelize를 ORM으로 사용하여 MySQL 데이터베이스와의 연결을 설정했다. 이를 통해 데이터베이스와의 상호작용을 객체지향적으로 처리할 수 있게 했다.
	-	모델 정의: Sequelize를 사용하여 데이터베이스의 테이블과 연관된 모델을 정의하고, 이를 통해 데이터의 저장, 조회, 수정, 삭제 기능을 구현했다.
	-	테이블 관계 설정: Sequelize를 통해 테이블 간의 관계를 설정하고, 복잡한 쿼리도 간단하게 작성할 수 있도록 했다.
  -	관리자(Admin) 설정: kscold를 닉네임으로 가장 먼저 가입되는 유저를 Admin으로 자동적으로 설정되게 만들었다.

  **환경 변수 관리**

  - 보안 강화: 민감한 정보를 보호하기 위해 환경 변수 파일(.env)을 사용하여 데이터베이스 연결 정보, API 키 등을 관리했다.

  **데이터베이스 연동**

  -	MySQL 사용: Sequelize와 MySQL을 연동하여 데이터베이스를 설정하고, 테이블과의 상호작용을 ORM으로 처리했다.

  **JWT를 사용한 인증 및 인가**

  -	JWT 토큰 발급 및 검증: 사용자의 로그인 상태를 유지하기 위해 JWT를 사용하여 토큰을 발급하고, 이를 통해 요청이 인증된 사용자에게만 허용되도록 구현했다.
  
  **Socket.io 서버 설정** 

  -	실시간 통신: 실시간 채팅 기능을 구현하기 위해 Socket.io를 사용하여 서버와 클라이언트 간의 실시간 통신을 처리했다.
  
  **CORS 설정**

  -	CORS 설정: 클라이언트와 서버 간의 원활한 통신을 위해 CORS 설정을 적용했다. 이를 통해 특정 도메인에서의 요청을 허용하도록 했다.

  **테스트 및 디버깅**

  -	Postman 사용: FrontEnd에 연결 전데 API의 기능을 테스트하고 디버깅하기 위해 Postman을 사용했다. 이를 통해 API의 동작을 검증하고 문제를 해결했다.
  

   <hr/>

## 🎆 화면 정의서

### PC & Mobile Page



<br><br>

- **Phone**
- **web** (권장)

## 구조도

<div align="center">
  
</div>

<br>

## 👍 느낀점

개발하면서 느낀점을 총 2가지로 나누어 생각해봤다.

- ### 1. 개발

- ### 3. 정리

## 👑 만들이

|                이름                 |                                            사진                                            |       담당       |         구분         |
| :---------------------------------: | :----------------------------------------------------------------------------------------: | :--------------: | :------------------: |
| [김승찬](https://github.com/kscold) | <img src="https://avatars.githubusercontent.com/u/66587554?v=4" width="200" height="200"/> | 모든 FE, BE 개발 | 개인 사이드 프로젝트 |
