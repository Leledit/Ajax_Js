import { AnimacaoLoadView } from "../view/AnimacaoLoadView.js";
import { previsaoTempoView } from "../view/previsaoTempoView.js";
import { AjaxRequest } from "./AjaxRequest.js";

export class PrevisaoTempo{
    constructor(){
        this.previsaoTempoView = new previsaoTempoView(this);
        this.ajaxRequest = new AjaxRequest();
        this.animacaoLoad = new AnimacaoLoadView();
        this.adicionarEventoDeClickNoBotao();
    }

    adicionarEventoDeClickNoBotao(){    
        this.previsaoTempoView.adicionandoEventoDeClickNoBotao();
    }

    tratarClickBotaoPesquisar(valorCidade){
        this.ajaxRequest.buscarIdCidadeNaApi(valorCidade,this);
    }

    tratarIdCidadeRecebidoViaAjax(objectAjax){
        if(objectAjax.cidades.cidade != undefined){
            this.ajaxRequest.buscarPrevisaoParaOsProximosDias(objectAjax.cidades.cidade.id["#text"],this);
        }else{
            this.previsaoTempoView.exibirMensagemDeErro();
        }
        this.animacaoLoad.exibirAnimacao();
    }

    tratarInformacoesRelacionadoAoTempoDaCidade(informacoesTempoObject){
        this.previsaoTempoView.rederizarInformacoesNaTela(informacoesTempoObject);
    }

    encerrarAnimacoesAtivas(){
        this.animacaoLoad.encerrarAnimacao();
    }
}