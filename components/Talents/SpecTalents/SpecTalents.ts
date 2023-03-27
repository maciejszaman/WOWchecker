import * as SharedTypes from "../../../shared/types";

export interface SpecTalentsProps {
  specTalent: SharedTypes.SelectedSpecTalent;
  loading: boolean;
}

export interface SpecTalentMedia {
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
