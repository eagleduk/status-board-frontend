import { styled } from "styled-components";
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

export const ScheduleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ScheduleItemsStyled = styled.div<{ $status: "passed" | "ready" }>`
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  opacity: ${(prop) => (prop.$status === "passed" ? 0.4 : 1)};
`;

export const ScheduleItemTitleStyled = styled.h1`
  padding: 10px 0px 10px 30px;
  background-color: blue;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;

export const ScheduleItemRowsStyled = styled.ul`
  padding: 8px 5px;
  box-sizing: border-box;
`;

export const ScheduleItemStyled = styled.li`
  padding: 10px 0;
  box-sizing: border-box;
  border-top: 1px solid black;
  &:first-child {
    border-top: 1px solid white;
    margin: 0;
  }

  h4 {
    font-size: 1.4rem;
    padding: 0 15px 0 5px;
  }

  div {
    display: flex;
    font-size: 1.8rem;
    justify-content: space-between;
    padding: 3px 10px;
    p {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    span {
      font-size: 3rem;
      color: red;
    }
  }
`;
