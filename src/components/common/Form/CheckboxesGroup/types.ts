import { CategoryType } from '../../../../types/types';

export interface CheckboxesGroupType {
  title: string;
  checkboxesList: Array<CategoryType>;
  onChange(id: string, isActive: boolean): void;
}
