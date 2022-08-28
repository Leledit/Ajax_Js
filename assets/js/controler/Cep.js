import { AnimacaoLoadView } from "../view/AnimacaoLoadView.js";
import { CepView } from "../view/CepView.js";
import { AjaxRequest } from "./AjaxRequest.js";
export class Cep{

    constructor(){
        this.cepView = new CepView(this);
        this.ajaxRequest = new AjaxRequest();
        this.animacaoLoad = new AnimacaoLoadView();
        this.adicionarEventoAoBotaoPesquisar();
    }

    adicionarEventoAoBotaoPesquisar(){
        this.cepView.adicionarEventoAoBotaoPesquisar();
    }

    tratarCepInserido(valorCep){
        let cepRecebido = valorCep;
        this.ajaxRequest.realizarRequesicaoCep(cepRecebido,this);
        this.animacaoLoad.exibirAnimacao();
    }

    tratarDadosRecebidosPeloAjax(objetoCep){
        this.cepView.prencherFormularioComAsInformaçoes(objetoCep);
    }

    encerrarAnimacoesAtivas(){
        this.animacaoLoad.encerrarAnimacao();
    }
}