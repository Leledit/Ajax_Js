import { AnimacaoLoadView } from "../view/AnimacaoLoadView.js";
import { RequestPageView } from "../view/RequestPageView.js";
import { AjaxRequest } from "./AjaxRequest.js";
export class RequestPage{
    constructor(){
        this.requestPageView = new RequestPageView(this);
        this.ajaxRequest = new AjaxRequest(this);
        this.animacaoLoad = new AnimacaoLoadView();
        this.adicionarEventoAoBotoes();
        this.folhaDeEstiloAtual = "";
    }

    adicionarEventoAoBotoes(){
        this.requestPageView.adicionarEventoDeClickAosBotoes();
    }

    requesitarConteudoDaPagina(indicadorPage){
        let conteudoPageSolicitada = "";
        switch ( indicadorPage){
            case 1:
                conteudoPageSolicitada = this.ajaxRequest.realizarRequesicaoPagina("assets/paginas/pagina1/index.html",this);
                this.folhaDeEstiloAtual = "assets/paginas/pagina1/main.css";
            break;
            case 2:
                conteudoPageSolicitada = this.ajaxRequest.realizarRequesicaoPagina("assets/paginas/pagina2/index.html",this);
                this.folhaDeEstiloAtual = "assets/paginas/pagina2/main.css";
            break;
            case 3:
                conteudoPageSolicitada = this.ajaxRequest.realizarRequesicaoPagina("assets/paginas/pagina3/index.html",this);
                this.folhaDeEstiloAtual = "assets/paginas/pagina3/main.css";
            break;
            default:
        }
        this.animacaoLoad.exibirAnimacao();
    }
    
    tratarConteudoRecebidoViaAjax(conteudoPagina){
        this.requestPageView.aplicarAlteracoesNaDapagina(conteudoPagina,this.folhaDeEstiloAtual);
    }

    encerrarAnimacoesAtivas(){
        this.animacaoLoad.encerrarAnimacao();
    }
}