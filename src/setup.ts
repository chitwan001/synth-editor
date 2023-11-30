import {IOptionalEditorOptions} from "./types";
import {IDomService} from "./services/dom";
import {AddNodeMethod} from "./types/dom";
import {ILineCounterService, LineCounter} from "./parts/lineCounter";

export class SynthEditor{

    private _lineCounterService:ILineCounterService
    private _lineCounterView: HTMLElement
    constructor(private _domService:IDomService,private _parent: HTMLElement,options?:IOptionalEditorOptions) {

        this.addStylesToHead(_domService)

        if(options){

        }else{
            this._parent.classList.add('synth-editor')
            this._domService.addStylesToElement(this._parent,{
                position:'relative',
                display:'grid',
                width:'inherit',
                height:'inherit',
                padding: 0,
                margin: 0
            })
            //defaults to light mode if no option specified
            this._parent.classList.add('synth-light')
        }

        // Initializing other parts
        this._lineCounterService = new LineCounter(this._domService)
        this._lineCounterView = this._lineCounterService.getParent

        this._domService.addNodeToElement(this._parent,AddNodeMethod.APPEND,this._lineCounterView)
    }

    /**
     * Initializing styles in the head of the document
     * @param _domService
     * @private
     */
    private addStylesToHead(_domService:IDomService){
        const head = document.head;
        const styleTag = _domService.makeElement('style')

        this._domService.addAttributeToElement(styleTag,'type','text/css');

        this._domService.addHTMLContentToElement(styleTag,'')

        this._domService.addNodeToElement(head,AddNodeMethod.APPEND,styleTag)
    }
}