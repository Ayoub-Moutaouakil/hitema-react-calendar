import { useState } from "react";
import { FormContainer, FormInput, FormInputTitle, FormTitle, FormWrapper, FormInputButton } from "./FormElements";

const Form = () => {

    const [form, setForm] = useState({
        titre: "",
        commentaire: "",
        date: "",
    });
    
    return (
        <FormContainer>
            <FormWrapper>
                <FormTitle>Réserver un rendez vous</FormTitle>
                <FormInputTitle>Titre</FormInputTitle>
                <FormInput value={form.titre} />

                <FormInputTitle>Commentaire</FormInputTitle>
                <FormInput value={form.commentaire} />

                <FormInputTitle>Date</FormInputTitle>
                <FormInput type={"date"} onChange={(value) => console.log(value.value)}/>

                <FormInputButton type={"button"} value={"Réserver"}/>
            </FormWrapper>
        </FormContainer>
    );
}

export default Form;