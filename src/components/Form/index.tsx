import React, { FormEvent, useCallback, useState } from 'react';
import { toast } from "react-toastify";
import { CardContent } from './styles';



interface IFormPostData {
    name: string;
    username: string;
    email: string;
    password: string;
}

const Form: React.FC = () => {

    const [formDataContent, setFormDataContent] = useState<IFormPostData>({} as IFormPostData)

    const postSignUpData = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            toast.success(formDataContent.name)
            toast.success(formDataContent.username)
            toast.success(formDataContent.email)
            toast.success(formDataContent.password)
        }, [formDataContent]
    )

    return (
        <CardContent>
 
            <form onSubmit={postSignUpData}>
                <input type="text" placeholder="Seu nome" onChange={e => { setFormDataContent({ ...formDataContent, name: e.target.value }) }} />
                <input type="text" placeholder="User name" onChange={e => { setFormDataContent({ ...formDataContent, username: e.target.value }) }} />
                <input type="email" placeholder="email" onChange={e => { setFormDataContent({ ...formDataContent, email: e.target.value }) }} />
                <input type="password" placeholder="Senha" onChange={e => { setFormDataContent({ ...formDataContent, password: e.target.value }) }} />
                <button type="submit">Enviar</button>
            </form>
        </CardContent>
    );
}

export default Form;