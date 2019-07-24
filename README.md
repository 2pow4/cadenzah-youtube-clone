# cadenzah-markdown-preview

## Index

- [Features](#features)
- [Support](#support)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)

<a name="features"></a>
## Features
Markdown이 사용된 텍스트를 서식을 적용하여 출력하는 작은 서비스

<a name="support"></a>
## Support
`webpack`을 전혀 사용하지 않고 프로젝트를 만드려고 하니 라이브러리 모듈을 불러오는 것이 복잡해서, `webpack`을 사용하기로 하였습니다. 대신 Webpack 구축을 미리 해둔 프로젝트 소스를 여기에 올릴 테니 이것을 기반으로 각자 작업하시면 됩니다.

<a name="how-to-run"></a>
## How to Run
1. 소스를 다운로드하고, 저장소 폴더 안으로 들어갑니다.
```bash
$ git clone https://github.com/2pow4/cadenzah-markdown-preview.git
$ cd cadenzah-markdown-preview
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
4. `index.html` 파일을 브라우저 상에서 실행합니다.

<a name="tech-stack"></a>
## Tech Stack
- [`react(v16.8.6)`](https://reactjs.org)
- [`webpack(v4.37.0)`](https://webpack.js.org)
- [`babel(v7.5.5)`](https://babeljs.io/docs/en/babel-cli)

## Development Environment Settings

### `npm` Modules
- `@babel/core`
- `@babel/cli`
- `@babel/preset-env`
- `@babel/preset-react`
- `webpack`
- `webpack-cli`

### `webpack.config.js`

Webpack은 우리가 작성한 여러 코드들이 브라우저 측에서 제대로 실행될 수 있도록 각종 모듈 의존성 등을 주입해줍니다. 또한, 자바스크립트 코드가 순수한 자바스크립트 이외의 내용(이미지, `jsx` 등)을 다룰 수 있도록 해줍니다. `webpack.config.js`는 Webpack이 실행될 때에 적용되는 설정을 정의하는 파일입니다. 아직 배우지 않았으므로 자세한 설명은 생략하지만, 나중에 Webpack의 사용법을 익힌 뒤에는 직접 설정 파일을 작성해봅시다.

### `.babelrc`

`.babelrc`는 Babel Transpiler가 실행될 때에 적용되는 설정을 정의하는 파일입니다. 이 프로젝트에서 사용한 설정의 내용은 아래와 같고, Babel이 `react`의 문법을 이해하고 변환에 적용할 수 있도록 설정하는 것입니다. 자세한 설정 방법은 [Babel 공식 문서](https://babeljs.io/docs/en/configuration)를 확인해주세요.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
