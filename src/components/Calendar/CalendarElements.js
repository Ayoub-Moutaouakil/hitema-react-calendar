import styled from "styled-components";

export const CalendarContainer = styled.section`
    width: 100%;
    height: 90vh;
    background: linear-gradient(180deg, hsla(193, 95%, 68%, 1) 0%, hsla(277, 74%, 24%, 1) 100%);
`

export const CalendarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const CalendarCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.monthCell ? "left" : "center"};
    user-select: none;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    height: 10vh;
    ${props => props.monthCell ? "grid-column: span 3 / span 3;" : ""}
    ${props => props.monthCell ? "padding-left: 100px;" : ""}
    ${props => props.isActive ? "background-color: purple;" : ""}
`

export const CalendarActiveCell = styled.div`
    width: 18%;
    height: 50%;
    background-color: purple;
    border-radius: 100%;
`

export const CalendarDateText = styled.h1`
    font-family: 'Segoe UI Variable Display';
    color: black;
    cursor: pointer;
`

export const CalendarDaysText = styled.h2`
    font-family: 'Segoe UI Variable Text';
    color: white;
    font-size: 20px;
    cursor: pointer;
`

export const CalendarNumsText = styled.h3`
    font-family: 'Segoe UI Variable Small';
    color: ${props => props.isActive ? "black" : "white"};
    font-size: 15px;
    cursor: pointer;
`


