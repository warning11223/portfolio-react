declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.pdf";

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}