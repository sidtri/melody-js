import { PageBlock, PageBlockInput, Registry } from './base'
import { Step, Button} from './types'

const kind = 'SchemaFormGenerator'

interface Options {
    steps: Array<Step>;
    buttons: Array<Button>;
}

const defaults: Readonly<Options> = Object.freeze({
    steps: [],
    buttons: [],
})

export class PageBlockSchemaFormGenerator extends PageBlock {
    readonly kind = kind

    options: Options = { ...defaults }

    constructor (i?: PageBlockInput) {
        super(i)
        this.applyOptions(i?.options as Partial<Options>)
    }

    applyOptions (o?: Partial<Options>): void {
        if (!o) return

        if (o.steps) {
            this.options.steps = o.steps.map(s => new Step(s))
        }

        if (o.buttons) {
            this.options.buttons = o.buttons.map(b => new Button(b))
        }
    }
}


Registry.set(kind, PageBlockSchemaFormGenerator)
