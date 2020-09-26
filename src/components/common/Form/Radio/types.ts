export interface RadioPropsType {
  name: string;
  label: string;
  id: string;
  isChecked: boolean;
  onChange(id: string): void;
}
