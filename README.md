React 와 Spring Boot로 생성된 웹앱

# 실행 방법

## 서버 실행

프로젝트 디렉토리에서

```
$ mvn spring-boot:run
```

브라우저에서 [http://localhost:8080](http://localhost:8080) 에 접속하여 확인 가능.

## 클라이언트 실행

프로젝트 디렉토리에서 

```
$ cd frontend
$ yarn start
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 에 접속하여 확인 가능.

서버가 실행중인 경우, 서버 쪽 데이터 연동 가능.
핫 디플로이 되어 개발 시 편리함.

# 배포 방법

## 프론트엔드 및 백엔드 전체 빌드

프로젝트 디렉토리에서 

```
$ mvn clean install
```

### 서버와 클라이언트를 하나의 jar 파일로 실행

```
$ java -jar target/spring-and-react-0.0.1-SNAPSHOT.jar
```

브라우저에서 [http://localhost:8080](http://localhost:8080) 에 접속하여 확인 가능.

# 적용된 기술 

## 서버

- Spring Boot
- 빌드 : Maven (향후 Gradle 적용)

## 클라이언트

- React 
  - [Create React App](https://github.com/facebook/create-react-app).

### 참고 프로젝트

https://github.com/kantega/react-and-spring