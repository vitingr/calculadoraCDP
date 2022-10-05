// Calculo Jornada
function journey(jornada) {
    if (jornada == '220 horas') {
        return jornada = 220
    } else {
        return jornada = 180
    }
}

// Calculo SH 
function valorHora(salario, jornada) {
    return salario / jornada
}

// Calculo Valor Horas Extras
function CalculoHE(valorHora, porcentagem, he) {
    return ((valorHora * porcentagem) * he)
}


// Calculo Valor DSR
function CalculoDSR(valor_he, dias_uteis, dsr) {
    return (valor_he / dias_uteis) * dsr
}

// Calculo Insalubridade
function calculoInsalubridade(insalubridade, jornada, he, faltas) {
    if (insalubridade == 'Não Há Insalubridade') {
        return 0
    } else {
        if (insalubridade == 'Mínimo') {
            return (((jornada + Number(he)) - Number(faltas)) * 0.55)
        } else {
            if (insalubridade == 'Médio') {
                return (((jornada + Number(he)) - Number(faltas)) * 1.10)
            } else {
                if (insalubridade == 'Máximo') {
                    return (((jornada + Number(he)) - Number(faltas)) * 2.20)
                }
            }
        }
    }
}


// Calculo Periculosidade 
function CalculoPericulosidade(periculosidade, salario) {
    if (periculosidade == 'Não há Periculosidade') {
        return 0 
    } else {
        return salario * 0.3
    }
}

// Prioridade entre periculosidade e insalubridade
function ValorMaior(v1, v2) {
    if (v1 >= v2) {
        return v1
    } else {
        if (v1 <= v2) {
            return v2
        } else {
            return v2
        }
    }
}

// Calculo Horas Noturnas
function CalculoNoturno(sh, horas_noturnas) {
    return ((sh * 1.14287) * horas_noturnas) * 0.2
}

// Calcular Total Horas
function HorasMin(horas_he, min_he) {
    return (Number(min_he) / 60) + Number(horas_he)
}

// Salário Família
function SalarioFamilia(salario, filhos) {
    if (salario <= 1655.98) {
        return filhos * 56.47
    } else {
        return 0
    }
}

// Vale Transporte (Gasto Empregado)
function GastoEmpregado(salario, valor_passagens, qtd_passagens) {
    let gasto_total = (valor_passagens * qtd_passagens)
    let gasto_empregado = ((salario / 100) * 6)

    let desconto = (gasto_total - gasto_empregado)
    if (desconto < 0) {
        return gasto_total
    } else {
        if (desconto > 0) {
            return (gasto_total - desconto)
        } else {
            console.log("ERRO!")
        }
    }
}

// Vale Transporte (Gasto Empregador)
function GastoEmpregador(salario, valor_passagens, qtd_passagens) {
    let gasto_total = (valor_passagens * qtd_passagens)
    let gasto_empregado = ((salario / 100) * 6)

    let desconto = gasto_total - gasto_empregado
    if (desconto <= 0) {
        return 0
    } else {
        if (desconto > 1) {
            return desconto
        } else {
            console.log("ERRO!")
        }
    }
}

// INSS
function CalculoINSS(salario_total) {
    if (salario_total > 7087.22) {
        return 828.38
    } else {
        if (salario_total == 1212) {
            return 90.90
        } else {
            if (salario_total > 1212 && salario_total <= 2427.35) {
                let valor1 = salario_total - 1212
                let valor2 = ((valor1 / 100) * 9)
                console.log(valor1)
                console.log(valor2)
                return (casasDecimais(valor2, 2) + 90.90)
            } else {
                if (salario_total > 2427.35 && salario_total <= 3641.03) {
                    let valor1 = 90.90
                    let valor2 = 109.38
                    let valor3 = salario_total - 2427.35
                    let valor4 = ((valor3 / 100) * 12)
                    console.log(valor1)
                    console.log(valor2)
                    console.log(valor3)
                    console.log(valor4)
                    return ((casasDecimais(valor4, 2)) + 90.90 + 109.38)
                } else {
                    if (salario_total > 2641.03 <= 7087.22) {
                        let valor1 = 90.90
                        let valor2 = 109.38
                        let valor3 = 145.64
                        let valor4 = salario_total - 3641.03
                        let valor5 = ((valor4 / 100) * 14)
                        return ((casasDecimais(valor5, 2)) + 90.90 + 109.38 + 145.64)
                    }
                }
            }
        }
    }
}

// Função Não Arrendondar

function casasDecimais(num, precisao) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};

console.log(casasDecimais(10.56785, 2))

