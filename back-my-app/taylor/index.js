import React from 'react';
import { useEffect } from 'react';
import guarda from '.back-my-app/front/guarda';

export default function Taylor() {
  const [valores, setValores] = useState([]); // Array de valores

  useEffect(() => {
    // Obtendo os valores do componente guarda
    const valoresGuardados = guarda();

    // Adicionando os valores ao array de valores
    setValores(valoresGuardados);
  }, [])};

  const calcularTaxaDeJuros = () => {
    // Obtendo o valor da taxa de juros real de equilíbrio
    const e = valores[0][(preenchimento[0] === 'Taxa Real') ? 0 : preenchimento[0]];

    // Obtendo o valor da taxa de inflação atual
    const t = valores[1][(preenchimento[0] === 'IPCA 12m') ? 0 : preenchimento[0]]; // Aplicando a expressão condicional

    // Obtendo o valor da meta de inflação
    const tPrime = valores[2][(preenchimento[0] === 'IPCA Meta') ? 0 : preenchimento[0]];

    // Obtendo o valor do PIB atual
    const y = valores[3][(preenchimento[0] === 'PIB 12m') ? 0 : preenchimento[0]];

    // Obtendo o valor do PIB potencial
    const yPrime = valores[4][(preenchimento[0] === 'PIB Neutro') ? 0 : preenchimento[0]];

    // Calculando a taxa de juros nominal de curto prazo
    return e + t + 0.5 * (t - tPrime) + 0.5 * (y - yPrime);
  }

  app.post('/teste', (req, res) => {
    const taylorValue = process.env.TAYLOR_VARIABLE || 'valor_padrão_caso_nao_exista';

});