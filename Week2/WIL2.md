## 함수

### 함수를 정의하는 방법
1. 함수를 선언문으로 정의하는 방법
   > function square(x) {return x*x;}
2. 함수 리터럴로 정의하는 방법
   > var square = function(x) {return x*x;};
3. function 생성자로 정의하는 방법
   > var square = new Function("x", "return x*x");
4. 화살표 함수 표현식으로 정의하는 방법
   > var square = x => x*x;

1번의 경우 엔진이 함수 선언문을 프로그램의 첫머리로 끌어올려 호출문이 정의보다 앞에 있어도 무방하지만
2, 3, 4번의 경우는 변수에 *그 함수의 참조를 할당* 해야 사용이 가능해진다

### 중첩 함수
: 특정 함수의 내부에 선언된 함수 (지역 함수, 내부 함수라고 부르기도 함)

- if나 while 문장 블록 안에는 함수 작성 불가
- 외부 함수의 지역 변수에 저장되므로 외부 함수 바깥에서는 사용 X
- 중첩 함수는 외부 함수의 인수에 접근 가능

### 함수 호출

1. ()호출
   저장된 변수 뒤에 ()를 붙여서 함수를 호출
2. 메서드 호출
   객체의 프로퍼티에 저장된 값이 함수일때 : ()를 붙여서 호출
3. 생성자 호출
   함수의 참조를 저장한 변수 앞에 new를 붙이면 생성자로서 동작한다.
4. call, apply

- 즉시 실행 함수 : 익명의 함수를 정의하면서 동시에 바로 함수 실행
> (function(인수) {...})(대입값);
즉시 실행 함수에도 이름을 붙일 수 있지만 해당 함수 내에서만 유효


### 함수의 인수

1. 인수의 생략
> function(x, y) {
>     console.log("x =" + x + "y =" + y );
> }
> f(2);    // x = 2 , y = undefined

2. 가변 길이 인수 목록 (Arguments 객체)
   함수에 인수를 n개 넘기면 arguments에 저장된다
> arguments[0] : 첫번째 인수
> arguments[1] : 두번째 인수
> ...
> arguments[n-1] : n번째 인수

3. 재귀함수
   : 함수가 자기 자신을 호출하는 형태

   함수 리터럴로 정의하려면 리터럴 표현식에 함수 이름 설정
   > var fact = function f(x) {
         if( n <= 1) return 1;
         return n*f(n-1);
   }

   > var fact = function(n) {
         if(n <= 1) return 1;
         return n*arguments.callee(n-1); --> 익명의 함수도 arguments.callee()로 호출 가능
   }

   재귀함수의 주의할점 - 재귀 호출은 언젠간 멈춰야한다
                      - 문제를 간단하게 해결할 수 있을 때만 사용

- quicksort 함수 : 퀵 정렬을 실행한다. 오름차순으로 정렬되며 실행시간이 가장 빠른 알고리즘 중 하나이다.

### 프로그램의 평가와 실행

실행 가능한 함수(Executable code) : 전역 코드, 함수 코드, eval 코드

실행 문맥 : Execution Context
실행 가능한 코드가 실제로 실행되고 관리되는 영역
컴포넌트가 여러개로 나누어 관리한다

- 렉시컬 환경 컴포넌트
- 변수 환경 컴포넌트
- 디스 바인딩 컴포넌트


1. 렉시컬 환경 컴포넌트와 변수 환경 컴포넌트
--> 이 둘은 렉시컬 환경 타입의 컴포넌트로 사실상 동일함 (with 사용시 제외)
렉시컬 환경 : js엔진이 코드를 실행하기 위해 자원을 모아 둔 곳
식별자와 그 식별자가 가리키는 값을 쌍으로 묶어서 기록

- 환경 레코드 : 유효 범위 안에 포함된 식별자를 기록하고 실행
               1. 선언적 환경 레코드
                  함수와 변수, catch문의 식별자와 결과가 저장
               2. 객체 환경 레코드
                  실행 문맥 외부에 별도로 저장된 객체의 참조에서 데이터 읽쓰  
- 외부 렉시컬 환경 참조 : 함수를 둘러싸고 있는 코드가 속한 환경 컴포넌트의 참조가 저장
                         바깥 코드에 정의된 변수가 필요할 때, 외부 렉시컬 환경을 따라 움직임

2. 전역 환경과 전역 객체의 생성
   js 인터프리터는 시작하자마자 렉시컬 환경 타입의 전역 환경을 생성하며,
   전역 환경의 객체 환경 레코드에 전역 객체의 참조를 대입한다
   최상위 레벨의 this는 전역 객체를 가리킨다
   > this === window

