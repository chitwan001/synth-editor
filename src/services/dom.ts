import {AddNodeMethod} from "../types/dom";
import {generateCssStyleFromObjKey} from "../utils/ui";

export interface IDomService {
    addNodeToElement(parent: HTMLElement, method?: AddNodeMethod, ...nodes: (Node | string)[]): void,

    makeElement(name: keyof HTMLElementTagNameMap): HTMLElement,

    addAttributeToElement(elem: HTMLElement, name: string, val: string): void

    addStylesToElement(elem: HTMLElement, styles: Record<string, any>): void

    addHTMLContentToElement(elem: HTMLElement, content: any): void
}


export class DomService implements IDomService {
    constructor() {
    }

    /**
     * Adds a node or string to the provided element with the provided method as APPEND or PREPEND.
     * Defaults to APPEND if method not provided
     * @param parent
     * @param method
     * @param nodes
     */
    addNodeToElement(parent: HTMLElement, method?: AddNodeMethod, ...nodes: (Node | string)[]) {
        switch (method) {
            case AddNodeMethod.APPEND:
                parent.append(...nodes)
                break;
            case AddNodeMethod.PREPEND:
                parent.prepend(...nodes)
                break;
            default:
                parent.append(...nodes)
        }
    }

    /**
     * Returns a new html element
     * @param name
     * @param options
     */
    makeElement(name: keyof HTMLElementTagNameMap) {
        return document.createElement(name)
    }

    /**
     * Add specified attribute and value to the given element
     * @param elem
     * @param name
     * @param val
     */
    addAttributeToElement(elem: HTMLElement, name: string, val: string) {
        elem.setAttribute(name, val)
    }

    /**
     * Adds styles to the element provided in Record<string, any>
     * @param elem
     * @param styles
     */
    addStylesToElement(elem: HTMLElement, styles: Record<string, any>) {
        for (const property in styles) {
            const cssProp = generateCssStyleFromObjKey(property)
            elem.style.setProperty(cssProp, styles[property])
        }
    }

    /**
     * Adds HTML Content (inner HTML) to a specified element
     * @param elem
     * @param content
     */
    addHTMLContentToElement(elem: HTMLElement, content: any) {
        elem.innerHTML = content;
    }
}