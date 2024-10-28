function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
  const salarioBase = getSalarioBase(horasTrabalhadas, valorHora);

  const salarioComBonus = getSalarioComBonus(salarioBase, cargo);

  const desconto = 300;
  const salarioComDesconto = addDesconto(salarioComBonus, desconto);

  const salarioFinal = calcularSalarioFinal(salarioComDesconto);

  return salarioFinal;
}

function getSalarioBase(horasTrabalhadas, valorHora) {
  return horasTrabalhadas * valorHora;
}

function getBonusPorCargo(cargo) {
  switch (cargo) {
    case "gerente": {
      const bonus = 1000;
      return bonus;
    }
    case "supervisor": {
      const bonus = 500;
      return bonus;
    }
    default: {
      const bonus = 200;
      return bonus;
    }
  }
}

function getSalarioComBonus(salario, cargo) {
  const bonus = getBonusPorCargo(cargo);
  return salario + bonus;
}

function addDesconto(salario, desconto) {
  return salario - desconto;
}

function calcularSalarioFinal(salario) {
  const maxTier1 = 5000;
  if (salario > maxTier1) {
    const rate = 0.27;
    salario = salario - (salario * rate);
    return salario;
  }
  const maxTier2 = 3000;
  if (salario > maxTier2) {
    const rate = 0.27;
    salario = salario - (salario * rate);
    return salario;
  }
  const rate = 0.27;
  salario = salario - (salario * rate);
  return salario;
}
const horasTrabalhadas = 160;
const valorHora = 25;
const salario = calcularSalarioFuncionario(horasTrabalhadas, valorHora, "gerente");
console.log(`O salário final é: ${salario}`);