### this
: 호출되어 실행되는 시점에 따라 this 값이 결정된다.
> var tom = {
>     name = "Tom";
>     sayHello: function() {
>        console.log("Hello!" + this.name);
>     }
> }
여기서는 .sayHello가 속한 객체가 tom 이기때문에 tom이 호출된다.

### 유효 범위 체인
변수의 식별자 결정 : 선언된 변수가 어디에서 선언된 변수인지 결정하는 작업
js의 규칙 : 좀 더 안쪽에서 선언된 변수를 사용한다

속박 변수 : 함수의 인수, 지역변수
자유 변수 : 나머지 모두

닫힌 변수 : 속박 변수만 포함하는 함수
열린 함수 : 자유 변수를 가지고 있는 함수

### 가비지 컬렉션
사용하지 않는 객체의 메모리 영역은 __가비지 컬렉터__ 가 자동으로 해제한다
사용하지 않는 객체 : 다른 객체의 프로퍼티와 변수가 참조하지 않는 객체


### 클로저
클로저 : 자기 자신이 정의된 환경에서 함수 안에 있는 자유 변수의 식별자 결정을 실행하는 함수
????????????????????? 이해가 안된당..

### 이름 공간
전역 유효 범위 오염 : 전역 변수와 전역 함수를 전역 객체에 선언하는 행위
--> 다음과 같은 상황일때 이름이 겹칠 수 있음
1. 라이브러리 파일을 여러개 읽어 들여 사용할 때
2. 규모가 큰 프로그램을 만들 때
3. 여러 사람이 한 프로그램을 만들 때

오염을 방지하기 위한 기법
1. 객체를 이름공간으로 활용하기
   이름 공간 : 이름을 한 곳에 모아두어 충돌을 미리 방지하고 쉽게 쓸 수 있게 만든 장치
   js는 기본적으로 제공하진 않지만, 객체를 이름 공간으로 활용 가능
   --> 객체를 값으로 가지는 전역 변수를 생성하고, 변수와 함수를 프로퍼티로 정의
> var myApp() = myApp || {};
> myApp.name = "Tom"
   부분 이름 공간도 할당이 가능하다.
> myApp.view = {};
> myApp.view.draw = function() {...};

2. 함수를 이름 공간으로 활용하기
   함수 안에서 선언된 변수는 함수 내부(함수 안에서만 읽쓰 가능) --> 이러한 성질 이용
> var x = "global x";
> (function() {
>     var x = "local x";
>     var y - "local y";
> })();
> console.log(x); --> global x
> console.log(y); --> Uncaught Reference Error : y is not defined
: 일시적인 처리를 수행하고자 할 때는 내용물을 즉시 실행 함수 안에 작성하면 용이

라이브러리를 읽어들일때 충돌을 피하고자 할때는 전체 프로그램을 즉시 함수 안에 넣는다.

모듈 패턴
모듈 : 함수 여러개를 하나로 묶은 것 --> 충돌 가능성 다분
함수 내부의 이름과 충돌한다면 모듈 자체를 즉시 실행 함수 안에 넣어서 실행


### 객체로서의 함수
함수 = 일급객체
스킴등 함수형 언어처럼 프로그래밍 가능

함수의 프로퍼티
- caller : 현재 실행 중인 함수를 호출한 함수
- length : 함수의 인자 개수
- name : 함수를 표시할 때 사용하는 이름
- prototype : 프로토타입 객체의 참조

Function.prototype의 프로퍼티
- .apply() : 선택한 this의 인수를 사용하여 함수를 호출한다
- .bind() : 선택한 this와 인수를 적용한 새로운 함수를 변환한다
- .call() : 선택한 this와 인수를 사용하여 함수를 호출한다
- .constructor() : function 생성자의 참조
- .toString() : 함수의 소스 코드를 문자열로 만들어 변형한다

apply와 call 메서드
apply의 인수는 배열이고 call 인수는 쉼표로 구분한 목록

bind 메서드
객체에 함수를 묶는다.


### 고차 함수
: 함수를 인수로 받는 함수 또는 함수를 반환하는 함수

메모이제이션
함수 memorize는 인수로 함수를 받는다.
> function memorize(f) {
>    var cache = {};
>    return function(x) {
>       if(cache[x] == undefined) cache[x] = f(x);
>       return cache[x];
>    }
> }
memorize는 인수로 받은 함수의 결과를 cache에 저장

함수의 합성
compose는 인수로 받은 함수를 순차적으로 합성한다.
> function compose(f, g) {
>     return function(x) {
>        return f(g(x));
>     };
> }

부분 적용
인수를 여러개 받는 함수의 인수를 상수로 지정해서 새로운 함수를 생성

