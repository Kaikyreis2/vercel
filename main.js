const perguntaRadio = document.querySelectorAll(".inputPergunta")
const buttonConfirmar = document.querySelector(".buttonConfirmar")
const buttonNext = document.querySelector(".buttonProxima")
const perguntaFrase = document.querySelector(".perguntaFrase")
const competencias = [

    ["camara", "Legislar sobre tributos municipais, isenções, anistias fiscais, remissões de dívidas e suspensão da cobrança da dívida ativa;"],
    ["camara", "Votar o Plano Plurianual, as Diretrizes Orçamentárias e os Orçamentos Anuais, bem como autorizar abertura de créditos suplementares e especiais;"],
    ["camara", "Votar a Lei de Diretrizes Gerais de Desenvolvimento Urbano, o Plano Diretor, o Plano de Controle e Uso, do Parcelamento e de Ocupação do Solo Urbano e o Código de Obras Municipal;"],
    ["camara", "Deliberar sobre obtenção e concessão de empréstimos e operações de créditos, bem como a forma e os meios de pagamento;"],
    ["camara", "Autorizar subvenções;"],
    ["camara", "Autorizar a concessão e permissão de serviços públicos, bem como a concessão de obras públicas;"],
    ["camara", "Autorizar a aquisição de bens imóveis, salvo quando se tratar de doação sem encargos;"],
    ["camara", "Autorizar a cessão e concessão de uso de bens municipais, por prazo superior a 06 (seis) meses;"],
    ["camara", "Autorizar o uso de bens municipais;"],
    ["camara", "Autorizar a alienação de bens imóveis, vedada a doação sem encargos;"],
    ["camara", "Autorizar o comércio com outros municípios;"],
    ["camara", "Atribuir denominação a próprios, vias e logradouros públicos;"],
    ["camara", "Estabelecer critérios para delimitação de perímetro urbano;"],
    ["camara", "Autorizar convênios que importem em despesas não previstas no orçamento anual ou que impliquem criação de entidades dotadas de personalidade jurídica de direito público ou privado;"],
    ["camara", "Fixar o número de Vereadores para as próximas Legislaturas, observados os limites estabelecidos na Constituição Federal e as demais normas;"],
    ["camara", "Autorizar a criação e extinção de empresas públicas, fundações e autarquias;"],
    ["camaraExclusiva", "Eleger a Mesa Diretora, bem como destituí-la na forma regimental;"],
    ["camaraExclusiva", "Elaborar o Regimento Interno;"],
    ["camaraExclusiva", "Dar posse ao Prefeito, ao Vice-Prefeito e aos Vereadores;"],
    ["camaraExclusiva", "Conceder licença ao Prefeito, ao Vice-Prefeito e aos Vereadores;"],
    ["camaraExclusiva", "Organizar os serviços administrativos;"],
    ["camaraExclusiva", "Fixar para Legislatura subsequente, a remuneração dos Vereadores, do Prefeito, do Vice-Prefeito, segundo os padrões fixos de vencimentos, vedada a instituição de parte variável, tal como a decomposição em verbas indenizatórias e outras, admitida sempre a atualização monetária;"],
    ["camaraExclusiva", "Criar comissões especiais de inquérito sobre fato determinado que se inclua na competência Municipal, sempre que requerer, pelo menos, um terço de seus membros;"],
    ["camaraExclusiva", "Solicitar informações ao Prefeito sobre assuntos referentes à administração;"],
    ["camaraExclusiva", "Convocar o Prefeito Municipal, bem como o Vice-Prefeito e Secretários Municipais para, pessoalmente, prestarem informações sobre matéria previamente determinada e de sua competência;"],
    ["camaraExclusiva", "Outorgar, pelo voto, de no mínimo, dois terços de seus membros, títulos e honrarias previstas em Lei, a pessoas que, reconhecidamente, tenham prestado relevantes serviços ao Município;"],
    ["camaraExclusiva", "Julgar anualmente, as contas prestadas pelo Prefeito e pela Mesa Diretora, em noventa dias após a apresentação do parecer prévio pela corte de contas competente;"],
    ["camaraExclusiva", "Proceder a convocação do Prefeito, quando não apresentadas as contas no prazo legal, sujeitando-se este às sanções cabíveis;"],
    ["camaraExclusiva", "Estabelecer normas sobre despesas destinadas a Vereadores em missão de representação da Câmara;"],
    ["camaraExclusiva", "Sustar os atos normativos do Poder Executivo que exorbitarem do poder regularmente;"],
    ["comissao", "Oferecer parecer sobre projeto de lei;"],
    ["comissao", "Realizar audiências públicas com entidades privadas;"],
    ["comissao", "Convocar Secretário Municipal para prestar pessoalmente informações sobre matéria previamente determinada e de sua competência;"],
    ["comissao", "Receber petições, reclamações, representações ou queixas de qualquer pessoa contra atos ou omissões das autoridades da Administração direta ou indireta do Município, adotando as medidas pertinentes;"],
    ["comissao", "Colher o depoimento de qualquer autoridade ou cidadão;"],
    ["comissao", "Apreciar programa de obras, planos municipais, distritais e setoriais de desenvolvimento e sobre eles emitir parecer;"],
    ["comissao", "Requisitar todo e qualquer termo de contrato, sessão, permissão de uso, celebrado com pessoa jurídica ou física;"],
    ["mesaDiretora", "Elaborar e encaminhar ao Prefeito a proposta orçamentária da Câmara Municipal, a ser incluída na proposta do município e fazer, mediante ato a discriminação analítica das dotações respectivas bem como alterá-las, quando necessário;"],
    ["mesaDiretora", "Suplementar, mediante ato, as dotações do orçamento da Câmara Municipal, observando o limite da autorização constante da lei orçamentária, desde que os recursos para sua abertura sejam provenientes de anulação total ou parcial de suas dotações;"],
    ["mesaDiretora", "Devolver à Fazenda Municipal, até o dia 31 de dezembro, o saldo do município que lhe foi liberado durante o exercício para a execução do seu orçamento;"],
    ["mesaDiretora", "Enviar ao Tribunal de Contas, até o dia 1º (primeiro) de março, as contas do exercício anterior;"],
    ["mesaDiretora", "Enviar ao Prefeito, até o dia 10 (dez) do mês seguinte, os balancetes financeiros e suas despesas orçamentárias relativas ao mês anterior, a fim de serem incorporados os balancetes do Município;"],
    ["mesaDiretora", "Administrar os recursos organizacionais, humanos, materiais e financeiros da Câmara Municipal;"],
    ["mesaDiretora", "Designar vereadores para missão de representação da Câmara Municipal;"],
    ["mesaDiretora", "Nomear assessores legislativos para cada vereador;"],
    ["prefeito", "Iniciar processo legislativo, na forma e casos previstos nesta Lei Orgânica;"],
    ["prefeito", "Representar o município, sendo em juízo por procuradores habilitados;"],
    ["prefeito", "Sancionar, promulgar e fazer publicar as leis, bem como expedir decretos e regulamentos para sua fiel execução;"],
    ["prefeito", "Nomear e exonerar os Secretários Municipais e os Diretores de órgãos da Administração Pública direta e indireta;"],
    ["prefeito", "Vetar, no todo ou em parte, os projetos de lei aprovados pela Câmara;"],
    ["prefeito", "Decretar, nos termos da Lei, a desapropriação por necessidade, ou utilidade pública ou por interesse social;"],
    ["prefeito", "Expedir decretos, portarias e outros atos administrativos;"],
    ["prefeito", "Permitir ou autorizar o uso de bens municipais, por terceiros, autorizados pela Câmara Municipal;"],
    ["prefeito", "Autorizar convênios com entidades públicas e particulares;"],
    ["prefeito", "Declarar o estado de Calamidade Pública;"],
    ["prefeito", "Prover os Cargos Públicos e expedir os demais atos referentes à situação funcional dos Servidores nos termos da Lei;"],
    ["prefeito", "Enviar à Câmara Municipal o Plano Plurianual de investimentos, o Projeto de Lei de Diretrizes Orçamentárias e as Propostas de Orçamento previstos na Lei, nos termos que se refere o art. 165, parágrafo 9º, da Constituição Federal;"],
    ["prefeito", "Prestar, anualmente, à Câmara Municipal, dentro de sessenta dias após a abertura do ano legislativo, as contas referentes ao exercício anterior e remetê-las, em igual prazo à Corte competente;"],
    ["prefeito", "Prestar à Câmara, dentro de quinze dias, as informações pela mesma solicitadas, salvo prorrogação a seu pedido e por prazo determinado, em face da complexidade da matéria ou da dificuldade da obtenção, nas respectivas fontes, de dados necessários ao atendimento do pedido;"],
    ["prefeito", "Aplicar multas previstas em Lei e contratos;"],
    ["prefeito", "Encaminhar à Câmara, até o dia 15 de abril, a prestação de contas, bem como balanços do exercício findo;"],
    ["prefeito", "Encaminhar aos órgãos competentes os Planos de Aplicação e as prestações de contas exigidas por Lei;"],
    ["prefeito", "Fazer publicar os atos oficiais;"],
    ["prefeito", "Superintender a arrecadação dos tributos, bem como a guarda e aplicação da receita autorizando as despesas e pagamentos dentro das disponibilidades orçamentárias ou dos créditos votados pela Câmara;"],
    ["prefeito", "Colocar à disposição da Câmara, dentro de dez dias de sua requisição, as quantias que devam ser despendidas de uma só vez e até o dia vinte de cada mês, os recursos correspondentes as suas dotações orçamentárias, compreendendo os créditos suplementares e especiais;"],
    ["prefeito", "Resolver sobre os requerimentos e reclamações que lhe forem dirigidas;"],
    ["prefeito", "Estabelecer a divisão administrativa do Município, de acordo com a Lei;"],
    ["prefeito", "Oficializar, obedecidas as normas urbanísticas aplicáveis, as vias e logradouros públicos, mediante denominação aprovada pela Câmara;"],
    ["prefeito", "Convocar extraordinariamente a Câmara quando o interesse da administração o exigir;"],
    ["prefeito", "Aprovar Projetos de edificação e plano de loteamento, arruamento e zoneamento urbano ou para fins urbanos;"],
    ["prefeito", "Apresentar anualmente à Câmara, relatório circunstanciado sobre o estado das obras e dos serviços municipais, bem como o programa da administração para o ano seguinte;"],
    ["prefeito", "Contrair empréstimos e realizar operações de crédito mediante prévia autorização da Câmara;"],
    ["prefeito", "Providenciar sobre a administração dos bens do Município e sua alienação, na forma da Lei;"],
    ["prefeito", "Organizar e dirigir, nos termos da Lei, os serviços relativos às terras do Município;"],
    ["prefeito", "Desenvolver o Sistema Viário do Município;"],
    ["prefeito", "Conceder auxílios, prêmios e subvenção, nos limites das respectivas verbas orçamentárias e do plano de distribuição, prévia e anualmente aprovada pela Câmara;"],
    ["prefeito", "Providenciar sobre o incremento do ensino;"],
    ["prefeito", "Estabelecer a divisão administrativa do Município, de acordo com a Lei;"],
    ["prefeito", "Solicitar o auxílio das autoridades policiais do Estado para garantia do cumprimento de seus atos;"],
    ["prefeito", "Adotar providências para conservação e salvaguarda do Patrimônio Municipal;"],
    ["prefeito", "Publicar, até trinta dias após o encerramento de cada bimestre, relatório resumido da execução orçamentária."],
    ["presidenteCamara", "Representar a Câmara em juízo ou fora dele;"],
    ["presidenteCamara", "Dirigir, executar, supervisionar os trabalhos legislativos e administrativos na forma do regimento interno;"],
    ["presidenteCamara", "Fazer cumprir o Regimento Interno;"],
    ["presidenteCamara", "Promulgar as resoluções da Câmara Municipal, bem como as leis, quando couber;"],
    ["presidenteCamara", "Fazer publicar as resoluções da Câmara Municipal e as leis por ela promulgadas, bem como os atos da Mesa Diretora;"],
    ["presidenteCamara", "Declarar extinto o mandato dos vereadores, do Prefeito, e do Vice-Prefeito, nos casos, e observando os prazos previstos nesta Lei;"],
    ["presidenteCamara", "Requisitar o numerário destinado às despesas da Câmara Municipal, apresentar ao plenário, até dez dias antes do término de cada período de sessões, o balancete relativo aos recursos recebidos e as despesas realizadas;"],
    ["presidenteCamara", "Encaminhar, para parecer, a prestação de contas do Município ao Tribunal de Contas do Estado ou órgão a que for atribuída tal constância."]
]

