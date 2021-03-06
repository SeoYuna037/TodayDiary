# TodayDiary
### 프로젝트 소개
Today Diary는 프로젝트 제목처럼 오늘 하루 있었던 일을 기록하기 위해 만들었습니다.
회원가입, 로그인 후 일기를 작성할 수 있고 일기는 꼭 사진 파일을 넣어야 합니다.
또한 Todo List 기능을 추가하여 사용자는 원할 때면 언제든 하고자 하는 일을 작성 및 삭제할 수 있습니다.
로그인 할 경우 Local Storage에 사용자 정보가 저장되며 이를 통하여 작성자를 확인합니다.
Firebase를 활용하여 사용자의 정보 및 일기, Todo List를 저장합니다
배포 또한 Firebase로 진행하였습니다
테스트 계정 정보
ID:test
password:testtest

### 사용 기술
-HTML5, CSS3, JavaScript, Firebase, JQuery


### 디렉토리
```
-index.html
-style.css
-register.html
-main.html
-main.css
-read.html
-read.css
-upload.html
-upload-style.css
-edit.html
```

### 사이트 이용방법
#### 1.회원가입
>아이디, 이메일, 비밀번호를 통하여 회원가입을 합니다
>동일 이메일로 가입할 경우 가입 불가 문구가 뜹니다.


#### 2.로그인
>회원가입한 아이디와 비밀번호로 로그인을 합니다.

<img src="https://user-images.githubusercontent.com/96972549/160272109-cb5ae298-4018-4334-af0f-35ca42acd60f.gif">

#### 3.일기 작성하기
>사진 하나와 내용을 적어 일기를 저장할 수 있습니다.

<img src="https://user-images.githubusercontent.com/96972549/160272152-faa360dd-2e48-4b79-8f03-93ad88c2ca74.gif">

#### 4.일기 상세 페이지
>일기 상세 페이지에 들어가 일기를 수정 및 삭제할 수 있습니다.

<img src="https://user-images.githubusercontent.com/96972549/160272172-fdb23cff-cd8d-4188-a0cf-f76c73b21308.gif">

#### 5.투두 리스트
>할 일을 추가 및 삭제할 수 있습니다.

<img src="https://user-images.githubusercontent.com/96972549/160272184-cef16620-51e7-4b85-9bf0-65123305c3c7.gif">


### 주요코드
>회원가입 유효성 검사
<img src="https://user-images.githubusercontent.com/96972549/163721904-95aaea35-699a-436c-8498-366c645e275b.png">

>로그인 확인
<img src="https://user-images.githubusercontent.com/96972549/163721870-33d30f7e-c76d-4731-9776-14ef99297195.png">

>투두 리스트 추가 및 삭제 (시간 순 정렬)
<img src="https://user-images.githubusercontent.com/96972549/163721938-672c0a95-ca34-47dc-a8d4-e9bf8900abaf.png">

>작성자와 로그인 아이디가 같을 경우 해당 일기만 보여주는 코드
<img src="https://user-images.githubusercontent.com/96972549/163721987-316a1208-4b65-4719-b529-59bcac9a9352.png">

>일기 추가
<img src="https://user-images.githubusercontent.com/96972549/163722061-88f671a9-5c96-4b66-a4a9-ee8260ed51ec.png">

>일기 수정 (JQuery)
<img src="https://user-images.githubusercontent.com/96972549/163722035-c6a6d063-56d8-4e7b-96a2-a599f633298c.png">
