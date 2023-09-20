## WIL1

## 프로그래밍 언어

프로그래밍 언어? : 컴퓨터 프로그램을 작성하기 위한 언어
컴파일 : 소스 코드를 실행하기 전에 기계어로 번역하는 행위
  --> 이를 수행하는 소프트웨어가 컴파일러

컴파일 언어 : 소스 코드를 묶어서 컴파일한 후에 실행하는 언어 (C, C++, Java등)
    컴파일 시간이 소요되지만 실행 속도가 빠름
인터프리터 언어 : 한 줄 씩 기계어로 번역해서 실행하는 언어 (LISP, Ruby, Python등)
    컴파일 언어보다 속도 처리가 느림

언어의 종류 : 절차적 언어 - 순서대로 작성
             객체 지향 언어 - 데이터와 절차를 하나로 묶어 객체 단위로 작성
             함수형 언어 - 함수를 조합하여 구현
             논리형 언어 - 데이터 사이의 관계와 논리를 설명 


## 자바스크립트 작성법

유니코드 문자로 작성한다.
대문자와 소문자를 구분한다.
토큰 : 프로그램을 구성하는 최소 단위 (의미를 가지는 단위)
산술 연산자와 구분자 앞뒤의 공백은 생략 가능
주석 - // or /* */


## 변수

sum이라는 변수 선언
> var sum;
여기서 var는 선언자

변수 동시 선언도 가능
> var sum, a;
모든 변수의 초깃값은 undefined

### 변수의 생략
일반적으로 var문으로 선언하지 않은 변수를 호출하면 에러
하지만 값을 대입한다면 전역 변수로 선언되어 호출 가능, but 버그의 원인 --> Strict 모드


## 데이터 타입

JS는 동적 타입 언어 --> 변수에 모든 타입의 데이터 저장 가능

원시타입 : 숫자, 문자열, 논리값, 특수값, 심벌
객체타입 : 배열, 함수, 정규 표현식 등

숫자는 C의 64비트 double 타입에 해당

심벌: 유일무이한 값
> var sym1 = Symbol();

> var NONE = 0;
> var WHITE = 1;
을
> var NONE = Symbol("none")
> var WHITE = Symbol("white")
로 수정해서 사용 가능

문자열과 연결된 심벌
> var sym1 = Symbol.for("club")
지정 문자열로 코드 어디서나 호출 가능
> console.log(Symbol.keyfor(sym1))


## 객체
aka. 연관 배열, 사전

데이터(이름과 값의 쌍)을 가리켜 프로퍼티
이름 : 프로퍼티, 값 : 키
> var card = {suit: "하트", rank= "A"}

프로퍼티 값을 읽거나 쓸 때는
> card.suit --> 하트
> card["rank"] --> A

- 없는 프로퍼티를 읽으려고 할때는 undefined 반환
- 객체 안에 어떠한 프로퍼티도 없으면 빈 객체 생성
  
프로퍼티의 추가
> card.value = 14;
프로퍼티의 삭제
> delete card.rank;
프로퍼티의 존재유무
> console.log("suit" in card); -> true


## 함수

함수의 선언
> function square(x) {return x * x} : 제곱 계산기

함수를 호출하려면
> square(3);
처럼 괄호 안에 인수를 넣어 호출

인수가 여러개라면 쉼표로 구분, 인수를 받지 않는 함수도 존재
함수 선언문은 어떤 위치에도 작성가능 (실행문 밑에서 선언해도 가능)

함수를 선언하면 그 함수 이름을 변수로 설정 -> 다른 변수에 할당하면 해당 변수로 함수 실행 가능
> var sq = square;
> console.log(sq(5));

원시값을 인수로 넘겼을 때와 객체를 인수로 넘겼을 때는 다르게 동작하므로 유의


인수가 여러개일때
> function setBallProperties(x, y, vx, vy, radius) { ... }
> ...
> setBallProperties(0, 0, 10, 15, 5);

이때
> var parameters = {
>     x: 0,
>     y: 0,
>     vx: 10,
>     vy: 15,
>     radius: 5
> };
처럼 인수를 객체 프로퍼티에 담아서

> ...
> setBallProperties(parameters);
로 수정하면 훨씬 편리함.

