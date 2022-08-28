import { Cep } from "./controler/Cep.js";
import { RequestPage } from "./controler/RequestPage.js";
import { PrevisaoTempo} from "./controler/PrevisaoTempo.js";

export function $(query , tipo = 1){
    if(tipo == 1){
        return document.querySelector(query);
    }else{
        return document.querySelectorAll(query);
    }
}

const cep = new Cep();
const requestPage = new RequestPage();
const previsaoTempo = new PrevisaoTempo();