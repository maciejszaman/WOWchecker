export interface AccessToken {
  access_token: string;
}

export interface ProfileData {
  guild: Guild;
  _links: Links;
  id: number;
  name: string;
  gender: Gender;
  faction: Faction;
  race: Race;
  character_class: CharacterClass;
  active_spec: ActiveSpec;
  realm: Realm;
  level: number;
  experience: number;
  achievement_points: number;
  achievements: Achievements;
  titles: Titles;
  pvp_summary: PvpSummary;
  encounters: Encounters;
  media: Media;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  specializations: Specializations;
  statistics: Statistics;
  mythic_keystone_profile: MythicKeystoneProfile;
  equipment: Equipment;
  appearance: Appearance;
  collections: Collections;
  active_title: ActiveTitle;
  reputations: Reputations;
  quests: Quests;
  achievements_statistics: AchievementsStatistics;
  professions: Professions;
  covenant_progress: CovenantProgress;
}

export interface Guild {
  name: string;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Gender {
  type: string;
  name: Name;
}

export interface Name {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Faction {
  type: string;
  name: Name2;
}

export interface Name2 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Race {
  key: Key;
  name: Name3;
  id: number;
}

export interface Key {
  href: string;
}

export interface Name3 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface CharacterClass {
  key: Key2;
  name: Name4;
  id: number;
}

export interface Key2 {
  href: string;
}

export interface Name4 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface ActiveSpec {
  key: Key3;
  name: Name5;
  id: number;
}

export interface Key3 {
  href: string;
}

export interface Name5 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Realm {
  key: Key4;
  name: Name6;
  id: number;
  slug: string;
}

export interface Key4 {
  href: string;
}

export interface Name6 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Achievements {
  href: string;
}

export interface Titles {
  href: string;
}

export interface PvpSummary {
  href: string;
}

export interface Encounters {
  href: string;
}

export interface Media {
  href: string;
}

export interface Specializations {
  href: string;
}

export interface Statistics {
  href: string;
}

export interface MythicKeystoneProfile {
  href: string;
}

export interface Equipment {
  href: string;
}

export interface Appearance {
  href: string;
}

export interface Collections {
  href: string;
}

export interface ActiveTitle {
  key: Key5;
  name: Name7;
  id: number;
  display_string: DisplayString;
}

export interface Key5 {
  href: string;
}

export interface Name7 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface DisplayString {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Reputations {
  href: string;
}

export interface Quests {
  href: string;
}

export interface AchievementsStatistics {
  href: string;
}

export interface Professions {
  href: string;
}

export interface CovenantProgress {
  chosen_covenant: ChosenCovenant;
  renown_level: number;
  soulbinds: Soulbinds;
}

export interface ChosenCovenant {
  key: Key6;
  name: Name8;
  id: number;
}

export interface Key6 {
  href: string;
}

export interface Name8 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Soulbinds {
  href: string;
}

export interface PlayerEquipment {
  _links: Links;
  character: Character;
  equipped_items: EquippedItem[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Character {
  key: Key;
  name: string;
  id: number;
  realm: Realm;
}

export interface Key {
  href: string;
}

export interface Realm {
  key: Key2;
  name: string;
  id: number;
  slug: string;
}

export interface Key2 {
  href: string;
}

export interface EquippedItem {
  sockets: any;
  item: Item;
  slot: Slot;
  quantity: number;
  context: number;
  bonus_list?: number[];
  quality: Quality;
  name: string;
  media: Media;
  item_class: ItemClass;
  item_subclass: ItemSubclass;
  inventory_type: InventoryType;
  binding: Binding;
  armor?: Armor;
  stats?: Stat[];
  sell_price: SellPrice;
  requirements?: Requirements;
  level: Level2;
  durability?: Durability;
  name_description?: NameDescription;
  is_subclass_hidden?: boolean;
  transmog?: Transmog;
  modified_crafting_stat?: ModifiedCraftingStat[];
  description?: string;
  unique_equipped?: string;
  spells?: Spell[];
  enchantments?: Enchantment[];
  weapon?: Weapon;
}

export interface Item {
  key: Key3;
  id: number;
}

export interface Key3 {
  href: string;
}

export interface Slot {
  type: string;
  name: string;
}

export interface Quality {
  type: string;
  name: string;
}

export interface Media {
  key: Key4;
  id: number;
}

export interface Key4 {
  href: string;
}

export interface ItemClass {
  key: Key5;
  name: string;
  id: number;
}

export interface Key5 {
  href: string;
}

export interface ItemSubclass {
  key: Key6;
  name: string;
  id: number;
}

export interface Key6 {
  href: string;
}

export interface InventoryType {
  type: string;
  name: string;
}

export interface Binding {
  type: string;
  name: string;
}

export interface Armor {
  value: number;
  display: Display;
}

export interface Display {
  display_string: string;
  color: Color;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Stat {
  type: Type;
  value: number;
  display: Display2;
  is_negated?: boolean;
  is_equip_bonus?: boolean;
}

export interface Type {
  type: string;
  name: string;
}

export interface Display2 {
  display_string: string;
  color: Color2;
}

export interface Color2 {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface SellPrice {
  value: number;
  display_strings: DisplayStrings;
}

export interface DisplayStrings {
  header: string;
  gold: string;
  silver: string;
  copper: string;
}

export interface Requirements {
  level: Level;
}

export interface Level {
  value: number;
  display_string: string;
}

export interface Level2 {
  value: number;
  display_string: string;
}

export interface Durability {
  value: number;
  display_string: string;
}

export interface NameDescription {
  display_string: string;
  color: Color3;
}

export interface Color3 {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Transmog {
  item: Item2;
  display_string: string;
  item_modified_appearance_id: number;
}

export interface Item2 {
  key: Key7;
  name: string;
  id: number;
}

export interface Key7 {
  href: string;
}

export interface ModifiedCraftingStat {
  id: number;
  type: string;
  name: string;
}

export interface Spell {
  spell: Spell2;
  description: string;
}

export interface Spell2 {
  key: Key8;
  name: string;
  id: number;
}

export interface Key8 {
  href: string;
}

export interface Enchantment {
  display_string: string;
  enchantment_id: number;
  enchantment_slot: EnchantmentSlot;
}

export interface EnchantmentSlot {
  id: number;
  type: string;
}

export interface Weapon {
  damage: Damage;
  attack_speed: AttackSpeed;
  dps: Dps;
}

export interface Damage {
  min_value: number;
  max_value: number;
  display_string: string;
  damage_class: DamageClass;
}

export interface DamageClass {
  type: string;
  name: string;
}

export interface AttackSpeed {
  value: number;
  display_string: string;
}

export interface Dps {
  value: number;
  display_string: string;
}

export interface ItemMedia {
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
  key: string;
  value: string;
  file_data_id: number;
}

export interface StatsData {
  _links: Links;
  health: number;
  power: number;
  power_type: PowerType;
  speed: Speed;
  strength: Strength;
  agility: Agility;
  intellect: Intellect;
  stamina: Stamina;
  melee_crit: MeleeCrit;
  melee_haste: MeleeHaste;
  mastery: Mastery;
  bonus_armor: number;
  lifesteal: Lifesteal;
  versatility: number;
  versatility_damage_done_bonus: number;
  versatility_healing_done_bonus: number;
  versatility_damage_taken_bonus: number;
  avoidance: Avoidance;
  attack_power: number;
  main_hand_damage_min: number;
  main_hand_damage_max: number;
  main_hand_speed: number;
  main_hand_dps: number;
  off_hand_damage_min: number;
  off_hand_damage_max: number;
  off_hand_speed: number;
  off_hand_dps: number;
  spell_power: number;
  spell_penetration: number;
  spell_crit: SpellCrit;
  mana_regen: number;
  mana_regen_combat: number;
  armor: Armor;
  dodge: Dodge;
  parry: Parry;
  block: Block;
  ranged_crit: RangedCrit;
  ranged_haste: RangedHaste;
  spell_haste: SpellHaste;
  character: Character;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface PowerType {
  key: Key;
  name: string;
  id: number;
}

export interface Key {
  href: string;
}

export interface Speed {
  rating: number;
  rating_bonus: number;
}

export interface Strength {
  base: number;
  effective: number;
}

export interface Agility {
  base: number;
  effective: number;
}

export interface Intellect {
  base: number;
  effective: number;
}

export interface Stamina {
  base: number;
  effective: number;
}

export interface MeleeCrit {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface MeleeHaste {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Mastery {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Lifesteal {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Avoidance {
  rating: number;
  rating_bonus: number;
}

export interface SpellCrit {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Armor {
  base: number;
  effective: number;
}

export interface Dodge {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Parry {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Block {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface RangedCrit {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface RangedHaste {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface SpellHaste {
  rating: number;
  rating_bonus: number;
  value: number;
}

export interface Character {
  key: Key2;
  name: string;
  id: number;
  realm: Realm;
}

export interface Key2 {
  href: string;
}

export interface Realm {
  key: Key3;
  name: string;
  id: number;
  slug: string;
}

export interface Key3 {
  href: string;
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

export interface CharacterMedia {
  _links: Links;
  character: Character;
  assets: Asset[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Character {
  key: Key;
  name: string;
  id: number;
  realm: Realm;
}

export interface Key {
  href: string;
}

export interface Realm {
  key: Key2;
  name: string;
  id: number;
  slug: string;
}

export interface Key2 {
  href: string;
}

export interface Asset {
  key: string;
  value: string;
}

export interface MythicPlusData {
  _links: Links;
  current_period: CurrentPeriod;
  seasons: Season[];
  character: Character2;
  current_mythic_rating: CurrentMythicRating;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface CurrentPeriod {
  period: Period;
  best_runs: BestRun[];
}

export interface Period {
  key: Key;
  id: number;
}

export interface Key {
  href: string;
}

export interface BestRun {
  completed_timestamp: number;
  duration: number;
  keystone_level: number;
  keystone_affixes: KeystoneAffix[];
  members: Member[];
  dungeon: Dungeon;
  is_completed_within_time: boolean;
  mythic_rating: MythicRating;
  map_rating: MapRating;
}

export interface KeystoneAffix {
  key: Key2;
  name: string;
  id: number;
}

export interface Key2 {
  href: string;
}

export interface Member {
  character: Character;
  specialization: Specialization;
  race: Race;
  equipped_item_level: number;
}

export interface Character {
  name: string;
  id: number;
  realm: Realm;
}

export interface Realm {
  key: Key3;
  id: number;
  slug: string;
}

export interface Key3 {
  href: string;
}

export interface Specialization {
  key: Key4;
  name: string;
  id: number;
}

export interface Key4 {
  href: string;
}

export interface Race {
  key: Key5;
  name: string;
  id: number;
}

export interface Key5 {
  href: string;
}

export interface Dungeon {
  key: Key6;
  name: string;
  id: number;
}

export interface Key6 {
  href: string;
}

export interface MythicRating {
  color: Color;
  rating: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface MapRating {
  color: Color2;
  rating: number;
}

export interface Color2 {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Season {
  key: Key7;
  id: number;
}

export interface Key7 {
  href: string;
}

export interface Character2 {
  key: Key8;
  name: string;
  id: number;
  realm: Realm2;
}

export interface Key8 {
  href: string;
}

export interface Realm2 {
  key: Key9;
  name: string;
  id: number;
  slug: string;
}

export interface Key9 {
  href: string;
}

export interface CurrentMythicRating {
  color: Color3;
  rating: number;
}

export interface Color3 {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface DungeonData {
  _links: Links;
  id: number;
  name: string;
  map: Map;
  zone: Zone;
  dungeon: Dungeon;
  keystone_upgrades: KeystoneUpgrade[];
  is_tracked: boolean;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Map {
  name: string;
  id: number;
}

export interface Zone {
  slug: string;
}

export interface Dungeon {
  key: Key;
  name: string;
  id: number;
}

export interface Key {
  href: string;
}

export interface KeystoneUpgrade {
  upgrade_level: number;
  qualifying_duration: number;
}

export interface DungeonJournalData {
  _links: Links;
  id: number;
  name: Name;
  map: Map;
  description: Description;
  encounters: Encounter[];
  expansion: Expansion;
  location: Location;
  modes: Mode[];
  media: Media;
  minimum_level: number;
  category: Category;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Name {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Map {
  name: Name2;
  id: number;
}

export interface Name2 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Description {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Encounter {
  key: Key;
  name: Name3;
  id: number;
}

export interface Key {
  href: string;
}

export interface Name3 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Expansion {
  key: Key2;
  name: Name4;
  id: number;
}

export interface Key2 {
  href: string;
}

export interface Name4 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Location {
  name: Name5;
  id: number;
}

export interface Name5 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Mode {
  mode: Mode2;
  players: number;
  is_tracked: boolean;
}

export interface Mode2 {
  type: string;
  name: Name6;
}

export interface Name6 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Media {
  key: Key3;
  id: number;
}

export interface Key3 {
  href: string;
}

export interface Category {
  type: string;
}
export interface DungeonMedia {
  _links: Links;
  assets: Asset[];
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Asset {
  key: string;
  value: string;
}

export interface MythicSeasonData {
  _links: Links;
  season: Season;
  best_runs: BestRun[];
  character: Character2;
  mythic_rating: MythicRating2;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Season {
  key: Key;
  id: number;
}

export interface Key {
  href: string;
}

export interface BestRun {
  completed_timestamp: number;
  duration: number;
  keystone_level: number;
  keystone_affixes: KeystoneAffix[];
  members: Member[];
  dungeon: Dungeon5;
  is_completed_within_time: boolean;
  mythic_rating: MythicRating;
}

export interface KeystoneAffix {
  key: Key2;
  name: Name;
  id: number;
}

export interface Key2 {
  href: string;
}

export interface Name {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Member {
  character: Character;
  specialization: Specialization;
  race: Race;
  equipped_item_level: number;
}

export interface Character {
  name: string;
  id: number;
  realm: Realm;
}

export interface Realm {
  key: Key3;
  id: number;
  slug: string;
}

export interface Key3 {
  href: string;
}

export interface Specialization {
  key: Key4;
  name: Name2;
  id: number;
}

export interface Key4 {
  href: string;
}

export interface Name2 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Race {
  key: Key5;
  name: Name3;
  id: number;
}

export interface Key5 {
  href: string;
}

export interface Name3 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface Dungeon5 {
  key: Key6;
  Name: Name4;
  id: number;
}

export interface Key6 {
  href: string;
}

export interface Name4 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface MythicRating {
  color: Color;
  rating: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Character2 {
  key: Key7;
  name: string;
  id: number;
  realm: Realm2;
}

export interface Key7 {
  href: string;
}

export interface Realm2 {
  key: Key8;
  name: Name5;
  id: number;
  slug: string;
}

export interface Key8 {
  href: string;
}

export interface Name5 {
  en_US: string;
  es_MX: string;
  pt_BR: string;
  de_DE: string;
  en_GB: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  ru_RU: string;
  ko_KR: string;
  zh_TW: string;
  zh_CN: string;
}

export interface MythicRating2 {
  color: Color2;
  rating: number;
}

export interface Color2 {
  r: number;
  g: number;
  b: number;
  a: number;
}