변수의 유효범위에 유의.
전역 변수와 지역변수가 충돌하면 지역변수가 우위

함수 안에서 변수가 선언될 시 선언된 변수는 유효 범위가 함수 전체
함수 안에서 var을 사용하지 않고 선언 시 유효 범위는 프로그램 전체

### let, const
let으로 선언한 변수는 중괄호 안에서만 유효
const는 한번만 할당 가능한 상수를 선언 (객체 형태는 수정 가능)

### 함수 리터럴
var square = function(x) { return x * x }
함수 리터럴은 이름이 없는 함수이므로 익명 함수 또는 무명 함수라고도 함
- 함수 리터럴로 선언한 함수는 끌어올리지 못함


### 메서드
> var circle = {
>     center: {x : 1.0, y : 2.0},
>     radius: 2.5,
>     area: function() {
>         return Math.PI * this.radius * this.radius;
>     }
> };

여기서 this는 circle을 가리킴


## 생성자
생성자로 객체 생성

> function Card(suit, rank) {
>     this.suit = suit;
>     this.rank = rank;
> }
>
> var card = new Card("하트", "A");

> var card = {};
> card.suit = "하트";
> card.rank = "A";

- Date 생성자
  Date는 날짜와 시간을 표현하는 객체를 생성한다
> var now = new Date(); --> 현재 시각 저장

## 객체의 분류
네이티브 객체 - ecmascript에 정의된 내장 생성자
호스트 객체 - ecmascript에 정의되진 않았지만 js 환경에 정의된 생성자
사용자 정의 객체 - 사용자가 만든거

## 배열
배열은 대괄호로 묶는다
> var evens = [2, 4. 6, 8];
length : 배열 길이
> var evens = new Array(2, 4, 6. 8);
처럼 생성도 가능

push 메소드를 사용하면 배열 끝에 추가 가능
delete 연산자를 사용하면 요소 삭제 가능, length는 그대로



## 산술연산자

- 산술이항연산자
1. 정수끼리의 계산도 부동소수점이 된다
2. 퍼센트 연산자는 부동소수점을 만든다
3. 더하기 연산자는 하나가 문자열이면 나머지도 문자열로 만든다
4. 계산이 안되면 NaN

- 산술단항연산자
a++ : a를 평가하고 1을 더한다
++a : 1을 더하고 a를 평가한다
음수도 똑같음
음부호 하나는 부호 반전

Math 프로퍼티
> Math.sin Math.cos
등으로 삼각함수 연산
> Math.PI
로 원주율 계산 가능


## 관계 연산자

== 값이 같음
!= 값이 같지 않음
=== 값과 타입이 같음
!== 값과 타입이 같지 않음
좌우 피연산자에서 undefined null은 같은 것으로 친다


## 논리 연산자
&& 논리곱 : 모두 true일때 true
|| 논리합 : 둘 중 하나 true면 true
! 부정


## 기타 연산자
typeof : 데이터 타입 조사
?: : 조건 연산자
instanceof : 객체의 종류 확인
eval() : 인수로 받은 문자열을 자바스크립트 코드로 실행

조건연산자
> var parity = (a % 2 == 0)? "짝수" : "홀수";
--> a가 짝수일때는 짝수, 아니면 홀수 반환


## 타입 변환

숫자를 문자열로 바꾸기
1. 숫자 + 문자열 = 문자열
(""을 더해도 가능)
2. Number 객체의 메서드를 활용

String 함수는 모든 데이터를 문자열로 바꿈


문자열을 숫자로 바꾸기
1. 수식 안에서 묵시적으로 바꾼다
2. parselnt와 parseFloat를 사용한다
   이들은 문자열을 부동소수점으로 바꾼다. 해석 불가할땐 NaN
   숫자 뒤에 있는 문자열은 무시한다.
3. Number 함수 사용
   --> 모든 데이터를 숫자로 바꿈



## 대화상자

대화 상자는 모달(modal)창 : 대화상자가 떠 있는 중에는 부모 창의 작업이 정지된다.

### window 객체
> window.alert : 경고 대화 상자를 표시
> window.prompt : 문자열 입력을 받는 대화상자를 표시
> window.confirm : 확인/취소 버튼이 있는 대화상자 표시