커링
: 인수가 두개 이상인 함수를 분해하여 인수가 하나인 함수의 중첩 함수로 변환

### 콜백 함수
: 다른 함수에 인수로 넘겨지는 함수
> f(g,...);
> ...
> function f(callback, ...) {
>     ...
>     callback();
>     ...
> }
콜백 함수에 제어권을 부여할 수 있습니다
함수를 호출할 때 새로운 사건이 생기거나 특정한 콜백

이벤트 처리기
> button.onclick = function() {...};


## 객체
프로퍼티 : 이름과 값이 한 쌍을 이루는 집합
이름 : 프로퍼티 이름 or 키
값 : 모든 타입의 데이터

### 객체의 생성
1. 객체 리터럴로 생성하는 방법
> var card = { suit: "하트", rank: "A"};
2. 생성자로 생성하는 방법
> function Card(suit,rank) {
>     this.suit = suit;
>     this.rank = rank;
> }
> var card = new Card("하트","A");
3. Object.create로 생성하는 방법
> var card = Object.create(Object.prototype.,{
>     suit: {
>        value: "하트"
>        writable: true,
>        enumerable: true,
>        configurable: true
> },
> rank: {
>     value: "A"
>     writable: true,
>     enumerable: true,
>     configurable: true
>   }
> });

### 프로토타입

1. 상속
   일반적으로 특정 객체가 다른 객체로부터 기능을 이어받는 것
   상속을 하는 이유 : 정의된 프로퍼티와 메서드의 코드 재사용 가능

2. 프로토타입 체인
   __proto__ 프로퍼티 그 객체에게 상속을 해 준 부모 객체를 가리킵니다.
   따라서 부모 객체의 프로퍼티를 사용할 수 있습니다.

   자신이 가지고 있지 않은 프로퍼티를 proto 프로퍼티가 객체를 거슬러 가며 검색한다
   --> 이걸 프로퍼티 체인이라고 한다

   proto 프로퍼티가 가리키는 객체를 그 객체의 프로토타입이라고 한다.

3. new 연산자
   new 연산자로 Circle 생성자를 사용하면
   1. 빈 객체를 생성한다
   2. Circle.prototype을 생성된 객체의 프로토타입으로 설정한다
   3. Circle 생성자를 실행하고 newObj를 초기화한다.
   4. 완성된 객체를 결괏값으로 변환한다
   
   --> 객체의 생성, 프로토타입의 설정, 객체의 초기화를 수행한다

4. 프로토타입 객체의 프로퍼티
   함수를 정의하면 기본적으로 prototype 프로퍼티를 갖게 된다.
   이 프로퍼티는 프로토타입 객체를 가리키며, 기본적으로 constructor 프로퍼티와 내부 프로퍼티를 가지고 있다.

   - constructor 프로퍼티
     기본적으로 함수 객체의 참조를 값으로 가지고 있다.
     > function F() {};
     > console.log(F.prototype.constructor); --> Function F() {}
     생성자의 prototype 프로퍼티가 프로토타입 객체를 가리키며,
     이 프로토타입 객체의 constructor 프로퍼티가 생성자를 가리킨다.

   - 프로토타입의 확인
     1. instanceof 연산자
        지정한 객체의 프로토타입 체인에 지정한 생성자의 프로토타입 객체가 포함되어 있는지 판정
        > function F() {};
        > var obj = new F();
        > console.log(obj instanceof F);        // true
        > console.log(obj instanceof Object);   // true
        > console.log(obj instanceof Date);     // false

      2. isPrototype 메서드
         특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지 판단
         > function F() {};
         > var obj = new F();
         > console.log(F.prototype.isPrototypeOf(obj));      //true
         > console.log(Object.prototype.isPrototypeOf(obj)); //true
         > console.log(Date.prototype.isPrototypeOf(Obj));   //true
      
   - Object.prototype
     Object 생성자 : 내장 생성자로 일반적인 객체를 생성한다
     인수 없이 실행 시 빈 객체를 생성함
     > var obj = new Object("ABC"); == var obj = Object();
     object 생성자는 객체를 생성하는 것보다는 객체를 조작하기 위한 메서드와 프로퍼티를 재공한다
     Object.prototype으로 모든 내장 생성자 인스턴스에서 사용할 수 있는 메서드를 제공한다
     메서드 목록은 p.354~ 참고

   - Object.create로 객체 생성하기
     명시적으로 프로토타입을 지정해서 객체를 생성할 수 있다.
     첫번째 인수는 프로토타입, 두번째 인수는 객체의 프로퍼티 (선택사항) 이다.
     