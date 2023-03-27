import * as SharedTypes from "../../../shared/types";

export interface ClassTalentsProps {
  classTalent: SharedTypes.SelectedClassTalent;
  loading: boolean;
}

export interface ClassTalentMedia {
  _links: Links;
  assets: Asset[];
  id: number;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Asset {
  file_data_id: number;
  key: string;
  value: string;
}
