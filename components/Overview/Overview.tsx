import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import * as Types from "../Overview/Overview";
import * as SharedTypes from "../../shared/types";
import { MythicPlus } from "./MythicPlus/MythicPlus";
import { Raid } from "./Raid/Raid";
import { CharacterInfo } from "./CharacterInfo/CharacterInfo";
import { CharacterScore } from "./CharacterScore/CharacterScore";

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
    { manual: true }
  );

  useEffect(() => {
    fetchMythicPlusData();
  }, [profileData]);

  return (
    <div className="flex flex-col gap-2 m-2 md:mx-[10%] xl:mx-[15%]">
      <div className="flex flex-col md:flex-row gap-2">
        <CharacterInfo server={server} profileData={profileData} />
        <CharacterScore
          itemLevel={profileData.average_item_level}
          mythicRating={mythicPlusData?.current_mythic_rating}
        />
      </div>

      {mythicPlusData && !mythicPlusLoading ? (
        <div className="flex flex-col gap-2 justify-evenly tracking-wide p-2 text-neutral-300 text-lg rounded-lg bg-neutral-800">
          <MythicPlus mythicPlusData={mythicPlusData} />
        </div>
      ) : null}

      <Raid server={server} name={profileData.name.toLowerCase()} />
    </div>
  );
};
