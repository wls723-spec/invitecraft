import styled from '@emotion/styled';
import data from '@/data.json';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

// 2026년 12월 1일은 화요일(index 2), 총 31일
const DEC_2026_LEADING_BLANKS = 2;
const DEC_2026_DAYS = 31;

const Calendar = () => {
  const { calendar } = data;
  const cells: Array<number | null> = [
    ...Array<null>(DEC_2026_LEADING_BLANKS).fill(null),
    ...Array.from({ length: DEC_2026_DAYS }, (_, idx) => idx + 1),
  ];

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return (
    <CalendarWrapper>
      <MonthHeader>
        {calendar.year}. {calendar.month}
      </MonthHeader>
      <Grid>
        {WEEKDAYS.map((day, idx) => (
          <WeekdayCell key={day} dayIndex={idx}>
            {day}
          </WeekdayCell>
        ))}
        {cells.map((dateNum, idx) => {
          const dayIndex = idx % 7;
          const isEventDay = dateNum === calendar.day;
          return (
            <DayCell key={idx} dayIndex={dayIndex}>
              {dateNum !== null && (
                <DayBadge isEventDay={isEventDay}>{dateNum}</DayBadge>
              )}
            </DayCell>
          );
        })}
      </Grid>
      <SummaryBox>
        <SummaryMain>{calendar.dateText}</SummaryMain>
        <SummarySub>
          {calendar.timeText} · {calendar.hallText}
        </SummarySub>
      </SummaryBox>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MonthHeader = styled.div`
  font-family: 'HSSanTokki20-Regular', serif;
  font-size: 1.2rem;
  color: #2f2120;
  letter-spacing: 0.06em;
`;

const Grid = styled.div`
  width: 100%;
  max-width: 320px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 6px;
  padding: 14px 10px;
  border-radius: 14px;
  background-color: #fafbf8;
  border: 1px solid #e7ede0;
`;

const WeekdayCell = styled.div<{ dayIndex: number }>`
  font-size: 0.78rem;
  font-weight: 600;
  padding-bottom: 6px;
  color: ${(props) =>
    props.dayIndex === 0 ? '#d97a96' : props.dayIndex === 6 ? '#6b7c65' : '#6e6462'};
`;

const DayCell = styled.div<{ dayIndex: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  font-size: 0.88rem;
  color: ${(props) =>
    props.dayIndex === 0 ? '#d97a96' : props.dayIndex === 6 ? '#5e7059' : '#3a2e2c'};
`;

const DayBadge = styled.span<{ isEventDay: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isEventDay ? '#e88ca6' : 'transparent')};
  color: ${(props) => (props.isEventDay ? '#ffffff' : 'inherit')};
  font-weight: ${(props) => (props.isEventDay ? 700 : 400)};
  box-shadow: ${(props) =>
    props.isEventDay ? '0 3px 10px rgba(232, 140, 166, 0.42)' : 'none'};
`;

const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SummaryMain = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #2f2120;
`;

const SummarySub = styled.div`
  font-size: 0.92rem;
  color: #5b504e;
`;
