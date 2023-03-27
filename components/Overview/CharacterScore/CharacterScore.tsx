import React from "react";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { TbSwords } from "react-icons/tb";
import * as Types from "./CharacterScore.types";

export const CharacterScore = ({
  itemLevel,
  mythicRating,
}: Types.CharacterScoreProps) => {
  return (
    <div className="flex gap-2 justify-evenly text-neutral-300 tracking-wide p-2 md:w-2/5 text-lg rounded-lg bg-neutral-800">
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-neutral-500 text-sm">Average Item Level</p>
        <div className="itemlevel flex flex-row justify-center">
          <div className="pic mt-1 scale-125 mr-2">
            <TbSwords />
          </div>

          {`${itemLevel} iLVL`}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-neutral-500 text-sm">Mythic+ Rating</p>
        <div className="mythic flex flex-row justify-center">
          {mythicRating ? <HourglassTopIcon /> : null}
          {mythicRating ? (
            `${mythicRating.rating.toFixed(0)} M+`
          ) : (
            <span className="text-neutral-400">No rating</span>
          )}
        </div>
      </div>
    </div>
  );
};
