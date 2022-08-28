import { $ } from "../main.js";
export class previsaoTempoView{
    constructor(controladorPrevisaoTempo){
        this.controladorPrevisaoTempo = controladorPrevisaoTempo;
        this.localInformacoesDias = $(".previTemp-info");
        this.localContainerDias = $(".previTemp-container");
    }
    
    adicionandoEventoDeClickNoBotao(){
        $("#btnPesquisarPrevisaoTempo").addEventListener("click",()=>{                           
            this.controladorPrevisaoTempo.tratarClickBotaoPesquisar($("#campCidadePrevisao").value);
        });
    }

    rederizarInformacoesNaTela(informacoesTempoObject){
        this.rederizarInformacoesDaCidade(informacoesTempoObject);
        this.rederizarInformacoesDoTempo(informacoesTempoObject);
    }

    exibirMensagemDeErro(){
        this.localInformacoesDias.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Cidade nao encontrada, verifique o nome da cidade.
            </div>
        `;
        this.localContainerDias.innerHTML = "";
        window.setTimeout(()=>{
            this.controladorPrevisaoTempo.encerrarAnimacoesAtivas();
        },);
        window.setTimeout(()=>{
            this.localInformacoesDias.innerHTML = '';
            
        },2000);
    }

    rederizarInformacoesDoTempo(informacoesTempoObject){
      
        let listaDias = informacoesTempoObject.cidade.previsao;
        let layoutDias = "";
        for(let i=0;i< listaDias.length;i++){
            let dia = listaDias[i];
            layoutDias += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 previTemp-container-item">
                    <h2>Dia: ${dia.dia['#text']}</h2>
                    <p>maxima: ${dia.maxima['#text']}</p>
                    <p>minima: ${dia.minima['#text']}</p>
                    <p>iuv: ${dia.iuv['#text']}</p>
                </div>
            `;
        }
        $(".previTemp-container").innerHTML = layoutDias;
        this.controladorPrevisaoTempo.encerrarAnimacoesAtivas();
    }

    rederizarInformacoesDaCidade(informacoesTempoObject){
        this.localInformacoesDias.innerHTML = `
            <div class="col"><h3>${informacoesTempoObject.cidade.nome['#text']}-${informacoesTempoObject.cidade.uf["#text"]}</h3></div>
            <div class="col"><h4>Atualizado em : ${informacoesTempoObject.cidade.atualizacao["#text"]}</h4></div>
        `;
    }
}