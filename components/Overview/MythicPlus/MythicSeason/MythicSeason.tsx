import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import * as Types from "./MythicSeason.types";
import * as SharedTypes from "../../../../shared/types";
import { MythicRun } from "./MythicRun/MythicRun";

export const MythicSeason = ({
  season,
  selectedSeason,
}: Types.MythicSeasonProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [{ data: mythicSeasonData, loading: mythicSeasonDataLoading }] =
    useAxios<SharedTypes.MythicSeasonData>(
      `${season.key.href}&access_token=${token}`
    );

  return selectedSeason === season.id ? (
    <div className="bg-neutral-700 p-2 rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {mythicSeasonData
        ? mythicSeasonData.best_runs.map((run, index) => (
            <MythicRun key={index} run={run}></MythicRun>
          ))
        : "This player did not play any dungeons in this period"}
    </div>
  ) : null;
};

{
  /* <div className="flex flex-col gap-2 bg-neutral-700 p-4 rounded-lg">
  <div className="head flex flex-row gap-2 leading-10 text-neutral-100">
    <p className="text-4xl">{`+${dungeon.keystone_level}`}</p>
    <p>{dungeon.dungeon.name}</p>
  </div>
  <div className="body pl-8">
    <p className="text-neutral-400 text-sm">
      {new Date(dungeon.completed_timestamp).toDateString()}
    </p>

    <div className="timer flex flex-row">
      <span>
        {Math.floor((dungeon.duration / (1000 * 60 * 60)) % 24) === 0
          ? null
          : Math.floor((dungeon.duration / (1000 * 60 * 60)) % 24) + ":"}
      </span>
      <span>{`${Math.floor((dungeon.duration / (1000 * 60)) % 60)}:`}</span>

      <span>
        {Math.floor((dungeon.duration / 1000) % 60) < 10
          ? "0" + Math.floor((dungeon.duration / 1000) % 60)
          : Math.floor((dungeon.duration / 1000) % 60)}
      </span>
    </div>
  </div>
</div> */
}
