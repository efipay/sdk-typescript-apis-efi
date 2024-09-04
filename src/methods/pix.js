// @ts-nocheck
import { CobrancasMethods } from "./cobrancas";

export class PixMethods extends CobrancasMethods {



    /**
     * **POST /v2/cob**
     * 
     * Cria uma nova cobrança com vencimento.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { {} } params
     * @param { {
     *   calendario: {
     *     expiracao: number
     *   },
     *   devedor?: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   loc?: {
     *     id: number
     *   },
     *   infoAdicionais?: Array<{
     *     nome: string,
     *     valor: string
     *   }>
     * } } body
     * 
     * @returns {Promise<{
     *   calendario: {
     *     criacao: string,
     *     expiracao: number
     *   },
     *   txid: string,
     *   revisao: number,
     *   loc: {
     *     id: number,
     *     location: string,
     *     tipoCob: string
     *   },
     *   location: string,
     *   status: string,
     *   devedor: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   pixCopiaECola: string
     * }>}
     */
    pixCreateImmediateCharge(params, body) { }


    /**
     * **PUT /v2/cob/:txid**
     * 
     * Atualiza uma cobrança existente.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.`
     *
     * @param { { txid: string } } params 
     * @param { {
     *   calendario: {
     *     expiracao: number
     *   },
     *   devedor: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   loc?: {
     *     id: number
     *   },
     *   infoAdicionais?: Array<{
     *     nome: string,
     *     valor: string
     *   }>
     * } } body
     * 
     * @returns {Promise<{
     *   calendario: {
     *     criacao: string,
     *     expiracao: number
     *   },
     *   txid: string,
     *   revisao: number,
     *   loc: {
     *     id: number,
     *     location: string,
     *     tipoCob: string
     *   },
     *   location: string,
     *   status: string,
     *   devedor: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   pixCopiaECola: string
     * }>}
     */
    pixCreateCharge(params, body) { }

    /**
     * PATCH /v2/cob/:txid
     * 
     * Atualiza informações de uma cobrança existente baseada no TXID.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * @param { { txid: string } } params
     * @param { {
     *   calendario?: {
     *     expiracao: number
     *   },
     *   devedor?: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor?: {
     *     original: string
     *   },
     *   chave?: string,
     *   solicitacaoPagador?: string,
     *   loc?: {
     *     id: number
     *   },
     *   infoAdicionais?: Array<{
     *     nome: string,
     *     valor: string
     *   }>
     * } } body
     * 
     * @returns {Promise<{
     *   status: string,
     *   calendario: {
     *     criacao: string,
     *     expiracao: number
     *   },
     *   location: string,
     *   txid: string,
     *   revisao: number,
     *   devedor: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador: string | null,
     *   pixCopiaECola: string
     * }>}
     */
    pixUpdateCharge(params, body) { }

    /**
     * GET /v2/cob/:txid
     * 
     * Recupera informações de uma cobrança existente baseada no TXID.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { txid: string, revisao?: number } } params
     * 
     * @returns {Promise<{
     *   status: string,
     *   calendario: {
     *     criacao: string,
     *     expiracao: string
     *   },
     *   location: string,
     *   txid: string,
     *   revisao: number,
     *   devedor?: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   pixCopiaECola?: string,
     *   pix?: Array<{
     *     endToEndId: string,
     *     txid: string,
     *     valor: string,
     *     horario: string,
     *     infoPagador?: string,
     *     devolucoes?: Array<{
     *       id: string,
     *       rtrId: string,
     *       valor: string,
     *       horario: {
     *         solicitacao: string
     *       },
     *       status: string
     *     }>
     *   }>
     * }
     * >}
     */
    pixDetailCharge(params) { }

    /**
     * **GET /v2/cob**
     * 
     * Recupera uma lista de cobranças Pix dentro de um intervalo de tempo especificado.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { {
     *   inicio: string,
     *   fim: string,
     *   cpf?:string,
     *   cnpj?:string,
     *   status?:string
     *   }
     * }params
     * 
     * @returns {Promise<{
     *   parametros: {
     *     inicio: string,
     *     fim: string,
     *     paginacao: {
     *       paginaAtual: number,
     *       itensPorPagina: number,
     *       quantidadeDePaginas: number,
     *       quantidadeTotalDeItens: number
     *     }
     *   },
     *   cobs: Array<{
     *     status: string,
     *     calendario: {
     *       criacao: string,
     *       expiracao: string
     *     },
     *     location: string,
     *     txid: string,
     *     revisao: number,
     *     devedor?: {
     *       cpf?: string,
     *       cnpj?: string,
     *       nome: string
     *     },
     *     valor: {
     *       original: string
     *     },
     *     chave: string,
     *     solicitacaoPagador?: string,
     *     pixCopiaECola?: string,
     *     pix?: Array<{
     *       endToEndId: string,
     *       txid: string,
     *       valor: string,
     *       horario: string,
     *       pagador?: {
     *         cpf?: string,
     *         cnpj?: string,
     *         nome: string
     *       },
     *       infoPagador?: string,
     *       devolucoes?: Array<{
     *         id: string,
     *         rtrId: string,
     *         valor: string,
     *         horario: {
     *           solicitacao: string
     *         },
     *         status: string
     *       }>
     *     }>
     *   }>
     * }>}
     */
    pixListCharges(params) { }

