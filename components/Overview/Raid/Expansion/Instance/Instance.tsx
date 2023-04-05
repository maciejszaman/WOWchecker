import useAxios from "axios-hooks";
import React, { useEffect } from "react";
import * as Types from "./Instance.types";
import * as RaidTypes from "../../../../../shared/raid.types";
import { Skeleton } from "@mui/material";

export const Instance = ({ instance, expansion }: Types.InstanceProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [
    { data: instanceMedia, loading: instanceMediaLoading },
    fetchInstanceMedia,
  ] = useAxios<RaidTypes.JournalMedia>(
    {
      url: `https://eu.api.blizzard.com/data/wow/media/journal-instance/${instance.instance.id}?namespace=static-eu&locale=en_GB&access_token=${token}`,
    },
    {
      manual: true,
      autoCancel: false,
    }
  );

  useEffect(() => {
    fetchInstanceMedia();
  }, [expansion]);

  return (
    <div className="flex flex-col rounded-lg gap-1 p-3">
      {instanceMedia ? (
        <>
          <img
            className="w-[258px] h-[144px] rounded-lg"
            src={instanceMedia?.assets[0].value}
          />
          <p className="text-gray-300 text-lg font-medium">
            {instance.instance.name}
          </p>
        </>
      ) : (
        <Skeleton
          variant="rectangular"
          width={258}
          height={144}
          className="rounded-lg"
        />
      )}

      <ul className="flex flex-col gap-2">
        {instance.modes.map((mode) => {
          const progressValue =
            (mode.progress.completed_count / mode.progress.total_count) * 100;
          console.log(progressValue);
          return (
            <li>
              <div className="flex justify-between text-sm font-medium text-gray-400 uppercase">
                <p className="">{mode.difficulty.name}</p>
                <p>{`${mode.progress.completed_count}/${mode.progress.total_count}`}</p>
              </div>
              <div className="bg-emerald-400 bg-opacity-10 rounded-sm">
                <div
                  className={`rounded-sm p-1 bg-emerald-400 bg-opacity-60 w-[${progressValue}%]`}
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// w-[calc(${mode.progress.completed_count}/${mode.progress.total_count}*100%)]
