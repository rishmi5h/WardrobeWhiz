import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Calendar: React.FC = () => {
  return (
    <CalendarContainer>
      <h1>Calendar</h1>
      <CalendarGrid>{/* Calendar days will be mapped here */}</CalendarGrid>
    </CalendarContainer>
  );
};

export default Calendar;