    /**
     * **PUT /v2/cobv/:txid**
     * 
     * Atualiza uma cobrança com vencimento existente.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * - `multa.modalide`: 
     *      - **1 para valor fixo;**
     *      - **2 para valor em percentual;**
     * 
     * - `juros.modalide`:
     *      - **1 Valor (dias corridos);**
     *      - **2 Percentual ao dia (dias corridos);**
     *      - **3 Percentual ao mês (dias corridos);**
     *      - **4 Percentual ao ano (dias corridos);**
     *      - **5 Valor (dias úteis);**
     *      - **6 Percentual ao dia (dias úteis) ;**
     *      - **7 Percentual ao mês (dias úteis);**
     *      - **8 Percentual ao ano (dias úteis);**
     * 
     * - `abatimento.modalidade:`
     *      - **1 para valor fixo;**
     *      - **2 para valor em percentual;**
     * 
     * 
     * - `desconto.modalide`:
     *      - **1 Valor Fixo até a[s] data[s] informada[s];**
     *      - **2 Percentual até a data informada;**
     *      - **3 Valor por antecipação dia corrido;**
     *      - **4 Valor por antecipação dia útil;**
     *      - **5 Percentual por antecipação dia corrido;**
     *      - **6 Percentual por antecipação dia útil;**
     * @param { { txid: string } } params - Parâmetros da rota
     * @param { {
     *   calendario: {
     *     dataDeVencimento: string,
     *     validadeAposVencimento?: number
     *   },
     *   devedor: {
     *     logradouro: string,
     *     cidade: string,
     *     uf: string,
     *     cep: string,
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string,
     *     multa?: {
     *       modalidade: number,
     *       valorPerc: string
     *     },
     *     juros?: {
     *       modalidade: number,
     *       valorPerc: string
     *     },
     *     desconto?: {
     *       modalidade: number,
     *       descontoDataFixa?: Array<{
     *         data: string,
     *         valorPerc: string
     *       }>
     *     },
     *     abatimento?: {
     *       modalidade: number,
     *       valorPerc: string
     *     }
     *   },
     *   loc?: {
     *     id: number
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string
     * } } body - Dados da requisição
     * 
     * @returns {Promise<{
     *   calendario: {
     *     dataDeVencimento: string,
     *     validadeAposVencimento: number
     *   },
     *   devedor: {
     *     logradouro: string,
     *     cidade: string,
     *     uf: string,
     *     cep: string,
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string,
     *     multa?: {
     *       modalidade: number,
     *       valorPerc: string
     *     },
     *     juros?: {
     *       modalidade: number,
     *       valorPerc: string
     *     },
     *     desconto?: {
     *       modalidade: number,
     *       descontoDataFixa?: Array<{
     *         data: string,
     *         valorPerc: string
     *       }>
     *     }
     *   },
     *   loc?: {
     *     id: number
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string
     * }>}
     */
    pixCreateDueCharge(params, body) { }

    /**
     * **PATCH /v2/cobv/:txid**
     * 
     * Atualiza parcialmente uma cobrança com vencimento existente. Apenas os campos fornecidos serão atualizados.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * - `multa.modalide`: 
     *      - **1 para valor fixo;**
     *      - **2 para valor em percentual;**
     * 
     * - `juros.modalide`:
     *      - **1 Valor (dias corridos);**
     *      - **2 Percentual ao dia (dias corridos);**
     *      - **3 Percentual ao mês (dias corridos);**
     *      - **4 Percentual ao ano (dias corridos);**
     *      - **5 Valor (dias úteis);**
     *      - **6 Percentual ao dia (dias úteis) ;**
     *      - **7 Percentual ao mês (dias úteis);**
     *      - **8 Percentual ao ano (dias úteis);**
     * 
     * - `abatimento.modalidade:`
     *      - **1 para valor fixo;**
     *      - **2 para valor em percentual;**
     * 
     * 
     * - `desconto.modalide`:
     *      - **1 Valor Fixo até a[s] data[s] informada[s];**
     *      - **2 Percentual até a data informada;**
     *      - **3 Valor por antecipação dia corrido;**
     *      - **4 Valor por antecipação dia útil;**
     *      - **5 Percentual por antecipação dia corrido;**
     *      - **6 Percentual por antecipação dia útil;**
     * @param { { txid: string } } params 
     * @param { {
     *   calendario?: {
     *     dataDeVencimento?: string,
     *     validadeAposVencimento?: number
     *   },
     *   devedor?: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome?: string,
     *     logradouro?: string,
     *     cidade?: string,
     *     uf?: string,
     *     cep?: string
     *   },
     *   valor?: {
     *     original?: string,
     *     multa?: {
     *       modalidade?: number,
     *       valorPerc?: string
     *     },
     *     juros?: {
     *       modalidade?: number,
     *       valorPerc?: string
     *     },
     *     desconto?: {
     *       modalidade?: number,
     *       descontoDataFixa?: Array<{
     *         data?: string,
     *         valorPerc?: string
     *       }>
     *     }
     *   },
     *   chave?: string,
     *   solicitacaoPagador?: string,
     *   loc?: {
     *     id?: number
     *   }
     * } } body
     * 
     * @returns {Promise<{
     *   status: string,
     *   calendario: {
     *     dataDeVencimento: string,
     *     validadeAposVencimento?: number
     *   },
     *   devedor?: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string,
     *     logradouro?: string,
     *     cidade?: string,
     *     uf?: string,
     *     cep?: string
     *   },
     *   valor: {
     *     original: string,
     *     multa?: {
     *       modalidade: number,
     *       valorPerc: string
     *     },
     *     juros?: {
     *       modalidade: number,
     *       valorPerc: string
     *     },
     *     desconto?: {
     *       modalidade: number,
     *       descontoDataFixa?: Array<{
     *         data: string,
     *         valorPerc: string
     *       }>
     *     }
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   loc?: {
     *     id: number
     *   }
     * }>}
     */
    pixUpdateDueCharge(params, body) { }

