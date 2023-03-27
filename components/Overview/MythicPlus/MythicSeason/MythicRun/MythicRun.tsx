import React from "react";
import * as Types from "./MythicRun.types";

export const MythicRun = ({ run }: Types.MythicRunProps) => {
  return (
    <div>
      {run.is_completed_within_time ? (
        <div>
          <p>{run.dungeon.name.en_GB}</p>
          <p>{run.keystone_level}</p>
        </div>
      ) : (
        <div className="text-neutral-500">
          <p>{run.dungeon.name.en_GB}</p>
          <p>{run.keystone_level}</p>
        </div>
      )}
    </div>
  );
};
