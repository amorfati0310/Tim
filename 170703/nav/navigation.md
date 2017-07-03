# TIM

간단한 nav bar 만들기



01 flex이용

```css
@charset "utf-8";

html, body{
    margin: 0;
    box-sizing: border-box;
}
html{
    font-size: 16px;
}

h1,ul,li{
  padding: 0;
  margin: 0;
}
li {
  list-style: none
}
//
기본 설정
//
img {
  width: 48px;
  height: auto;
}

///////////////////로고 이미지 크기 줄여주기

header {
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  justify-content: flex-end;
}

h1{
  width: 30%;
}
nav {
  width: 70%;
}



.nav-link {
  margin-right: 1em;
  text-decoration: none;
  cursor: pointer;
}

header {
  background-color: #29f9e0;
}
```

이슈 처음에 ul에 item들을 그냥 flex-end하면 끝으로 가겠지 생각했는데

nav가 넓이를 컨텐츠 만큼만 차지하고 있어서  이동이 없는 문제가 있었다.

h1, nav의 width값을 %로 조절해줘서 맞춰주었다.


## nav02 login signup 버튼 추가

login-signup-box에 각각의 링크를 넣어주고
go라는(작명.. 이름 다시 지어야 될듯 ) box에 nav 와 함께 flex를 넣어주고 nav대신 width 비율을 go가 가지고 가도록 수정하였다.

이제 여기서

이슈
새로 추가한 login signup 링크에 height값을 헤더바랑높이를 맞추고 싶은데

방법 1
헤더 값에 height를 주고
a에 line-height값으로 맞춘다.

방법 2

+ modal과
+ dropdown을 한 번 구현해볼 생각이다.



02 float 이용