    /**
     * **GET /v2/cobv/:txid**
     * 
     * Obtém os detalhes de uma cobrança com vencimento existente.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { txid: string } } params 
     * 
     * @returns {Promise<{
     *   calendario: {
     *     criacao: string,
     *     dataDeVencimento: string,
     *     validadeAposVencimento?: number
     *   },
     *   txid: string,
     *   revisao: number,
     *   loc: {
     *     id: number,
     *     location: string,
     *     tipoCob: string
     *   },
     *   status: string,
     *   devedor: {
     *     logradouro: string,
     *     cidade: string,
     *     uf: string,
     *     cep: string,
     *     cpf: string,
     *     nome: string
     *   },
     *   recebedor: {
     *     logradouro: string,
     *     cidade: string,
     *     uf: string,
     *     cep: string,
     *     cnpj: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   pixCopiaECola: string
     * }>}
     */
    pixDetailDueCharge(params) { }

    /**
     * **GET /v2/cobv**
     * 
     * Obtém uma lista de cobranças com vencimento.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { {
     *   inicio: string,
     *   fim: string
     * } } params 
     * 
     * @returns {Promise<{
     *   parametros: {
     *     inicio: string,
     *     fim: string,
     *     paginacao: {
     *       paginaAtual: number,
     *       itensPorPagina: number,
     *       quantidadeDePaginas: number,
     *       quantidadeTotalDeItens: number
     *     }
     *   },
     *   cobs: Array<{
     *     calendario: {
     *       criacao: string,
     *       dataDeVencimento: string,
     *       validadeAposVencimento: number
     *     },
     *     txid: string,
     *     revisao: number,
     *     status: string,
     *     devedor: {
     *       nome: string,
     *       cpf?: string,
     *       cnpj?: string,
     *       logradouro?: string,
     *       cidade?: string,
     *       uf?: string,
     *       cep?: string
     *     },
     *     recebedor: {
     *       logradouro?: string,
     *       cidade?: string,
     *       uf?: string,
     *       cep?: string,
     *       cnpj?: string,
     *       nome?: string
     *     },
     *     valor: {
     *       original: string,
     *       juros?: {
     *         modalidade: number,
     *         valorPerc: string
     *       },
     *       multa?: {
     *         modalidade: number,
     *         valorPerc: string
     *       },
     *       desconto?: {
     *         modalidade: number,
     *         descontoDataFixa?: Array<{
     *           data: string,
     *           valorPerc: string
     *         }>,
     *         valorPerc?: string
     *       },
     *       abatimento?: {
     *         modalidade: number,
     *         valorPerc: string
     *       }
     *     },
     *     chave: string,
     *     solicitacaoPagador?: string,
     *     infoAdicionais?: Array<{
     *       nome: string,
     *       valor: string
     *     }>,
     *     loc: {
     *       id: number,
     *       location: string,
     *       tipoCob: string,
     *       criacao: string
     *     },
     *     pixCopiaECola: string
     *   }>
     * }>}
     */
    pixListDueCharges(params) { }

    /**
     * **PUT /v2/gn/pix/:idEnvio**
     * 
     * Realiza o envio de Pix.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { idEnvio: string } } params 
     * @param { {
     *   valor: string,
     *   pagador: {
     *     chave: string,
     *     infoPagador?: string
     *   },
     *   favorecido: {
     *     chave?: string,
     *     contaBanco?: {
     *       nome: string,
     *       cpf?: string,
     *       cnpj?: string,
     *       codigoBanco: string,
     *       agencia: string,
     *       conta: string,
     *       tipoConta: string
     *     },
     *     cpf?: string,
     *     cnpj?: string
     *   }
     * } } body
     * 
     * @returns {Promise<{
     *   valor: string,
     *   pagador: {
     *     chave: string,
     *     infoPagador?: string
     *   },
     *   favorecido: {
     *     chave?: string,
     *     contaBanco?: {
     *       nome: string,
     *       cpf?: string,
     *       cnpj?: string,
     *       codigoBanco: string,
     *       agencia: string,
     *       conta: string,
     *       tipoConta: string
     *     },
     *     cpf?: string,
     *     cnpj?: string
     *   }
     * }>}
     */
    pixSend(params, body) { }

    /**
     * **GET /v2/gn/pix/enviados/:e2eId**
     * 
     * Consulta os dados de uma transferência PIX enviada.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { e2eId: string } } params
     * 
     * @returns {Promise<{
     *   endToEndId: string,
     *   idEnvio: string,
     *   valor: string,
     *   chave: string,
     *   status: string,
     *   infoPagador?: string,
     *   horario: {
     *     solicitacao: string,
     *     liquidacao: string
     *   },
     *   favorecido: {
     *     chave?: string,
     *     identificacao?: {
     *       nome: string,
     *       cpf: string
     *     },
     *     contaBanco?: {
     *       nome: string,
     *       cpf: string,
     *       agencia: string,
     *       conta: string,
     *       tipoConta: string
     *     }
     *   }
     * }>}
     */
    pixSendDetail(params) { }

