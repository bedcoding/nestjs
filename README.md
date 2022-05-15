# 2번째 nestjs 공부 (첫번째: https://github.com/wordword-ahn/nestJS_study)
1. nest g application  (nestJS 설치)
2. npm i @nestjs/graphql graphql-tools graphql apollo-server-express  (graphql 설치)
3. nest g mo sample  (모듈 생성)
4. 공식문서(https://docs.nestjs.com/graphql/quick-start#getting-started-with-graphql--typescript)에 따르면 graphql 연동 방식이 수정되서 추가 설치가 필요함 (npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express)
5. 연동 후 localhost:3000/graphql
6. DB연동을 위해 타입ORM 추가 (npm install --save @nestjs/typeorm typeorm pg)
7. DB아이디, DB비밀번호 등을 따로 빼기 (npm i --save @nestjs/config)
8. 테스트, 개발기, 운영기 환경세팅 (.env.test 파일과 .env.dev 파일과 .env.prod 파일)
9. package.json에 커맨드 추가를 위한 설치 (npm i cross-env)
10. package.json에 커맨드 추가 (yarn start:dev 입력시 dev DB에 연결하는 식)
11. 환경변수 유효성 검사 추가(npm i joi) => dev, prod라는 글자만 허용하는 식.