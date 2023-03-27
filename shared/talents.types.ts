export interface SpecMedia {
  _links: Links;
  assets: Asset[];
  id: number;
}

export interface Asset {
  file_data_id: number;
  key: string;
  value: string;
}

export interface TitleData {
  _links: Links;
  active_title: ActiveTitle;
  character: Character;
  titles: Title[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Character {
  id: number;
  key: Key;
  name: string;
  realm: Realm;
}

export interface Key {
  href: string;
}

export interface Realm {
  id: number;
  key: Key2;
  name: string;
  slug: string;
}

export interface Key2 {
  href: string;
}

export interface ActiveTitle {
  display_string: string;
  id: number;
  key: Key3;
  name: string;
}

export interface Key3 {
  href: string;
}

export interface Title {
  id: number;
  key: Key4;
  name: string;
}

export interface Key4 {
  href: string;
}

export interface ClassMedia {
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

export interface SpecData {
  _links: Links;
  gender_description: GenderDescription;
  id: number;
  media: Media;
  name: Name2;
  playable_class: PlayableClass;
  pvp_talents: PvpTalent[];
  role: Role;
  talent_tiers: TalentTier[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface PlayableClass {
  id: number;
  key: Key;
  name: Name;
}

export interface Key {
  href: string;
}

export interface Name {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface Name2 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface GenderDescription {
  female: Female;
  male: Male;
}

export interface Male {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface Female {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface Media {
  id: number;
  key: Key2;
}

export interface Key2 {
  href: string;
}

export interface Role {
  name: Name3;
  type: string;
}

export interface Name3 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface TalentTier {
  level: number;
  talents: Talent[];
  tier_index: number;
}

export interface Talent {
  column_index: number;
  spell_tooltip: SpellTooltip;
  talent: Talent2;
}

export interface Talent2 {
  id: number;
  key: Key3;
  name: Name4;
}

export interface Key3 {
  href: string;
}

export interface Name4 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface SpellTooltip {
  cast_time: CastTime;
  cooldown?: Cooldown;
  description: Description;
  power_cost?: PowerCost;
  range?: Range;
}

export interface Description {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface CastTime {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface PowerCost {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface Range {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface Cooldown {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface PvpTalent {
  spell_tooltip: SpellTooltip2;
  talent: Talent3;
}

export interface Talent3 {
  id: number;
  key: Key4;
  name: Name5;
}

export interface Key4 {
  href: string;
}

export interface Name5 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface SpellTooltip2 {
  cast_time: CastTime2;
  cooldown?: Cooldown2;
  description: Description2;
  power_cost?: PowerCost2;
  range?: Range2;
}

export interface Description2 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface CastTime2 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface PowerCost2 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface Range2 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface Cooldown2 {
  de_DE: string;
  en_GB: string;
  en_US: string;
  es_ES: string;
  es_MX: string;
  fr_FR: string;
  it_IT: string;
  ko_KR: string;
  pt_BR: string;
  ru_RU: string;
  zh_CN: string;
  zh_TW: string;
}

export interface SpecializationsData {
  _links: Links;
  specializations: Specialization[];
  active_specialization: ActiveSpecialization;
  character: Character;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Specialization {
  specialization: Specialization2;
  glyphs?: Glyph[];
  pvp_talent_slots?: PvpTalentSlot[];
  loadouts: Loadout[];
}

export interface Specialization2 {
  key: Key;
  name: string;
  id: number;
}

export interface Key {
  href: string;
}

export interface Glyph {
  key: Key2;
  name: string;
  id: number;
}

export interface Key2 {
  href: string;
}

export interface PvpTalentSlot {
  selected: Selected;
  slot_number: number;
}

export interface Selected {
  talent: Talent;
  spell_tooltip: SpellTooltip;
}

export interface Talent {
  key: Key3;
  name: string;
  id: number;
}

export interface Key3 {
  href: string;
}

export interface SpellTooltip {
  spell: Spell;
  description: string;
  cast_time: string;
  range?: string;
}

export interface Spell {
  key: Key4;
  name: string;
  id: number;
}

export interface Key4 {
  href: string;
}

export interface Loadout {
  is_active: boolean;
  talent_loadout_code: string;
  selected_class_talents: SelectedClassTalent[];
  selected_spec_talents: SelectedSpecTalent[];
}

export interface SelectedClassTalent {
  id: number;
  rank: number;
  tooltip: Tooltip;
  default_points?: number;
}

export interface Tooltip {
  talent: Talent2;
  spell_tooltip: SpellTooltip2;
}

export interface Talent2 {
  key: Key5;
  name: string;
  id: number;
}

export interface Key5 {
  href: string;
}

export interface SpellTooltip2 {
  spell: Spell2;
  description: string;
  cast_time: string;
  range?: string;
  cooldown?: string;
  power_cost?: string;
}

export interface Spell2 {
  key: Key6;
  name: string;
  id: number;
}

export interface Key6 {
  href: string;
}

export interface SelectedSpecTalent {
  id: number;
  rank: number;
  tooltip: Tooltip2;
}

export interface Tooltip2 {
  talent: Talent3;
  spell_tooltip: SpellTooltip3;
}

export interface Talent3 {
  key: Key7;
  name: string;
  id: number;
}

export interface Key7 {
  href: string;
}

export interface SpellTooltip3 {
  spell: Spell3;
  description?: string;
  cast_time: string;
  range?: string;
  cooldown?: string;
  power_cost?: string;
}

export interface Spell3 {
  key: Key8;
  name: string;
  id: number;
}

export interface Key8 {
  href: string;
}

export interface ActiveSpecialization {
  key: Key9;
  name: string;
  id: number;
}

export interface Key9 {
  href: string;
}

export interface Character {
  key: Key10;
  name: string;
  id: number;
  realm: Realm;
}

export interface Key10 {
  href: string;
}

export interface Realm {
  key: Key11;
  name: string;
  id: number;
  slug: string;
}

export interface Key11 {
  href: string;
}
