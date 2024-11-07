# Korean Dummy JSON 프로젝트

[Korean Dummy JSON](https://www.koreandummyjson.site/) 을 활용한 API CURD 테스트 프로젝트

---

# 📋 목차

-   [🔖 프로젝트 정보](#-프로젝트-정보)
    -   [📎 URL](#-url)
    -   [🛠 Stacks](#-stacks)
    -   [📁 디렉토리 구조](#-디렉토리-구조)
    -   [📁 Code Rule](#code-rule)
    -   [🪢 Conventional Commits 규칙](#conventional-commits-규칙)
    -   [🪢 브런치 전략](#브런치-전략)
-   [💻 프로젝트 실행/배포](#프로젝트-실행배포)
    -   [🏃 Run Locally](#실행)
    -   [🚀 Deployment](#-deployment)

---

## 🔖 프로젝트 정보

### URL

| Deployment | URL        |
| ---------- | ---------- |
| `STAGE`    | [준비중]() |
| `PROD`     | [준비중]() |

### 🛠 Stacks

| Category    | Stacks                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Environment | [<img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white">](jetbrains://idea/checkout/git?idea.required.plugins.id=Git4Idea&checkout.repo=git%40gitlab.spade.company%3Afrontend%2Fnpm-nuxt3-hyundai-archiving.git) <img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white">                                                                          |
| Config      | [<img src="https://img.shields.io/badge/npm v10.9.0-CB3837?style=for-the-badge&logo=npm&logoColor=white">](https://docs.npmjs.com/)                                                                                                                                                                                                                                                                                                                          |
| Development | [<img src="https://img.shields.io/badge/typescript-2986cc?style=for-the-badge&logo=typescript&logoColor=white">](https://www.typescriptlang.org/) [<img src="https://img.shields.io/badge/node v22.11.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">](https://nodejs.org/docs/latest-v20.x/api/index.html) [<img src="https://img.shields.io/badge/react v18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black">](https://vuejs.org/) |
| CI/CD       | [준비중]()                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### 📁 디렉토리 구조

```
src/
|-- assets/                # 이미지, 전역 스타일 등의 정적 리소스
|-- components/            # 범용 컴포넌트
|-- constants/             # 반복적으로 사용되는 상수 값
|-- api/                   # 앱 서비스내 사용되는 모든 api 관련 함수
|-- hooks/                 # 재사용 가능한 hook 함수
|-- libs/                  # 외부 라이브러리 설정 및 패키지 기본 세팅
|-- pages/                  # 라우트별 페이지 컴포넌트
|-- routes/                # 라우팅 관련 설정
|-- store/                 # 전역 상태 관리 디렉터리
|-- types/                 # 프로젝트내 React 관련 타입스크립트 타입 선언
|-- utils/                 # 유틸리티 함수
|-- main.tsx               # 앱의 엔트리 포인트
```

```
components/
|-- form/                  # form 관련 컴포넌트
|---- buttons              # 이하 예시 컴포넌트
|---- inputs
|---- radios
|---- checkboxes
|-- navigations/           # nav 및 이동 관련 컴포넌트
|---- menus
|---- paginations
|---- tabs
|---- links
|-- layouts/              # layout 관련 컴포넌트
|----headers
|---- footers
|---- dividers
|---- scroll-area
|-- feedbacks/            # 사용자에게 UI 피드백을 제공하는 컴포넌트
|---- modals
|---- toasts
|---- loadings
|---- skeletons
|---- tooltips
|-- ui                    # 기타 공통 컴포넌트
```


### Code Rule

-   엔드 포인트 폴더가 아닌 그외 폴더명은 복수로 작성하고 **케밥 케이스(kebab-case)** 로 작성한다.
-   라우팅 페이지 디렉토리 네이밍은 **케밥 케이스(kebab-case)** 로 작성한다.
-   컴포넌트 파일명, type,interface 네이밍은 **파스칼 케이스(PascalCase)** 로 작성한다.
-   hooks 폴더의 파일명, utils 파일은 **카멜 케이스(camelCase)** 로 작성한다.
-   constants 폴더에서 export 하고있는 상수는 **스크리밍 스네이크 케이스(SCREAM_SNAKE_CASE)** 로 작성한다.

### Conventional Commits 규칙

**기본 구조**

```
<type>: [<scope>] <subject>

[optional body]

[optional footer(s)]
```

-   type (필수): 커밋의 유형을 설명합니다.
    -   feat: 새로운 기능 추가
    -   fix: 버그 수정
    -   style: 코드 스타일 (포맷팅 등)과 관련된 작업
    -   chore: 빌드 프로세스 또는 보조 도구 및 라이브러리 변경 (버그나 기능 추가 없음)
    -   refactor: 코드 리팩토링
    -   docs: 문서 변경
    -   perf: 성능 개선
    -   revert: 이전 커밋을 되돌림
    -   test: 테스트 추가 또는 수정 (버그나 기능 추가 없음)
-   scope (선택): 커밋의 영향 범위를 나타냅니다. 예를 들어, 특정 컴포넌트 또는 파일명 등이 될 수 있습니다.
-   subject (필수): 커밋의 간략한 설명입니다.
-   body (선택): 변경 사항에 대한 자세한 내용을 기재합니다. 생략 가능하며, 필요에 따라 추가할 수 있습니다.
-   footer(s): 커밋과 관련된 이슈를 링크하거나 기타 참고할 내용을 추가합니다. 여러 줄로 작성할 수 있습니다.

### 브렌치 전략

-   Develop
    -   [Trunk-Based-Flow](https://intothemaze.tistory.com/20)
-   Deployment
    -   [Gitlab-Flow](https://brownbears.tistory.com/605)

---

## 프로젝트 실행/배포

### 실행

Git Clone 후 다음 명령어 실행

```shell
npm install
npm run dev
```

### 🚀 Deployment

**PROD**

**STAGE**
