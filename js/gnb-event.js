// 버튼의 요소 노드 취득
const menubtn = document.querySelector('header .menu-open');
const closebtn = document.querySelector('.gnb .close');

const gnb = document.querySelector('.gnb');

//클릭 이벤트 생성
menubtn.addEventListaner('click', () => {
    gnb.classList.add('on');
});
closebtn.addEventListaner('click', () => {
    gnb.classList.remove('on');
});