    /**
     * **GET /v2/gn/pix/enviados/id-envio/:idEnvio**
     * 
     * Consulta os dados de uma transferência PIX enviada pelo identificador de envio.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { idEnvio: string } } params
     * 
     * @returns {Promise<{
     *   endToEndId: string,
     *   idEnvio: string,
     *   valor: string,
     *   chave: string,
     *   status: string,
     *   infoPagador?: string,
     *   horario: {
     *     solicitacao: string,
     *     liquidacao: string
     *   },
     *   favorecido: {
     *     chave?: string,
     *     identificacao?: {
     *       nome: string,
     *       cpf: string
     *     },
     *     contaBanco?: {
     *       nome: string,
     *       cpf: string,
     *       agencia: string,
     *       conta: string,
     *       tipoConta: string
     *     }
     *   }
     * }>}
     */
    pixSendDetailId(params) { }
    /**
     * **GET /v2/gn/pix/enviados**
     * 
     * Consulta as transferências PIX enviadas.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { {
     *   inicio: string,
     *   fim: string,
     *   status: string,
     *   devolucaoPresente: boolean
     * } } params 
     * 
     * @returns {Promise<Array<{
     *   endToEndId: string,
     *   idEnvio: string,
     *   valor: string,
     *   chave: string,
     *   status: string,
     *   infoPagador?: string,
     *   horario: {
     *     solicitacao: string,
     *     liquidacao: string
     *   },
     *   favorecido: {
     *     chave?: string,
     *     identificacao?: {
     *       nome: string,
     *       cpf: string
     *     },
     *     contaBanco?: {
     *       nome: string,
     *       cpf: string,
     *       agencia: string,
     *       conta: string,
     *       tipoConta: string
     *     }
     *   }
     * }>>}
     */
    pixSendList(params) { }
    /**
     * **POST /v2/gn/qrcodes/detalhar**
     * 
     * Detalha um QR Code PIX.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { {
     *   pixCopiaECola: string
     * } } params 
     * 
     * @returns {Promise<{
     *   tipoCob: string,
     *   txid: string,
     *   revisao: number,
     *   calendario: {
     *     criacao: string,
     *     apresentacao: string,
     *     expiracao: number
     *   },
     *   status: string,
     *   devedor: {
     *     nome: string,
     *     cpf: string
     *   },
     *   recebedor: {
     *     nome: string,
     *     cpf: string
     *   },
     *   valor: {
     *     final: string
     *   },
     *   chave: string,
     *   solicitacaoPagador: string
     * }>}
     */
    pixQrCodeDetail(params) { }
    /**
     * **PUT /v2/gn/pix/:idEnvio/qrcode**
     * 
     * Realiza o envio de um pagamento via QR Code.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { idEnvio: string } } params 
     * @param { {
     *   pagador: {
     *     chave: string,
     *     infoPagador: string
     *   },
     *   pixCopiaECola: string
     * } } body - Dados do pagamento via QR Code
     * 
     * @returns {Promise<{
     *   idEnvio: string,
     *   e2eId: string,
     *   valor: string,
     *   horario: {
     *     solicitacao: string
     *   },
     *   status: string
     * }>}
     */
    pixQrCodePay(params, body) { }
    /**
     * **GET /v2/pix/:e2eId**
     * 
     * Obtém detalhes de um pagamento Pix específico.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { e2eId: string } } params 
     * 
     * @returns {Promise<{
     *   endToEndId: string,
     *   txid: string,
     *   valor: string,
     *   horario: string,
     *   infoPagador?: string,
     *   devolucoes?: Array<{
     *     id: string,
     *     rtrId: string,
     *     valor: string,
     *     horario: {
     *       solicitacao: string
     *     },
     *     status: string
     *   }>
     * }>}
     */
    pixDetailReceived(params) { }
    /**
     * **GET /v2/pix**
     * 
     * Obtém uma lista de pagamentos Pix.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { {
     *   inicio: string,
     *   fim: string,
     *   txid?: string,
     *   txIdPresente?: boolean,
     *   devolucaoPresente?: boolean,
     *   cpf?: string,
     *   cnpj?: string
     * } } params 
     * 
     * @returns {Promise<{
     *   parametros: {
     *     inicio: string,
     *     fim: string,
     *     paginacao: {
     *       paginaAtual: number,
     *       itensPorPagina: number,
     *       quantidadeDePaginas: number,
     *       quantidadeTotalDeItens: number
     *     }
     *   },
     *   pix: Array<{
     *     endToEndId: string,
     *     txid?: string,
     *     valor: string,
     *     chave: string,
     *     horario: string,
     *     devolucoes?: Array<{
     *       id: string,
     *       rtrId: string,
     *       valor: string,
     *       horario: {
     *         solicitacao: string,
     *         liquidacao: string
     *       },
     *       status: string
     *     }>
     *   }>
     * }>}
     */
    pixReceivedList(params) { }
    /**
     * **PUT /v2/pix/:e2eId/devolucao/:id**
     * 
     * Solicita a devolução de um pagamento Pix.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { e2eId: string, id: string } } params - Identificadores da transação e devolução
     * @param { {
     *   valor: string
     * } } body - Dados da devolução
     * 
     * @returns {Promise<{
     *   id: string,
     *   rtrId: string,
     *   valor: string,
     *   horario: {
     *     solicitacao: string
     *   },
     *   status: string
     * }>}
     */
    pixDevolution(params, body) { }

    /**
     * **GET /v2/pix/:e2eId/devolucao/:id**
     * 
     * Consulta o status de uma devolução de pagamento Pix.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { e2eId: string, id: string } } params - Identificadores da transação e devolução
     * 
     * @returns {Promise<{
     *   id: string,
     *   rtrId: string,
     *   valor: string,
     *   horario: {
     *     solicitacao: string
     *   },
     *   status: string
     * }>}
     */
    pixDetailDevolution(params) { }

    /**
     * **POST /v2/loc**
     * 
     * Cria uma nova localização (location) para um QR Code.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome`, `mensagem`
     * 
     * @param { { 
     *   tipoCob: 'cob' | 'cobv' 
     * } } body 
     * 
     * @returns {Promise<{
     *   id: number,
     *   location: string,
     *   tipoCob: string,
     *   criacao: string
     * }>}
     */
    pixCreateLocation(params, body) { }

