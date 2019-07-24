# cadenzah-markdown-preview

## Index

- [Features](#features)
- [Limitation](#limitation)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)

<a name="features"></a>
## Features
Markdown이 사용된 텍스트를 서식을 적용하여 출력하는 작은 서비스

<a name="limitation"></a>
## Limitation
`webpack`을 전혀 사용하지 않으므로 발생하는 몇 가지 불편 사항이 있습니다:
- React 관련 라이브러리를 `index.html` 상에서 직접 로드해줘야 합니다.
- 모듈 기능을 사용하려면 추가적인 학습이 필요하므로, 그러지 않고도 결과를 확인할 수 있도록 **단일 파일로 번들되어도 문제없이 작동되도록 JSX 코드를 작성했습니다.**
  - 각 `.jsx` 파일 내에서 사용하는 `class` 이름 등은 겹치지 않는 고유한 것으로 처리했습니다.
  - 각 `.jsx` 파일에서 모듈로 내보내는 코드를 주석 처리했습니다.

<a name="how-to-run"></a>
## How to Run
1. 소스를 다운로드하고, 저장소 폴더 안으로 들어갑니다.
```bash
$ git clone https://github.com/2pow4/cadenzah-markdown-preview.git
$ cd cadenzah-markdown-preview
```
2. 의존 라이브러리들을 설치합니다.
```bash
$ npm install
```
`yarn`을 사용해도 됩니다.
3. `.jsx` 코드들을 컴파일합니다.
```bash
$ npm run build
```
자세한 명령어는 `package.json` 파일을 확인해주세요.
4. `index.html` 파일을 브라우저 상에서 실행합니다.

<a name="tech-stack"></a>
## Tech Stack
- [`react.js(v16.8.6)`](https://reactjs.org)
- [`babel(v7.5.5)`](https://babeljs.io/docs/en/babel-cli)

## Babel Related Settings

### `npm` Modules
- @babel/core
- @babel/cli
- @babel/preset-react

### `.babelrc`

`.babelrc`는 Babel Transpiler가 실행될 때에 적용되는 설정을 정의하는 파일입니다. 이 프로젝트에서 사용한 설정의 내용은 아래와 같고, Babel이 `react`의 문법을 이해하고 변환에 적용할 수 있도록 설정하는 것입니다. 자세한 설정 방법은 [Babel 공식 문서](https://babeljs.io/docs/en/configuration)를 확인해주세요.

```json
{
  "presets": ["@babel/preset-react"]
}
```
