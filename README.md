# cadenzah-youtube-clone

## Index

- [Features](#features)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)

<a name="features"></a>
## Features
Youtube API를 활용하는 간단한 동영상 검색 및 재생 서비스

<a name="how-to-run"></a>
## How to Run

Github Page를 통한 시연은 `master` 브랜치를 이용해주세요. `dev` 브랜치에서는 로컬 개발 서버(`Node.js`)를 사용하여 React 파일을 배포하는 방법을 설명하니다.

### Source code build

1. 소스를 다운로드하고, 저장소 폴더 안으로 들어갑니다.
```bash
$ git clone https://github.com/2pow4/cadenzah-youtube-clone.git
$ cd cadenzah-youtube-clone
```
2. 의존 라이브러리들을 설치합니다.
```bash
// `yarn`을 사용해도 됩니다.
$ npm install
```
3. `.jsx` 코드들을 컴파일합니다.
```bash
// 자세한 명령어는 `package.json` 파일을 확인해주세요.
$ npm run build
```

### Run `bundle.js` deployment server

1. `index.js`에서 사용할 Port 번호를 설명합니다.

```js
const port = process.env.PORT || 8080
```

기본값은 `8080`으로 설정되어있습니다.

2. 서버 실행

```bash
$ npm run start
```

3. 웹 페이지 접속

```bash
http://localhost:8080
```

<a name="tech-stack"></a>
## Development Environment
- [`react(v16.8.6)`](https://reactjs.org)
- [`webpack(v4.37.0)`](https://webpack.js.org)
- [`babel(v7.5.5)`](https://babeljs.io/docs/en/babel-cli)
- [`redux(v4.0.4)`](https://redux.js.org)

### Utility Libraries

- [`axios`](https://www.npmjs.com/package/axios)
- [`materialize-css`](https://materializecss.com)

### Server side Libraries

- [`express`](https://expressjs.com)
- [`morgan`](https://github.com/expressjs/morgan)
