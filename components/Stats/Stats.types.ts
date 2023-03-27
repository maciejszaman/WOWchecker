import * as SharedTypes from "../../shared/types";

export interface StatsProps {
  server: string;
  profileData: SharedTypes.ProfileData | undefined;
}

export interface MainStat {
  name: string;
  value: number;
}
