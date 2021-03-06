# cadenzah-youtube-clone

## Index

- [Features](#features)
- [Try it!](#try)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)

<a name="features"></a>
## Features
Youtube API를 활용하는 간단한 동영상 검색 및 재생 서비스

- 원하는 영상 검색 (/search/:search_keyword)
- 영상 재생 기능 (/video/:video_ID)

<a name="try"></a>
## Try it!

[이 곳](https://2pow4.github.io/cadenzah-youtube-clone)으로 가시면 됩니다.

<a name="how-to-run"></a>
## How to Run

이 프로젝트를 기반으로 구현할 경우, 다음의 순서를 따르면 됩니다.

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
3. 필요 기능을 구현합니다.
4. `.jsx` 코드들을 컴파일합니다.
```bash
// 자세한 명령어는 `package.json` 파일을 확인해주세요.
$ npm run build
```
5. `index.html` 파일을 브라우저 상에서 실행합니다.

<a name="tech-stack"></a>
## Tech Stack
- [`react(v16.8.6)`](https://reactjs.org)
- [`webpack(v4.37.0)`](https://webpack.js.org)
- [`babel(v7.5.5)`](https://babeljs.io/docs/en/babel-cli)
- [`redux`]()
- [`react-router`]()

### Utility Libraries

To be revealed...
