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
12. 데이터베이스 연동
```
AppModule -> SampleModule -> TypeOrmModule -> SampleResolver -> SampleService

1) TypeOrmModule에 DB로 전송할 entity들 설정

2) SampleModule
: TypeOrmModule의 Sample 엔티티를 다른 곳에서 Inject할 수 있도록 import하기.
: providers에 SampleService 주입 => SampleResolver에서 사용 가능.

3) SampleService
: @InjectReposity(entity): 전달받은 entity를 기반으로 Repository 생성.
: Repository의 메서드들로 DB에 접근하는 방식 지정.

4) SampleResolver
: GraphQL Query/Mutation으로 DB에 접근하는 SampleService의 메서드들 활용.
```
13. 신규 컬럼 추가될 경우 SampleEntity가 알아서 DB테이블, graphql type, dto 모두 업데이트 시키기
- create-sample-dto에서 상속(extends) 받도록 처리