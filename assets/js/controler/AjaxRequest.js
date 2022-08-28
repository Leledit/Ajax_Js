import { xmlToJson } from "../bibliotecas/xmltojson.js";
export class AjaxRequest{
    constructor(){
        this.controladorSolicitante;
    }

    realizarRequesicaoCep(cepAPesquisar,controlador){

        this.controladorSolicitante = controlador;
        const urlApi =  'https://viacep.com.br/ws/'+cepAPesquisar+'/json/';
        let ajax = new XMLHttpRequest();
        ajax.open("GET",urlApi);
        ajax.onreadystatechange = () =>{
            if((ajax.readyState == 4)){
                if(ajax.status == 200){
                    let cepJson = ajax.responseText;
                    let cepObject = JSON.parse(cepJson);
                    this.controladorSolicitante.tratarDadosRecebidosPeloAjax(cepObject);
                }
            }
        }
        ajax.send();
    }

    realizarRequesicaoPagina(url,controlador){
        this.controladorSolicitante = controlador;
        let ajax = new  XMLHttpRequest();
        ajax.open("GET",url);
        ajax.onreadystatechange = () =>{
            if((ajax.readyState == 4)){
                if(ajax.status == 200){
                    let dadosPagina = ajax.responseText;
                    this.controladorSolicitante.tratarConteudoRecebidoViaAjax(dadosPagina);
                }
            }
        }
        ajax.send();
    }

    buscarIdCidadeNaApi(valorCidade,controlador){
        this.controladorSolicitante = controlador;
        const urlApi =  'http://servicos.cptec.inpe.br/XML/listaCidades?city='+valorCidade;
        let ajax = new XMLHttpRequest();
        ajax.open("GET",urlApi);
        ajax.onreadystatechange = () =>{
            if((ajax.readyState == 4)){
                if(ajax.status == 200){
                    let cidadeJson = ajax.responseText;
                    let parseToJson = new DOMParser();
                    let cidadeObject = xmlToJson(parseToJson.parseFromString(cidadeJson,'text/xml'));
                    this.controladorSolicitante.tratarIdCidadeRecebidoViaAjax(cidadeObject);
                }
            }
        }
        ajax.send();
    }

    buscarPrevisaoParaOsProximosDias(idCidade,controlador){
        this.controladorSolicitante = controlador;
        const urlApi =  `http://servicos.cptec.inpe.br/XML/cidade/${idCidade}/previsao.xml`;
        let ajax = new XMLHttpRequest();
        ajax.open("GET",urlApi);
        ajax.onreadystatechange = () =>{
            if((ajax.readyState == 4)){
                if(ajax.status == 200){
                    let informacoesTempoJson = ajax.responseText;
                    let parseToJson = new DOMParser();
                    let informacoesTempoObject = xmlToJson(parseToJson.parseFromString(informacoesTempoJson,'text/xml'));
                    this.controladorSolicitante.tratarInformacoesRelacionadoAoTempoDaCidade(informacoesTempoObject);
                }
            }
        }
        ajax.send();
    }
}