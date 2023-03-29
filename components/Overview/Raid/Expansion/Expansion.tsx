import React from "react";
import * as Types from "./Expansion.types";

export const Expansion = ({ expansion }: Types.ExpansionProps) => {
  console.log(expansion);
  return (
    <div className="bg-neutral-700 p-3 rounded-lg ">
      {expansion.instances.map((raid) => (
        <div className="flex flex-row">
          <p className="text-neutral-300">{raid.instance.name}</p>
          {raid.modes.map((mode, index) => (
            <div className="flex gap-2 text-neutral-400">
              <p>{mode.difficulty.name}</p>
              <span>{mode.progress.completed_count}</span>
              <span>/</span>
              <span>{mode.progress.total_count}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
