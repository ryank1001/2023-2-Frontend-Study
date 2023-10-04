css에서
.으로 시작하는 클래스는 공통적으로 적용되는 것을 기술하며, 한번만 적용
#으로 시작하는 id는 클래스보다 우선적으로 적용하며, 여러군데 적용 가능

color codes 색상 코드

가장 많이 사용하는 방식으로 #으로 시작, 
숫자랑 문자(a~f)로 조합한 색상 고유의 여섯 자리 코드를 입력한다

> #ff0000, #ffff00, #ffffff
> 빨강, 초록, 파랑의 세기를 각각 두자리씩 (00~ff)표시

​
rgb 색상 코드

16진수 대신 평소에 10진수로 각 빛의 세기를 표시
0 ~ 255 사이의 값 사용

rgb(0~255, 0~255, 0~255)

​
rgba ( 투명도 적용 가능 )

rgb 표기에다가 불투명도(Alpha)를 추가
불투명도 0 ~ 1 사이의 소수점 숫자
> rgba(0~255, 0~255, 0~255, 0~1)


화면을 표시하는 단위에는 절대단위와 상대단위가 있다.
절대단위 : px
상대단위 : %, rem, em

px(픽셀) : 화면을 표시하는 가장 작은 정사각형 단위
해상도 : 화면에 가로px*세로px 로 표현

% : 부모 태그에 대해서 상대적인 크기를 표현한다
em : 인쇄에서 전통적으로 'M' 의 크기이며 상위 요소의 폰트 사이즈를 상속받는다.
rem : 최상위 요소의 폰트 사이즈를 상속받는다

css 방향 그라디언트
- 아래 방향 그라디언트
  > background-image : linear-gradient(rgb(0, 0, 255), (0, 125, 180));

- 우측 방향 그라디언트
  > background-image : linear-gradient(90deg, rgb(0, 0, 255), (0, 125, 180));


박스로 구성된 html은
margin > border > padding > content 순이며
1. padding : 16px 8px 4px 10px; (상 우 하 좌 순서)
2. padding-top : 16px;
   padding-right : 8px;
   padding-bottom : 4px;
   padding-left : 10px;
로 쓸 수 있으며 margin도 같은 방법으로 표기한다


html 리스트
1. 순서 리스트 (Ordered List)
> <ol>
>   <li> ... </li>
>   <li> ... </li>
> </ol>

2. 일반 리스트 (Unordered List)
> <ul>
>   <li> ... </li>
>   <li> ... </li>
> </ul>