import { $ } from "../main.js";
export class RequestPageView{
    constructor(controlador){
        this.controlador = controlador;
        this.botaoOne = $("#btnOne");
        this.botaoTwo= $("#btnTwo");
        this.botaoThree = $("#btnThree");
        this.localExibicaoDados = $("#localExibicaoDados");
        this.linkCssPadrao = $("#cssPadrao");
    }

    adicionarEventoDeClickAosBotoes(){
        this.botaoOne.addEventListener("click",()=>{
            this.controlador.requesitarConteudoDaPagina(1);
        });
        this.botaoTwo.addEventListener("click",()=>{
            this.controlador.requesitarConteudoDaPagina(2);
        });
        this.botaoThree.addEventListener("click",()=>{
            this.controlador.requesitarConteudoDaPagina(3);
        });
    }

    aplicarAlteracoesNaDapagina(conteudoPagina,linkFolhaEstiloPagina){
        this.localExibicaoDados.innerHTML = conteudoPagina;
        this.linkCssPadrao.href = linkFolhaEstiloPagina;
        this.controlador.encerrarAnimacoesAtivas();
    }
}