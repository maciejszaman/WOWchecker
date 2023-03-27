import useAxios from "axios-hooks";
import React, { useEffect } from "react";
import * as SharedTypes from "../../../shared/types";
import * as Types from "./CharacterInfo.types";
import GroupsIcon from "@mui/icons-material/Groups";
import SyncIcon from "@mui/icons-material/Sync";

export const CharacterInfo = ({
  server,
  profileData,
}: Types.CharacterInfoProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [
    { data: characterMedia, loading: characterMediaLoading },
    fetchCharacterMedia,
  ] = useAxios<SharedTypes.CharacterMedia>(
    {
      url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${profileData.name.toLowerCase()}/character-media?namespace=profile-eu&locale=en_GB&access_token=${token}`,
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    fetchCharacterMedia();
  }, [profileData]);

  return (
    <div className="flex flex-row gap-4 p-3 md:w-3/5 rounded-lg bg-neutral-800">
      {!characterMediaLoading ? (
        <img
          className="shadow-sm rounded-lg h-[84px] w-[84px] aspect-square align-middle"
          alt={profileData.name}
          src={`${characterMedia?.assets[0].value}`}
        ></img>
      ) : (
        <div className="rounded-lg h-[84px] w-[84px] bg-neutral-900 text-sky-50 ">
          <div className="text-center items-center">
            <p>Loading</p>
            <SyncIcon className="animate-spin" />
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <div className="name-lvl flex gap-2">
          <span className="text-neutral-100 text-2xl tracking-wide">
            {profileData.name}
          </span>
          <span className="text-amber-300 text-2xl opacity-50">
            {profileData.level < 70 ? profileData.level : null}
          </span>
        </div>

        <div className="specClassName flex flex-row gap-1 tracking-wide lg:gap-3 text-neutral-400">
          <p>{`${profileData?.active_spec.name.en_US} ${profileData.character_class.name.en_US} ${profileData.race.name.en_US}`}</p>
        </div>
        {profileData.guild ? (
          <div className="flex flex-row opacity-70 text-amber-200 gap-2">
            <GroupsIcon />
            <span>{profileData.guild.name}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