prompt 메서드로 받은 문자열을 숫자로 바꾸고 싶다면 parseInt나 parseFloat를 쓰자
> var age = parseInt(prompt("나이를 입력해주세요"));

### console 객체
: __프로그램의 동작확인이나 디버깅에 자주 사용된다__

> console.dir : 대화형 목록을 출력
> console.error : 오류 메시지 출력
> console.info : 메시지 타입 로그 출력
> console.log : 일반 로그 출력
> console.time : 처리 시간 측정용 타이머 시작
> console.timeEnd : 타이머를 정지시키고 밀리초 단위로 출력
> console.trace : 스택 트레이스 출력
> console.warn : 경고 메시지 출력

- 콘솔에 텍스트 출력하기 : console.log, console.info, console.warn, console.error
  console 객체 속 인수는 ,나 + 로 구분한다
  서식 문자열을 사용하여 지정된 서식으로 변환 출력도 가능하다
- 목록으로 표시하기 : console.dir
  객체의 프로퍼티를 나열한다
- 타이머 : console.time, console.timeEnd
  여러개 동시 생성 가능, 밀리초 단위로 표시

### 이벤트 처리기

함수를 이벤트처리기로 등록하는 방법
1. HTML 요소의 속성으로 등록하는 방법
   > <input type="button" value="click" onclick="displayTime()">
   그러나 html과 js코드가 뒤섞인다는 단점이 있다
2. DOM에서 가져온 html에 이벤트 처리기 지정하기
   > window.onload = function() {
        var button = document.getElementById("button");
        button.onclick = displayTime;
    };


타이머

setTimeout은 지정된 시간 이후에 함수를 실행한다
> setTimeout(function() {
>     console.log(new Date());
> }, 2000); --> 2초후에 날짜 저장
이때 2번째 인수는 밀리초 단위로 작성
setTimeout의 반환값을 clearTimeout()의 인수로 넘기면 함수 실행이 취소된다

setInterval : 지정된 시간마다 반복 실행
> setInterval(function() {
>     console.log(new Date());
> }, 1000); --> 1초마다 날짜 저장
cleartimeout도 동일하게 동작


### innerHTML
innerhtml은 HTML요소를 가리키며 HTML내용을 읽거나 쓸 수 있다.
bmicalculator 참조


## Canvas의 특징
저수준 api로 기본적인 기능만 제공한다.
즉시 실행형: 즉시 실행된다

1. canvas의 넓이를 설정한다
2. canvas 요소의 객체 불러오기
3. 렌더링 컨텍스트 가져오기 > var ctx = canvas.getContext("2d");

왼쪽 윗부분이 (0,0)이다

- 도형 그리기
사각형 테두리 그리기 : strokeRect(x, y, width, height)
사각형 채우기 : fillRect(x, y, width, height)
사각형 지우기 : clearRect(x, y, width, react)

      - 패스를 정의하면 곡선을 그릴 수도 있고 내부를 채울 수도 있다

펜 이동하기 : moveTo(x,y)
선으로 연결하기 : lineTo(x,y)
원호 그리기 : arc(x, y, radius, startAngle, endAngle, anticlockwise)
    차례대로 중심좌표, 반지름, 원호시작 각도, 호의 끝 각도, true 시계 false 반시계
둥근 모서리 그리기 : arcTo(x1, y1, x2, y2, radius)

  
- 그래픽스 속성 설정하기

> ctx.strokeStyle = "red"; // 빨간선
> ctx.fillStyle = "##44ff44"; // 녹색칠

> ctx.globalAlpha = "0.6"; // (완전 투명) 0 ~ 1 (완전 불투명)

> ctx.lineWidth = 2; // 굵기 2로 그려라

> ctx.lineCap : square; // butt, square, round 중에 설정
> ctx.lineJoin : bevel; // miter, round, bevel


### 그림 읽어들이기

> var img = new Image(); // 이미지 객체를 생성
> img.src = "./cat.jpg"; // url로 이미지 소스 자체로 불러오기
> img.src = canvas.toDataURL(); // url로 캔버스로 그린 컴퓨터 그래픽스로 불러오기

