export type IEditorOptions = {
    ui: 'synth-dark' | 'synth-light'
}

export type MakeOptional<T> = {
    [V in keyof T]?: T[V]
}

export type IOptionalEditorOptions = MakeOptional<IEditorOptions>