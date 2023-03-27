import { ProfileData } from "./../../../shared/types";
import * as SharedTypes from "../../../shared/types";

export interface CharacterScoreProps {
  itemLevel: number;
  mythicRating: SharedTypes.CurrentMythicRating | undefined;
}
