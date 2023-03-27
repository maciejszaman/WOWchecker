import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import * as SharedTypes from "../../../shared/types";
import * as Types from "../Raid/Raid.types";

export const Raid = ({ server, name }: Types.RaidProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [{ data: raidData, loading: raidDataLoading }, fetchRaidData] =
    useAxios<SharedTypes.RaidData>(
      {
        url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${name}/encounters/raids?namespace=profile-eu&locale=en_GB&access_token=${token}`,
      },
      {
        manual: true,
      }
    );

  return <div>gowno</div>;
};
