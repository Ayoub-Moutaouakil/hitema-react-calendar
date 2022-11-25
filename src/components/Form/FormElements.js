import styled from "styled-components";

export const FormContainer = styled.section`
    width: 100%;
    height: 90vh;
    background: linear-gradient(180deg, hsla(193, 95%, 68%, 1) 0%, hsla(277, 74%, 24%, 1) 100%);
`

export const FormWrapper = styled.form`
    display: grid;
    align-items: center;
    justify-content: center;
`

export const FormTitle = styled.h1`
    font-family: 'Segoe UI Variable Display';
    color: black;
    text-align: center;
`

export const FormInputTitle = styled.h2`
    font-family: 'Segoe UI Variable Text';
    color: white;
    font-size: 20px;
`

export const FormInput = styled.input`
    width: 540px;
    height: 3vh;
    color: grey;
`

export const FormInputButton = styled.input`
    width: 200px;
    height: 3vh;
    justify-self: center;
    margin-top: 30px;
    font-family: 'Segoe UI Variable Display';
`