// Salário Total
let botao = document.querySelector(".enviar")
botao.addEventListener("click", (e) => {

    let oculto = document.querySelector('.oculto')
    oculto.style.display = 'block'

    // Varíaveis 
    let salario = document.querySelector("#salario-base").value
    let porcentagem = document.querySelector("#porcentagem").value
    let jornada = document.querySelector("#jornada").value
    let horas_he = document.querySelector("#horas-extras").value
    let min_he = document.querySelector("#minutos-extras").value
    let faltas = document.querySelector("#faltas").value
    let dias_uteis = document.querySelector("#dias-uteis").value
    let dsr =  document.querySelector("#dsr").value
    let insalubridade = document.querySelector("#insalubridade").value
    let periculosidade = document.querySelector("#periculosidade").value
    let horas_noturnas = document.querySelector("#horas-noturnas").value
    let filhos = document.querySelector('#qtd-filhos').value
    let valor_passagens = document.querySelector("#valor-passagem").value
    let qtd_passagens = document.querySelector("#qtd-passagens").value

    // Cálculos
    let he = HorasMin(horas_he, min_he)
    let jornadaHoras = journey(jornada)
    let sh = valorHora(salario, jornadaHoras)
    let valorHe = CalculoHE(sh, porcentagem, he)
    let valorDSR = CalculoDSR(valorHe, dias_uteis, dsr)
    let valorPericulosidade = CalculoPericulosidade(periculosidade, salario)
    let valorInsalubridade = calculoInsalubridade(insalubridade, jornadaHoras, he, faltas)
    let maior = ValorMaior(valorPericulosidade, valorInsalubridade)
    let valorNoturno = CalculoNoturno(sh, horas_noturnas)
    let Salario_Familia = SalarioFamilia(salario, filhos)
    let gasto_empregado = GastoEmpregado(salario, valor_passagens, qtd_passagens)
    let gasto_empregador = GastoEmpregador(salario, valor_passagens, qtd_passagens)
    let total = (Number(salario))
    if (salario <= 1655.98) {
        total += Number(Salario_Familia)
    } else {
        console.log("Não recebe!")
    }
    
    if (Number(valorHe) > 0) {
        total += Number(valorHe)
    } else {
        total = total
    }

    if (Number(valorDSR) > 0) {
        total += Number(valorDSR)
    } else {
        total = total
    }

    if (Number(maior) > 0) {
        total += Number(maior)
    } else {
        total = total
    }

    if (Number(valorNoturno) > 0) {
        total += Number(valorNoturno)
    } else {
        total = total
    }

    if (Number(gasto_empregado) > 0) {
        total += Number(gasto_empregado)
    } else {
        total = total
    }
    let desconto_inss = CalculoINSS(total)
    console.log(total)

    // RESPOSTAS 

    let valor_salario_base = Number(salario)
    let valor_beneficios = Number(total) - Number(salario)
    let valor_descontos = Number(gasto_empregado + desconto_inss)
    let valor_salario_total = (total - valor_descontos)
    let dados1 = document.querySelector('#value-salario-base').innerHTML = `R$ ${valor_salario_base.toFixed(2)}`
    let dados2 = document.querySelector('#value-beneficios').innerHTML = `R$ ${valor_beneficios.toFixed(2)}`
    let dados3 = document.querySelector('#value-descontos').innerHTML = `R$ ${valor_descontos.toFixed(2)}`
     
    let info1 = document.querySelector("#salario-total").innerHTML = `R$ ${valor_salario_total.toFixed(2)}`
    let info2 = document.querySelector("#valor-he").innerHTML = `R$ ${valorHe.toFixed(2)}`
    let info3 = document.querySelector("#valor-dsr").innerHTML = `R$ ${valorDSR.toFixed(2)}`
    let info4 = document.querySelector("#valor-insalubridade").innerHTML = `R$ ${valorInsalubridade.toFixed(2)}`
    let info5 = document.querySelector("#valor-periculosidade").innerHTML = `R$ ${valorPericulosidade.toFixed(2)}`
    let info6 = document.querySelector("#valor-salario-familia").innerHTML = `R$ ${Salario_Familia}`
    let info7 = document.querySelector("#valor-noturno").innerHTML = `R$ ${valorNoturno.toFixed(2)}`
    let info8 = document.querySelector("#valor-vt-empregado").innerHTML = `R$ ${gasto_empregado.toFixed(2)}`
    let info9 = document.querySelector("#valor-vt-empregador").innerHTML = `R$ ${gasto_empregador.toFixed(2)}`
    let info10 = document.querySelector("#valor-desconto-inss").innerHTML = `R$ ${desconto_inss.toFixed(2)}`
})
             
