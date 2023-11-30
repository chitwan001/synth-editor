import {IDomService} from "../services/dom";

export interface ILineCounterService{
    get getParent(): HTMLElement
}

export class LineCounter implements ILineCounterService{

    private readonly _parent: HTMLElement


    constructor(domService:IDomService) {
        this._parent = document.createElement('div');
        domService.addListOfClassName(this._parent,'synth-line-counter')
        domService.addStylesToElement(this._parent,{
            display:'grid',
            position:'absolute',
            left:0,
            top: '50px',
            width:'80px',
            height: 'calc(100% - 50px - 40px)',
            borderRight: '1px solid var(--synth-light-divider-color)'
        })
    }

    get getParent(){
        return this._parent;
    }
}