declare module "postcss-px-to-viewport" {
  type Options = {
    unitToConvert: "px" | "rem" | "cm" | "em" | "qy";
    viewportWidth: number;
    viewportHeight: number; // not now used; need for different units and math for different properties
    unitPrecision: number;
    viewportUnit: string;
    fontViewportUnit: string; // vmin is more suitable.
    selectorBlackList: string[];
    propList: string[];
    minPixelValue: number;
    mediaQuery: boolean;
    replace: boolean;
    landscape: boolean;
    landscapeUnit: string;
    landscapeWidth: number;
  };

  export default function (options: Partial<Options>): any;
}

