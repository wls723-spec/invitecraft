import styled from '@emotion/styled';
import data from '@/data.json';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
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
        {calendar.year} . {calendar.month}
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
`;

const MonthHeader = styled.div`
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--ink);
  margin-bottom: 18px;
`;

const Grid = styled.div`
  width: 100%;
  max-width: 320px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 6px;
  padding: 18px 4px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
`;

const WeekdayCell = styled.div<{ dayIndex: number }>`
  font-size: 0.76rem;
  font-weight: 500;
  padding-bottom: 8px;
  color: ${(props) =>
    props.dayIndex === 0 ? '#a66d63' : props.dayIndex === 6 ? '#53687e' : 'var(--muted)'};
`;

const DayCell = styled.div<{ dayIndex: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  font-size: 0.88rem;
  font-variant-numeric: tabular-nums;
  color: ${(props) =>
    props.dayIndex === 0 ? '#a66d63' : props.dayIndex === 6 ? '#53687e' : 'var(--ink)'};
`;

const DayBadge = styled.span<{ isEventDay: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isEventDay ? 'var(--accent)' : 'transparent')};
  color: ${(props) => (props.isEventDay ? '#ffffff' : 'inherit')};
  font-weight: ${(props) => (props.isEventDay ? 600 : 400)};
`;

const SummaryBox = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SummaryMain = styled.div`
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
`;

const SummarySub = styled.div`
  font-size: 0.88rem;
  color: var(--muted);
`;
