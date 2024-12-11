// table.js

// 오늘 날짜 가져오기
function getAdjustedDate(date, weeks) {
    const result = new Date(date);
    result.setDate(result.getDate() + weeks * 7);
  
    // 주말일 경우 다음 월요일로 조정
    if (result.getDay() === 6) {
      result.setDate(result.getDate() + 2); // 토요일
    } else if (result.getDay() === 0) {
      result.setDate(result.getDate() + 1); // 일요일
    }
  
    return result;
  }
  
  // 날짜 형식화 함수
  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' };
    return date.toLocaleDateString('ko-KR', options);
  }
  
  // 테이블 데이터 추가
  function populateTable() {
    const today = new Date();
    const scheduleBody = document.getElementById('schedule-body');
    const data = [
      { weeks: 0, content: '초기 측정', highlightClass: null },
      { weeks: 4, content: '환자 본인이 주사 맞기', highlightClass: null },
      { weeks: 16, content: '병원(예약) 방문하기', highlightClass: 'highlight-yellow' },
      { weeks: 28, content: '병원(평가) 방문하기', highlightClass: 'highlight-orange' },
      { weeks: 40, content: '환자 본인이 주사 맞기', highlightClass: null },
      { weeks: 52, content: '환자 본인이 주사 맞기', highlightClass: null },
    ];
  
    data.forEach(item => {
      const adjustedDate = getAdjustedDate(today, item.weeks);
      const formattedDate = formatDate(adjustedDate);
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.weeks}주차 (${formattedDate})</td>
        <td>${item.content}</td>
      `;
  
      // 강조된 행에 클래스 추가
      if (item.highlightClass) {
        row.classList.add(item.highlightClass);
      }
  
      scheduleBody.appendChild(row);
    });
  }
  
  // 테이블 채우기 실행
  document.addEventListener('DOMContentLoaded', populateTable);
  