    /**
     * **GET /v2/loc**
     * 
     * Retorna uma lista de localizações (locations) de QR Codes.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`
     * 
     * @param { { 
     *   inicio: string, 
     *   fim: string
     * } } params - Filtros e paginação para a busca das localizações
     * 
     * @returns {Promise<{
     *   parametros: {
     *     inicio: string,
     *     fim: string,
     *     paginacao: {
     *       paginaAtual: number,
     *       itensPorPagina: number,
     *       quantidadeDePaginas: number,
     *       quantidadeTotalDeItens: number
     *     }
     *   },
     *   loc: Array<{
     *     id: number,
     *     location: string,
     *     tipoCob: string,
     *     criacao: string,
     *     txid?: string
     *   }>
     * }>}
     */
    pixLocationList(params) { }

    /**
     * **GET /v2/loc/:id**
     * 
     * Retorna os detalhes de uma localização (location) específica de QR Code.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`
     * 
     * @param { { id: number } } params 
     * 
     * @returns {Promise<{
     *   id: number,
     *   txid: string,
     *   location: string,
     *   tipoCob: string,
     *   criacao: string
     * }>}
     */
    pixDetailLocation(params) { }

    /**
     * **GET /v2/loc/:id/qrcode**
     * 
     * Retorna os detalhes do QR Code de uma localização (location) específica de QR Code.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`
     * 
     * @param { { id: number } } params 
     * 
     * @returns {Promise<{
     *   qrcode: string,
     *   imagemQrcode: string,
     *   linkVisualizacao: string
     * }>}
     */
    pixGenerateQRCode(params) { }

    /**
     * **DELETE /v2/loc/:id/txid**
     * 
     * Remove o txid associado a uma localização (location) específica de QR Code.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`
     * 
     * @param { { id: number } } params 
     * 
     * @returns {Promise<{
     *   id: number,
     *   location: string,
     *   tipoCob: string,
     *   criacao: string
     * }>}
     */
    pixUnlinkTxidLocation(params) { }

    /**
     * **PUT /v2/lotecobv/:id**
     * 
     * Atualiza um lote de cobranças com vencimento (cobranças registradas).
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * - `multa.modalide`: 
     *      - **1 para valor fixo;**
     *      - **2 para valor em percentual;**
     * 
     * - `juros.modalide`:
     *      - **1 Valor (dias corridos);**
     *      - **2 Percentual ao dia (dias corridos);**
     *      - **3 Percentual ao mês (dias corridos);**
     *      - **4 Percentual ao ano (dias corridos);**
     *      - **5 Valor (dias úteis);**
     *      - **6 Percentual ao dia (dias úteis) ;**
     *      - **7 Percentual ao mês (dias úteis);**
     *      - **8 Percentual ao ano (dias úteis);**
     * 
     * - `abatimento.modalidade:`
     *      - **1 para valor fixo;**
     *      - **2 para valor em percentual;**
     * 
     * 
     * - `desconto.modalide`:
     *      - **1 Valor Fixo até a[s] data[s] informada[s];**
     *      - **2 Percentual até a data informada;**
     *      - **3 Valor por antecipação dia corrido;**
     *      - **4 Valor por antecipação dia útil;**
     *      - **5 Percentual por antecipação dia corrido;**
     *      - **6 Percentual por antecipação dia útil;**
     * 
     * @param { { id: number } } params 
     * 
     * @param { {
     *   descricao: string,
     *   cobsv: Array<{
     *     calendario: {
     *       dataDeVencimento: string,
     *       validadeAposVencimento: number
     *     },
     *     txid: string,
     *     loc?: {
     *       id: number
     *     },
     *     devedor?: {
     *       logradouro?: string,
     *       cidade?: string,
     *       uf?: string,
     *       cep?: string,
     *       cpf?: string,
     *       cnpj?: string,
     *       nome: string
     *     },
     *     valor: {
     *       original: string,
     *       multa?: {
     *         modalidade: number,
     *         valorPerc: string
     *       },
     *       juros?: {
     *         modalidade: number,
     *         valorPerc: string
     *       },
     *       desconto?: {
     *         modalidade: number,
     *         descontoDataFixa?: Array<{
     *           data: string,
     *           valorPerc: string
     *         }>
     *       },
     *       abatimento?: {
     *       modalidade: number,
     *       valorPerc: string
     *      }
     *     },
     *     chave: string,
     *     solicitacaoPagador: string,
     *     infoAdicionais?: Array<{
     *       nome: string,
     *       valor: string
     *     }>
     *   }>
     * } } body 
     * 
     * @returns { Promise<void> }
     */
    pixCreateDueChargeBatch(params, body) { }

    /**
     * **PATCH /v2/lotecobv/:id**
     * 
     * Atualiza parcialmente um lote de cobranças com vencimento.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { id: number } } params 
     * 
     * @param { {
     *   cobsv: Array<{
     *     txid: string,
     *     calendario?: {
     *       dataDeVencimento?: string,
     *       validadeAposVencimento?: number
     *     },
     *     loc?: {
     *       id?: number
     *     },
     *     devedor?: {
     *       logradouro?: string,
     *       cidade?: string,
     *       uf?: string,
     *       cep?: string,
     *       cpf?: string,
     *       cnpj?: string,
     *       nome?: string
     *     },
     *     valor?: {
     *       original?: string,
     *       multa?: {
     *         modalidade?: number,
     *         valorPerc?: string
     *       },
     *       juros?: {
     *         modalidade?: number,
     *         valorPerc?: string
     *       },
     *       desconto?: {
     *         modalidade?: number,
     *         descontoDataFixa?: Array<{
     *           data?: string,
     *           valorPerc?: string
     *         }>
     *       }
     *     },
     *     chave?: string,
     *     solicitacaoPagador?: string,
     *     infoAdicionais?: Array<{
     *       nome?: string,
     *       valor?: string
     *     }>
     *   }>
     * } } body 
     * 
     * @returns { Promise<void> }
     */
    pixUpdateDueChargeBatch(params, body) { }

