export interface IUseWindowResize {
  listener: (this: Window, ev: UIEvent) => unknown;
}