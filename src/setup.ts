import {IOptionalEditorOptions} from "./types";
import {IDomService} from "./services/dom";
import {AddNodeMethod} from "./types/dom";

export class SynthEditor{
    constructor(private _domService:IDomService,private _parent: HTMLElement,options?:IOptionalEditorOptions) {

        /**
         * Initializing styles in the head of the document
         */

        const head = document.head;
        const styleTag = _domService.makeElement('style')
        this._domService.addAttributeToElement(styleTag,'type','text/css');

        this._domService.addHTMLContentToElement(styleTag,'.synth-light{\n' +
            '    background-color: #ececec;\n' +
            '}')

        this._domService.addNodeToElement(head,AddNodeMethod.APPEND,styleTag)

        if(options){

        }else{
            this._parent.classList.add('synth-editor')
            this._domService.addStylesToElement(this._parent,{
                display:'grid',
                width:'inherit',
                height:'inherit',
                padding: 0,
                margin: 0
            })
            //defaults to light mode if no option specified
            this._parent.classList.add('synth-light')
        }
    }
}