예시는 애플 계산기이지만 삼성 계산기 포맷으로 만들 것이다

document.querySelector(selector);
: 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫번째 요소를 반환
document.querySelectorAll();
: 지정된 셀렉터 그룹에 일치하는 문서의 요소를 나타내는 정적리스트 반환
document.queryCommandEnabled(command);
활성화 되어있으면 true를 boolean 값으로 반환하고 비활성화 되어잇으면 false를 반환한다.
document.queryCommandState(command);
여기서 command는 document.execCommand()에서 온다
boolean 값을 반환하거나 정의되지 않았으면 null값을 반환한다.

.matches('selector');
: 요소에 해당 선택자가 있는지 확인하고 true/false