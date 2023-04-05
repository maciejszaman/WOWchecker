import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import * as SharedTypes from "../../shared/types";
import { MythicPlus } from "./MythicPlus/MythicPlus";
import * as Types from "./Overview.types";
import { CharacterInfo } from "./CharacterInfo/CharacterInfo";
import { CharacterScore } from "./CharacterScore/CharacterScore";
import { Raid } from "./Raid/Raid";

export const Overview = ({ server, profileData }: Types.OverviewProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [
    { data: mythicPlusData, loading: mythicPlusLoading },
    fetchMythicPlusData,
  ] = useAxios<SharedTypes.MythicPlusData>(
    {
      url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${profileData.name.toLowerCase()}/mythic-keystone-profile?namespace=profile-eu&locale=en_GB&access_token=${token}`,
    },
    { manual: true, autoCancel: false }
  );

  useEffect(() => {
    fetchMythicPlusData();
  }, [profileData]);

  return (
    <div className="mx-auto max-w-4xl px-2">
      <div className="flex flex-col gap-5 my-5 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-2">
          <CharacterInfo server={server} profileData={profileData} />
          <CharacterScore
            itemLevel={profileData.average_item_level}
            mythicRating={mythicPlusData?.current_mythic_rating}
          />
        </div>

        {mythicPlusData && !mythicPlusLoading ? (
          <div className="flex flex-col gap-2 justify-evenly tracking-wide text-gray-300 text-lg rounded-lg bg-gray-800 bg-opacity-95">
            <MythicPlus mythicPlusData={mythicPlusData} />
          </div>
        ) : null}

        <Raid server={server} profileData={profileData} />
      </div>
    </div>
  );
};