    /**
     * **GET /v2/lotecobv/:id**
     * 
     * Obtém informações sobre um lote de cobranças com vencimento.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { id: number } } params 
     * 
     * @returns {Promise<{
     *   descricao: string,
     *   criacao: string,
     *   cobsv: Array<{
     *     criacao?: string,
     *     txid: string,
     *     status: string,
     *     problema?: {
     *       type: string,
     *       title: string,
     *       status: number,
     *       detail: string,
     *       violacoes: Array<{
     *         razao: string,
     *         propriedade: string
     *       }>
     *     }
     *   }>
     * }>}
     * 
     * 
     */
    pixDetailDueChargeBatch(params) { }

    /**
     * **GET /v2/lotecobv**
     * 
     * Obtém uma lista de cobranças com vencimento.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { {
     *   inicio: string,
     *   fim: string
     * } } params
     * 
     * @returns {Promise<{
     *   parametros: {
     *     inicio: string,
     *     fim: string,
     *     paginacao: {
     *       paginaAtual: number,
     *       itensPorPagina: number,
     *       quantidadeDePaginas: number,
     *       quantidadeTotalDeItens: number
     *     }
     *   },
     *   lotes: Array<{
     *     id: number,
     *     descricao?: string,
     *     criacao: string,
     *     cobsv: Array<{
     *       criacao: string,
     *       txid: string,
     *       status: string
     *     }>
     *   }>
     * }>}
     */
    pixListDueChargeBatch(params) { }

    /**
     * **POST /v2/gn/split/config**
     * 
     * Configura a divisão de recebíveis (split).
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { {} } params
     * 
     * @param { {
     *   descricao?: string,
     *   txid?: string,
     *   lancamento: {
     *     imediato: boolean
     *   },
     *   split: {
     *     divisaoTarifa: string,
     *     minhaParte: {
     *       tipo: string,
     *       valor: string
     *     },
     *     repasses: Array<{
     *       tipo: string,
     *       valor: string,
     *       favorecido: {
     *         cpf?: string,
     *         cnpj?: string,
     *         conta: string
     *       }
     *     }>
     *   }
     * } } body
     * 
     * @returns {Promise<{
     *   id: string,
     *   status: string,
     *   txid?: string,
     *   descricao?: string,
     *   lancamento: {
     *     imediato: boolean
     *   },
     *   split: {
     *     divisaoTarifa: string,
     *     minhaParte: {
     *       tipo: string,
     *       valor: string
     *     },
     *     repasses: Array<{
     *       tipo: string,
     *       valor: string,
     *       favorecido: {
     *         conta: string,
     *         cpf: string,
     *         cnpj: string
     *       }
     *     }>
     *   }
     * }>}
     */
    pixSplitConfig(params, body) { }

    /**
     * **PUT /v2/gn/split/config/:id**
     * 
     * Atualiza a configuração de divisão de recebíveis (split).
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { id: string } } params
     * 
     * @param { {
     *   descricao?: string,
     *   txid?: string,
     *   lancamento: {
     *     imediato: boolean
     *   },
     *   split: {
     *     divisaoTarifa: string,
     *     minhaParte: {
     *       tipo: string,
     *       valor: string
     *     },
     *     repasses: Array<{
     *       tipo: string,
     *       valor: string,
     *       favorecido: {
     *         cpf?: string,
     *         cnpj?: string,
     *         conta: string
     *       }
     *     }>
     *   }
     * } } body
     * 
     * @returns {Promise<{
     *   id: string,
     *   status: string,
     *   txid?: string,
     *   descricao: string,
     *   lancamento: {
     *     imediato: boolean
     *   },
     *   split: {
     *     divisaoTarifa: string,
     *     minhaParte: {
     *       tipo: string,
     *       valor: string
     *     },
     *     repasses: Array<{
     *       tipo: string,
     *       valor: string,
     *       favorecido: {
     *         conta: string,
     *         cpf: string,
     *         cnpj: string
     *       }
     *     }>
     *   }
     * }>}
     */
    pixSplitConfigId(params, body) { }

    /**
     * **GET /v2/gn/split/config/:id**
     * 
     * Obtém a configuração de divisão de recebíveis (split).
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { id: string } } params
     * 
     * @returns {Promise<{
     *   id: string,
     *   txid?:string,
     *   status: string,
     *   revisao: number,
     *   descricao: string,
     *   lancamento: {
     *     imediato: boolean
     *   },
     *   split: {
     *     divisaoTarifa: string,
     *     minhaParte: {
     *       tipo: string,
     *       valor: string
     *     },
     *     repasses: Array<{
     *       tipo: string,
     *       valor: string,
     *       favorecido: {
     *         conta: string,
     *         cpf?: string
     *         cnpj?: string
     *       }
     *     }>
     *   }
     * }>}
     */
    pixSplitDetailConfig(params) { }

    /**
     * **PUT /v2/gn/split/cob/:txid/vinculo/:splitConfigId**
     * 
     * Vincula uma configuração de divisão de recebíveis (split) a uma cobrança Pix existente.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { txid: string, splitConfigId: string } } params
     * 
     * @returns { Promise<void> }    
     */
    pixSplitLinkCharge(params) { }

    /**
     * **PUT /v2/gn/split/cobv/:txid/vinculo/:splitConfigId**
     * 
     * Vincula uma configuração de divisão de recebíveis (split) a uma cobrança com vencimento Pix existente.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { txid: string, splitConfigId: string } } params
     * 
     * @returns { Promise<void> }
     */
    pixSplitLinkDueCharge(params) { }

