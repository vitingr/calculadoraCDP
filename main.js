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

function calculoInsalubridade(insalubridade, jornada, he, faltas_justificadas, faltas_injustificadas) {
    let faltas = totalFaltas(jornada, faltas_justificadas, faltas_injustificadas)
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

// Calculo Valor Falta

function totalFaltas(jornada, faltas_justificadas, faltas_injustificadas) {
    if (jornada == 180) {
        return ((Number(faltas_injustificadas) + Number(faltas_justificadas)) * 6)
        
    } else {
        if (jornada == 220) {
            return ((Number(faltas_injustificadas) + Number(faltas_justificadas)) * 8)
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
    return (((horas_noturnas / 52.5) * 60) * sh.toFixed(2)) * 0.2
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
                return (casasDecimais(valor2, 2) + 90.90)
            } else {
                if (salario_total > 2427.35 && salario_total <= 3641.03) {
                    let valor1 = 90.90
                    let valor2 = 109.38
                    let valor3 = salario_total - 2427.35
                    let valor4 = ((valor3 / 100) * 12)
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

// Calculo Falta Dia
function faltaDia(salario, jornada, faltas_injustificadas) {
    return ((salario / jornada) * ((jornada/ 30) * faltas_injustificadas))
}

// Calculo Falta DSR
function faltaDSR(salario, jornada, dsr) {
    return ((salario / jornada) * ((jornada/ 30) * dsr))
}

// Calculo Pensão 
function valorPensao(salario, porcentagemPensao) {
    return ((salario / 100) * porcentagemPensao)
}

// Função FGTS 
function valorFGTS(base) {
    return ((base / 100) * 8)
}

// Valor Dependentes 
function valorDependentes(dependentes) {
    return (Number(dependentes) * 189.59)
}

// Valor IRRF 
function valorIRRF(base) {
    if (base <= 1903.98) {
        return 0
    } else {
        if (base >= 1903.98 && base <= 2826.65) {
            return (((base / 100) * 7.5) - 142.80)
        } else {
            if (base >= 2826.65 && base <= 3751.05) {
                return (((base / 100) * 15) - 354.80)
            } else {
                if (base >= 3751.05 && base <= 4664.68) {
                    return (((base / 100) * 22.5) - 636.13)
                } else {
                    if (base > 4664.68) {
                        return (((base / 100) * 27.5) - 869.36)
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
    let faltas_justificadas = document.querySelector("#faltas-justificadas").value
    let faltas_injustificadas = document.querySelector("#faltas-injustificadas").value
    let dias_uteis = document.querySelector("#dias-uteis").value
    let dsr =  document.querySelector("#dsr").value
    let insalubridade = document.querySelector("#insalubridade").value
    let periculosidade = document.querySelector("#periculosidade").value
    let horas_noturnas = document.querySelector("#horas-noturnas").value
    let filhos = document.querySelector('#qtd-filhos').value
    let valor_passagens = document.querySelector("#valor-passagem").value
    let qtd_passagens = document.querySelector("#qtd-passagens").value
    let dsrFalta = document.querySelector("#descontar-dsr").value
    let porcentagemPensao = document.querySelector("#pensao").value
    let filhos_maiores = document.querySelector('#qtd-filhos-maiores').value

    // Cálculos
    let he = HorasMin(horas_he, min_he)
    let jornadaHoras = journey(jornada)
    let sh = valorHora(salario, jornadaHoras)
    let valorHe = CalculoHE(sh, porcentagem, he)
    let valorDSR = CalculoDSR(valorHe, dias_uteis, dsr)
    let valorPericulosidade = CalculoPericulosidade(periculosidade, salario)
    let valorInsalubridade = calculoInsalubridade(insalubridade, jornadaHoras, he, faltas_justificadas, faltas_injustificadas)
    let maior = ValorMaior(valorPericulosidade, valorInsalubridade)
    let valorNoturno = CalculoNoturno(sh, horas_noturnas)
    let Salario_Familia = SalarioFamilia(salario, filhos)
    let gasto_empregado = GastoEmpregado(salario, valor_passagens, qtd_passagens)
    let gasto_empregador = GastoEmpregador(salario, valor_passagens, qtd_passagens)
    let falta_dia = faltaDia(salario, jornadaHoras, faltas_injustificadas)
    let falta_dsr = faltaDSR(salario, jornadaHoras, dsrFalta)
    let pensao = valorPensao(salario, porcentagemPensao)
    let totalVencimentos = (Number(salario))
    if (salario <= 1655.98) {
        totalVencimentos += Number(Salario_Familia)
    } else {
        console.log("Não recebe!")
    }
    
    if (Number(valorHe) > 0) {
        totalVencimentos += Number(valorHe)
    } else {
        totalVencimentos = totalVencimentos
    }

    if (Number(valorDSR) > 0) {
        totalVencimentos += Number(valorDSR)
    } else {
        totalVencimentos = totalVencimentos
    }

    if (Number(maior) > 0) {
        totalVencimentos += Number(maior)
    } else {
        totalVencimentos = totalVencimentos
    }

    if (Number(valorNoturno) > 0) {
        totalVencimentos += Number(valorNoturno)
    } else {
        totalVencimentos = totalVencimentos
    }

    let base_fgts_inss = totalVencimentos - (falta_dia + falta_dsr)
    let base_irrf = (Number(totalVencimentos) - (Number(falta_dia) + Number(falta_dsr)))
    let desconto_inss = CalculoINSS(base_fgts_inss)
    let baseFgts = (totalVencimentos - (falta_dia + falta_dsr))
    let baseDoIRRF = (totalVencimentos - (falta_dia + falta_dsr))
    let fgts = valorFGTS(baseFgts)
    let dependentes = Number(filhos) + Number(filhos_maiores)
    let valorDependente = valorDependentes(dependentes)
    let baseIRRF = (Number(base_irrf) - (Number(desconto_inss) + Number(pensao) + Number(valorDependente)))
    let irrf = valorIRRF(baseIRRF)

    // RESPOSTAS 

    let valor_salario_base = Number(salario)
    let valor_vencimentos = Number(totalVencimentos)
    let valor_descontos = Number(gasto_empregado + desconto_inss + pensao + irrf + falta_dsr + falta_dia)
    let valor_salario_total = (totalVencimentos - valor_descontos)
    let dados1 = document.querySelector('#value-salario-base').innerHTML = `R$ ${valor_salario_base.toFixed(2)}`
    let dados2 = document.querySelector('#value-beneficios').innerHTML = `R$ ${valor_vencimentos.toFixed(2)}`
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
    let info11 = document.querySelector("#valor-desconto-fgts").innerHTML = `R$ ${fgts.toFixed(2)}`
    let info12 = document.querySelector("#valor-desconto-irrf").innerHTML = `R$ ${irrf.toFixed(2)}`
    let info13 = document.querySelector("#valor-desconto-pensao").innerHTML = `R$ ${pensao.toFixed(2)}`
    let info14 = document.querySelector("#valor-desconto-dsr").innerHTML = `R$ ${falta_dsr.toFixed(2)}`
    let info15 = document.querySelector("#valor-desconto-dia").innerHTML = `R$ ${falta_dia.toFixed(2)}`
})
             