let numeroAleatorioGlobal;
geraPergunta()

perguntaRadio.forEach(radio => {
    radio.addEventListener("click", () => {
        if (buttonConfirmar.classList.contains("buttonConfirmarInative")) {
            buttonConfirmar.classList.remove("buttonConfirmarInative")
        }
    })
})

buttonConfirmar.addEventListener("click", () => {
    correcao()
    if(!buttonConfirmar.classList.contains("buttonConfirmarInative")){
        buttonConfirmar.classList.add("buttonConfirmarInative")
    }
})

buttonNext.addEventListener("click", () => {
    geraPergunta()
})


function geraPergunta() {
    const perguntasLi = document.querySelectorAll(".perguntasItem")
    perguntasLi.forEach(perguntaLi => {
        if(perguntaLi.classList.contains("respostaCorreta")){
            perguntaLi.classList.remove("respostaCorreta")
        }else if(perguntaLi.classList.contains("respostaErrada")){
            perguntaLi.classList.remove("respostaErrada")
        }
    })
    perguntaRadio.forEach(radio => {
        radio.checked = false
    })

    if(!buttonConfirmar.classList.contains("buttonConfirmarInative")){
        buttonConfirmar.classList.add("buttonConfirmarInative")
    }

    const numeroAleatorio = Math.floor(Math.random() * competencias.length)
    numeroAleatorioGlobal = numeroAleatorio
    const pergunta = competencias[numeroAleatorio][1]

    perguntaFrase.innerHTML = pergunta
}

function correcao() {
    const autoridadeCompetente = competencias[numeroAleatorioGlobal][0]

    perguntaRadio.forEach(radio => {
        const respostaCorreta = (radio.value === autoridadeCompetente)
        const respostaUsuario = (radio.checked)

        if (respostaCorreta) {
            const respostaCorretali = radio.closest("li")
            respostaCorretali.classList.add("respostaCorreta")
        }

        if (respostaUsuario) {
            const respostaErradali = radio.closest("li")
            if (!respostaErradali.classList.contains("respostaCorreta")) {
                respostaErradali.classList.add("respostaErrada")
            }
        }
    })

}


