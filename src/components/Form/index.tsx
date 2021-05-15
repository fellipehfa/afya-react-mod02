import React, { useState, useCallback } from 'react';

import { CardContent } from './styles';

const Form: React.FC = () => {
  return (
      <CardContent>
          <form action="">
              <input type="text" />
              <input type="text" />
              <button type="submit">Enviar</button>
          </form>
      </CardContent>
  );
}

export default Form;