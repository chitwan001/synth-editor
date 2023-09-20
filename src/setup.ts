import {IOptionalEditorOptions} from "./types";
import {IDomService} from "./services/dom";
import {AddNodeMethod} from "./types/dom";

export class SynthEditor{
    constructor(private _domService:IDomService,private parent: HTMLElement,options?:IOptionalEditorOptions) {

        /**
         * Initializing styles in the head of the document
         */

        const head = document.head;
        const styleTag = _domService.makeElement('style')
        this._domService.addAttributeToElement(styleTag,'type','text/css');
        this._domService.addNodeToElement(head,AddNodeMethod.APPEND,styleTag)

        if(options){

        }else{
            //defaults to light mode if no option specified
            parent.classList.add('synth-light')
        }
    }
}