이미지 객체를 가져왔으니 이제 그려봅시다
> ctx.drawImage(img, x, y);
> img.onload = function() {
>     ctx.drawImage(img, 0, 0);
> };

### drawImage 메서드의 사용법

1. drawImage(image x, y) // 왼쪽 위 기준으로 얼마나 떨어져서 붙일래
2. drawImage(image, x, y, width, length) // 왼쪽 위 기준 얼마나 떨어져서 얼마나 크게 붙일래
3. drawImage(image, sx, sy, sw, sh, x, y, width, height) // 왼쪽 위 기준 얼마나 떨어져서 어디를 얼마나 크게 붙일래


### 픽셀 제어하기

> ctx.getImageData(x, y, width, height); // (x, y) 만큼 떨어져서 width*height 영역으로 객체를 불러온다
> ctx.createImageData(width, height); // 인수로 정해진 구역에 imageData 객체를 생성한다. 픽셀은 투명한 검은색으로 초기화가 되어있다
> ctx.createImageData(anotherImageData); // 인수에 저장된 이미지를 담을 수 있는 크기의 객체를 생성하며 마찬가지로 검은색으로 초기화가 되어있음

> ctx.putImageData(imageData, x, y); // 인수에 저장된 객체의 이미지를 왼쪽 위 기준 (x, y) 만큼 떨어진 렌더링 컨텍스트에 그린다



## 제어 구문

조건문 : 조건에 따라 처리를 분기 - if/else, switch, try/catch/finally
반복문 : 조건을 만족하면 처리를 반복 실행 - while, do/while, for, for/in, for/of
점프문 : 프로그램의 다른 위치로 이동 - break, continue, throw

### 조건문
1. if/else문
   > if (조건식) 문장
   > if (조건식) 문장 1 else { 문장 2 }

  else는 가장 가까운 if에 호응하므로 {}로 잘 묶어서 사용할 것

2. switch문
   분기점 여러개를 더욱 간결하게 표현 가능
   > switch(표현식) {
   >    case 표현식 1 : 실행문 1
   >    case 표현식 2 : 실행문 2
   >    .
   >    .
   >    .
   >    default: 실행문 n
   > }
   case와 일치하지 않는 라벨이면 default를 실행
   일반적으로 실행문 뒤에 break를 넣음

### 반복문

1. while문
   > while (조건식) 문장
  조건식이 true일 동안 계속해서 반복 실행

  linearsearch는 배열에서 특정값을 왼쪽에서부터 찾아나감
  binarysearch는 배열에서 특정값을 이진검색함

2. do/while문
   while문은 동작을 반복할지 말지를 시작 부분에서 판단하지만 dowhile은 마지막 부분에서 판단
   > do 문장 while(조건식);

3. for문
   > for (초기화식; 조건식; 반복식) 문장
   > for (var i = 0; i < 10; i++) {
          console.log(i);
    }
  for는 반복문에서 일반적으로 사용하는 세가지 작업을 소괄호 안에 모두 작성한다.
  - 반복 조건의 초기화
  - 반복문의 조건 식
  - 작업이 1회 끝나면 반복 조건의 갱신
  --> 사전에 오류 발견 가능

  조건식 평가 false면 for를 빠져나와 다음 처리로 이동한다.
  true라면 실행 후 다시 조건식을 평가한다.

### 중첩반복문
for문 안에 for문을 넣는 형태이다.

### 점프문
지원하는 점프문에는 break, continue, return, throw가 있다.
라벨을 붙이면 break나 continue 실행 이후에 점프할 수 있는 위치가 된다.

1. 라벨문
   모든 문장에 라벨링 가능
   break와 continue를 통해 라벨문으로 점프할 수 있다.
   break와 switch, continue는 반복문 안에서만 사용할 수 있으므로 사실상 라벨링이 가능한건 switch와 반복문.
> loop: while(true) {
>       ...
>       if(confirm("종료하시겠습니까?")) break loop;
> }

2. break문
   가장 안쪽에 있는 반복문이나 switch문에서 빠져나온다.

> break 라벨 이름;
이렇게 사용하면 지정된 라벨로 점프가 가능하다.

3. continue문
   break와 작동은 유사
   라벨 이름으로 옮겨갈 수 있지만 반복문 내에서만 사용 가능하다.