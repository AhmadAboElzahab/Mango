export interface Column {
  id: string;
  label: string;
  form_field_type: string;
  options?: Array<{ value: string; label: string }>;
}