    /**
     * **DELETE /v2/gn/split/cob/:txid/vinculo**
     * 
     * Remove o vínculo de uma configuração de divisão de recebíveis (split) de uma cobrança Pix existente.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { txid: string } } params
     * 
     * @returns { Promise<void> }
     */
    pixSplitUnlinkCharge(params) { }

    /**
     * **DELETE /v2/gn/split/cobv/:txid/vinculo**
     * 
     * Remove o vínculo de uma configuração de divisão de recebíveis (split) de uma cobrança com vencimento Pix existente.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { txid: string } } params
     * 
     * @returns { Promise<void> }
     */
    pixSplitUnlinkDueCharge(params) { }

    /**
     * **GET /v2/gn/split/cob/:txid**
     * 
     * Obtém as informações detalhadas de uma cobrança com split de pagamento.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { txid: string } } params
     * 
     * @returns {Promise<{
     *   calendario: {
     *     criacao: string,
     *     expiracao: number
     *   },
     *   txid: string,
     *   revisao: number,
     *   status: string,
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   devedor?: {
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   solicitacaoPagador?: string,
     *   loc: {
     *     id: number,
     *     location: string,
     *     tipoCob: string,
     *     criacao: string
     *   },
     *   location: string,
     *   pixCopiaECola: string,
     *   config: {
     *     id: string,
     *     status: string,
     *     revisao: number,
     *     descricao?: string,
     *     tipo: string
     *   }
     * }>}
     */
    pixSplitDetailCharge(params) { }


    /**
     * **GET /v2/gn/split/cobv/:txid**
     * 
     * Obtém os detalhes de uma cobrança com vencimento Pix (cobv) vinculada a uma configuração de divisão de recebíveis (split).
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { txid: string } } params
     * 
     * @returns {Promise<{
     *   calendario: {
     *     criacao: string,
     *     dataDeVencimento: string,
     *     validadeAposVencimento?: number
     *   },
     *   txid: string,
     *   revisao: number,
     *   loc: {
     *     id: number,
     *     location: string,
     *     tipoCob: string
     *   },
     *   status: string,
     *   devedor: {
     *     logradouro?: string,
     *     cidade: string,
     *     uf?: string,
     *     cep?: string,
     *     cpf?: string,
     *     cnpj?: string,
     *     nome: string
     *   },
     *   recebedor: {
     *     logradouro: string,
     *     cidade: string,
     *     uf: string,
     *     cep: string,
     *     cnpj: string,
     *     nome: string
     *   },
     *   valor: {
     *     original: string
     *   },
     *   chave: string,
     *   solicitacaoPagador?: string,
     *   config: {
     *     id: string,
     *     status: string,
     *     descricao?: string
     *   },
     *   pixCopiaECola: string
     * }>}
     */

    pixSplitDetailDueCharge(params) { }

    /**
     * **PUT /v2/webhook/:chave**
     * 
     * Atualiza a URL do webhook associado à chave Pix.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { chave: string } } params
     * @param { {
     *   webhookUrl: string
     * } } body
     * 
     * @returns { Promise<{
     *  webhookUrl: string,
     * }> }
     */
    pixConfigWebhook(params, body) { }

    /**
     * **GET /v2/webhook/:chave**
     * 
     * Obtém a URL do webhook associado à chave Pix.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { chave: string } } params
     * 
     * @returns {Promise<{
     *   webhookUrl: string,
     *   chave: string,
     *   criacao: string
     * }>}
     */
    pixDetailWebhook(params) { }

    /**
     * **GET /v2/webhook**
     * 
     * Obtém a lista de webhooks registrados.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { 
     *   inicio: string, 
     *   fim: string
     * } } params
     * 
     * @returns {Promise<{
     *   parametros: {
     *     inicio: string,
     *     fim: string,
     *     paginacao: {
     *       paginaAtual: number,
     *       itensPorPagina: number,
     *       quantidadeDePaginas: number,
     *       quantidadeTotalDeItens: number
     *     }
     *   },
     *   webhooks: Array<{
     *     webhookUrl: string,
     *     chave: string,
     *     criacao: string
     *   }>
     * }>}
     */
    pixListWebhook(params) { }

    /**
     * **DELETE /v2/webhook/:chave**
     * 
     * Remove um webhook registrado.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { chave: string } } params
     * 
     * @returns { Promise<void> }
     */
    pixDeleteWebhook(params) { }

    /**
     * **POST /v2/gn/evp**
     * 
     * Cria uma nova chave aleatória.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @returns {Promise<{
     *   chave: string
     * }>}
     */
    pixCreateEvp() { }

    /**
     * **GET /v2/gn/evp**
     * 
     * Recupera todas as chaves EVP (Endereço Virtual de Pagamento).
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @returns {Promise<{
     *   chaves: string[]
     * }>}
     */
    pixListEvp() { }

    /**
     * **DELETE /v2/gn/evp/:chave**
     * 
     * Deleta uma chave EVP (Endereço Virtual de Pagamento) específica.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { { chave: string } } params 
     * 
     * @returns { Promise<void> }
     */
    pixDeleteEvp(params) { }

    /**
     * **GET /v2/gn/saldo**
     * 
     * Obtém o saldo da conta.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @returns {Promise<{
     *   saldo: string,
     *   bloqueios?: {
     *     judicial: string,
     *     med: string,
     *     total: string
     *   }
     * }>}
     */
    getAccountBalance() { }

