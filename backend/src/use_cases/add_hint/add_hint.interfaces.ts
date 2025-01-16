export interface IAddHintControllerExecute {
  text?: string;
  isActive?: boolean;
  words?: string[];
}

export interface IAddHintControllerValidator {
  checkTitle(title?: string): true;
  checkActiveState(state?: boolean): true;
  checkWords(words?: string[]): true;
}

export interface IAddHintControllerRepository {
  hasDuplicate(title: string): Promise<boolean>;
  create(hint: IAddHintControllerExecute): Promise<{ id: string }>
}

export interface IAddHintController {
  validator: IAddHintControllerValidator,
  repository: IAddHintControllerRepository,
}
