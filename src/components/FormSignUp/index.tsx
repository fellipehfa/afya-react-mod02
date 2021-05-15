import React, { FormEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { toast } from "react-toastify";
import api from "../../service/api"
import { CardContent } from './styles';

interface IFormPostData {
    cpf: string;
    login: string;
    nome: string;
    senha: string;
}

const Form: React.FC = () => {

    const [formDataContent, setFormDataContent] = useState<IFormPostData>({} as IFormPostData)

    const [isLoad, setIsLoad] = useState<boolean>(false)

    const history = useHistory()

    const postSignUpData = useCallback(
        (e?: FormEvent<HTMLFormElement>) => {
            e?.preventDefault();
            setIsLoad(!isLoad)

            api.post("usuarios", formDataContent).then(
                response => {
                    toast.success('Cadastro realizado com sucesso!')
                    setTimeout(() => {
                        history.push('/login')
                    }, 1500)

                }
            ).catch(err => {
                toast.error("Ooops, falha no engano!")
            }).finally(() => setIsLoad(false))
        }, [formDataContent, isLoad, history]
    )

    return (
        <>
            <CardContent>
                {isLoad ?
                    (
                        <p>Carregando...</p>
                    ) : (

                        <form onSubmit={postSignUpData}>
                            <input type="text" placeholder="Seu nome" onChange={e => { setFormDataContent({ ...formDataContent, nome: e.target.value }) }} />
                            <input type="text" placeholder="LoginID" onChange={e => { setFormDataContent({ ...formDataContent, login: e.target.value }) }} />
                            <input type="text" placeholder="Numero de CPF" onChange={e => { setFormDataContent({ ...formDataContent, cpf: e.target.value }) }} />
                            <input type="password" placeholder="Senha" onChange={e => { setFormDataContent({ ...formDataContent, senha: e.target.value }) }} />
                            <button type="submit">Enviar</button>
                        </form>
                    )}
            </CardContent>
        </>
    );
}

export default Form;