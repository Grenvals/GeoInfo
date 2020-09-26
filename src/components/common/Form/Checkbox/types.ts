export interface CheckboxPropsType {
  name?: string;
  label: string;
  id: string;
  checked: boolean;
  onChange(id: string, isChecked: boolean): void;
}
