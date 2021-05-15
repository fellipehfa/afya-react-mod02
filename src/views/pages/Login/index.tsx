import React from 'react';

import FormSignIn from "../../../components/FormSignIn"
import { LoginContent } from './styles'

const Login: React.FC = () => {
  return (
      <LoginContent>
           <FormSignIn/>
      </LoginContent>
  );
}

export default Login;