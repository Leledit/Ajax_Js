import { $ } from "../main.js";
export class AnimacaoLoadView{
    constructor(){
        this.localAnimacao = $(".loader-animation");
    }  
    
    exibirAnimacao(){
        this.localAnimacao.style.display = "flex";
    }

    encerrarAnimacao(){
        this.localAnimacao.style.display = "none";
    }
}