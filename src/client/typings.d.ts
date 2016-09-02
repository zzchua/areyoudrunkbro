declare var app: {
  environment: string;
};

// webpack require typings:
interface WebpackRequire {
  (id: string): any;
  context(dir: string, useSubdirs: boolean, pattern: RegExp): any;
}

declare var require: WebpackRequire;

declare var Recorder: any;