    /**
     * **PUT /v2/gn/config**
     * 
     * Configurações para recebimento e envio de PIX.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @param { {} } params
     * @param { {
     *   pix: {
     *     receberSemChave: boolean,
     *     chaves?: Map<string, {
     *       recebimento: {
     *         txidObrigatorio: boolean,
     *         recusarTipoPessoa?: string,
     *         qrCodeEstatico: {
     *           recusarTodos: boolean
     *         },
     *         webhook?: {
     *           notificacao?: {
     *             tarifa: boolean,
     *             pagador: boolean
     *           },
     *           notificar?: {
     *             pixSemTxid: boolean
     *           }
     *         }
     *       },
     *       envio?: {
     *         webhook: {
     *           notificacao: {
     *             tarifa: boolean,
     *             favorecido: boolean
     *           }
     *         }
     *       }
     *     }>
     *   }
     * } } body
     * 
     *  @returns { Promise<void> }
     */
    updateAccountConfig(params, body) { }

    /**
     * **GET /v2/gn/config**
     * 
     * Obtém as configurações para recebimento e envio de PIX.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `nome` e `mensagem`.
     * 
     * @returns {Promise<{
     *   pix: {
     *     receberSemChave: boolean,
     *     chaves?: Map<string, {
     *       recebimento: {
     *         txidObrigatorio: boolean,
     *         recusarTipoPessoa?: string,
     *         qrCodeEstatico: {
     *           recusarTodos: boolean
     *         },
     *         webhook?: {
     *           notificacao?: {
     *             tarifa: boolean,
     *             pagador: boolean
     *           },
     *           notificar?: {
     *             pixSemTxid: boolean
     *           }
     *         }
     *       },
     *       envio?: {
     *         webhook: {
     *           notificacao: {
     *             tarifa: boolean,
     *             favorecido: boolean
     *           }
     *         }
     *       }
     *     }>
     *   }
     * }>}
     */
    listAccountConfig() { }

    /**
     * **GET /v2/gn/infracoes**
     * 
     * Obtém a lista de infrações no sistema.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { {
     *   inicio: string,
     *   fim: string   
     * } } params
     * 
     * @returns {Promise<{
     *   parametros: {
     *     inicio: string,
     *     fim: string,
     *     paginacao: {
     *       paginaAtual: number,
     *       itensPorPagina: number,
     *       quantidadeDePaginas: number,
     *       quantidadeTotalDeItens: number
     *     }
     *   },
     *   infracoes: Array<{
     *     idInfracao: string,
     *     endToEndId: string,
     *     protocolo: string,
     *     dataTransacao: string,
     *     valor: string,
     *     chave?: string,
     *     status: "ABERTA" | "ACEITA" | "CANCELADA_EFI" | "EM_DEFESA" | "REJEITADA",
     *     razao: string,
     *     tipoSituacao?: "golpe" | "aquisição da conta" | "coerção" | "acesso fraudulento" | "outro" | "desconhecido",
     *     tipoFraude?: string,
     *     comentario?: string,
     *     defesa?: string,
     *     justificativaAnalista?: string,
     *     identificadorTicket: Array<number>,
     *     dadosAnalise: {
     *       abertura: string,
     *       prazoFinalizacao: string,
     *       recebimentoDefesa?: string,
     *       finalizacao?: string
     *     },
     *     origem: {
     *       nomeParticipante: string,
     *       conta: string,
     *       nome: string,
     *       documento: string
     *     },
     *     destino: {
     *       nomeParticipante: string,
     *       conta: string,
     *       nome: string,
     *       documento: string
     *     },
     *     criadoEm: string,
     *     atualizadoEm: string
     *   }>
     * }>}
     */
    medList(params) { }

    /**
     * **POST /v2/gn/infracoes/:idInfracao/defesa**
     * 
     * Envia a defesa para uma infração específica.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { idInfracao: string } } params 
     * @param { {
     *   analise: "aceito" | "rejeitado",
     *   justificativa: string
     * } } body
     * 
     * @returns { Promise<void> }
     * 
     */
    medDefense(params, body) { }

    /**
     * **POST /v2/gn/relatorios/extrato-conciliacao**
     * 
     * Solicita a geração de um relatório de extrato de conciliação.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * @param { { } } params 
     * @param { {
     *   dataMovimento: string,
     *   tipoRegistros: {
     *     pixRecebido?: boolean,
     *     pixEnviadoChave?: boolean,
     *     pixEnviadoDadosBancarios?: boolean,
     *     estornoPixEnviado?: boolean,
     *     pixDevolucaoEnviada?: boolean,
     *     pixDevolucaoRecebida?: boolean,
     *     tarifaPixEnviado?: boolean,
     *     tarifaPixRecebido?: boolean,
     *     estornoTarifaPixEnviado?: boolean,
     *     saldoDiaAnterior?: boolean,
     *     saldoDia?: boolean,
     *     transferenciaEnviada?: boolean,
     *     transferenciaRecebida?: boolean,
     *     estornoTransferenciaEnviada?: boolean,
     *     tarifaTransferenciaEnviada?: boolean,
     *     estornoTarifaTransferenciaEnviada?: boolean,
     *     estornoTarifaPixRecebido?: boolean
     *   }
     * } } body
     * 
     * @returns {Promise<{
     *   id: string,
     *   dataSolicitacao: string,
     *   status: string,
     * }>}
     */
    createReport(params, body) { }

    /**
     * **GET /v2/gn/relatorios/:id**
     * 
     * Solicitar Download Extrato Conciliação.
     * 
     * O retorno será uma string que deve ser tratada como um arquivo CSV.
     * 
     * Para capturar uma falha utilize o `catch`, os campos disponíveis no objeto serão `type`, `title`, `status`, `detail` e dependendo da falha `violacoes`.
     * 
     * Obs: Se o extrato ainda não tiver sido processado, a resposta será sucesso(202) e o retorno será semelhante ao que é retornado na solicitação, informando em qual etapa de processamento está a solicitação.
     * 
     * @param { { id: string } } params 
     * 
     * @returns {Promise<{
     *   id: string,
     *   dataSolicitacao: string,
     *   status: string,
     * } | string>}
     */
    detailReport(params) { }

}

