import * as SharedTypes from "../../shared/types";
import * as TalentsTypes from "../../shared/talents.types";

export interface TalentsProps {
  server: string;
  profileData: SharedTypes.ProfileData;
  talentsData: TalentsTypes.TalentsData;
}
