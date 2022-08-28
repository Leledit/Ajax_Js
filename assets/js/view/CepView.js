import { $ } from "../main.js";
export class CepView{
    constructor(controladorCep){
        this.controladorCep = controladorCep;
        this.botaoPesquisar = $("#btnPesquisar");
        this.capoCep = $("#campCep");
        this.campoEndereco = $("#campEndereco");
        this.campoBairro = $("#campBairro");
        this.campoCidade = $("#campCidade");
        this.campoUf = $("#campUf");
    }

    adicionarEventoAoBotaoPesquisar(){
        this.botaoPesquisar.addEventListener("click",()=>{
            this.buscarValorCep();
        });
    }

    buscarValorCep(){
        let valorCep = this.capoCep.value;
        this.controladorCep.tratarCepInserido(valorCep);
    }

    prencherFormularioComAsInformaçoes(objetoCep){
        this.campoEndereco.value = objetoCep.logradouro;
        this.campoBairro.value = objetoCep.bairro;
        this.campoCidade.value = objetoCep.localidade;
        this.campoUf.value = objetoCep.uf;
        this.controladorCep.encerrarAnimacoesAtivas();
    } 
}
