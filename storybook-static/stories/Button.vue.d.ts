export default _sfc_main;
declare namespace _sfc_main {
    const name: string;
    namespace props {
        namespace label {
            const type: StringConstructor;
            const required: boolean;
        }
        namespace primary {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace size {
            const type_2: StringConstructor;
            export { type_2 as type };
            export function validator(value: any): boolean;
        }
        namespace backgroundColor {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
    }
    const emits: string[];
    function setup(props: any, { emit }: {
        emit: any;
    }): {
        classes: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
            [x: string]: any;
            'storybook-button': boolean;
            'storybook-button--primary': any;
            'storybook-button--secondary': boolean;
        }>;
        style: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
            backgroundColor: any;
        }>;
        onClick(): void;
    };
}
