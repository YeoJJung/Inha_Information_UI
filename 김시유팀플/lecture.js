var time;
var date;
var dayOfWeek;

// <선택한 날짜가 주말인지 아닌지 판정하는 함수>
function getDayOfWeek(date){ 
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    dayOfWeek = week[new Date(date).getDay()];
    //원본은 const형 변수로 받았음 
    return dayOfWeek;

}
// <초기 날짜 세팅: 오늘 날짜로>
document.getElementById("checkedDate").valueAsDate = new Date();

// <선택한 시간 저장>
const timeOptionEls = document.getElementById("time"); 
const timeClickEvent = () =>{
    time = timeOptionEls.options[timeOptionEls.selectedIndex].value;
}
timeOptionEls.addEventListener("onchange", timeClickEvent);

// <선택한 날짜 저장>
const dateOptionEl = document.getElementById("checkedDate");
const dateClickEvent = () =>{
    date = dateOptionEl.value;

    //만약 주말을 선택했다면 정보가 없다는 알림을 띄움
    if(getDayOfWeek(date) ==="토" || getDayOfWeek(date) ==="일" ){
        alert("정보가 존재하지 않습니다.");
    }
}

// <timetable 디폴트 설정: 보이지 않음> 
document.getElementById("timetable").style.display = 'none';

// <조회 버튼 눌렀을 때 강의실 정보 표시>
function setTimetable(){
    var target = document.getElementById("timetableList");
          var li = target.getElementsByTagName("li");
          for(var i = 0; i<li.length; i++){
            li[i].innerText = "test";
          }
    //설정 이후 화면에 보이게
    document.getElementById("timetable").style.display = 'block'; 
}