export interface Option<TValue = number | string> {
  label: string;
  value: TValue;
}

export interface FormField<TOption = Option> {
  id: number;
  label: string;
  field_key: string;
  model_name: string;
  form_field_type: string;
  form_help_text: string;
  form_is_required: boolean;
  form_order: number;
  form_stage: string;
  form_width: number;
  data_source: string;
  table_is_visible: boolean;
  table_is_pinned: boolean;
  table_order: number;
  options?: TOption[];
}

export interface UserTabColumn {
  field_key: string;
  form_field_id: number;
  locked: boolean;
  order: number;
  visible: boolean;
  width: number;
}

// Customize this filter shape if known, or keep generic
export interface UserTab<TFilters = Record<string, unknown>> {
  id: number;
  model_name: string;
  tab_name: string;
  is_default: boolean;
  search_term: string;
  filters: TFilters;
  columns: UserTabColumn[];
}

export interface TabsResponse<TField = FormField, TTab = UserTab> {
  form_fields: TField[];
  tabs: TTab[];
}
