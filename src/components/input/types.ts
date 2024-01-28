export type InputTypes = {
  label?: string;
  placeholder?: string;
  type: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: React.CSSProperties;
  name?: string;
  value: string;
}