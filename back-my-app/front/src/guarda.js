import React, { useState } from 'react';

export default function Guarda({ valor, preenchimento }) {
  const [inputValue, setInputValue] = useState('');
  setInputValue(valor);

}