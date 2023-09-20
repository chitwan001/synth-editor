import {IOptionalEditorOptions} from "./types";
import {SynthEditor} from "./setup";
import {DomService} from "./services/dom";

export const initEditor = (parent: HTMLElement, options?: IOptionalEditorOptions) => {
    const dom = new DomService();
    const editor = new SynthEditor(dom,parent,options)
}