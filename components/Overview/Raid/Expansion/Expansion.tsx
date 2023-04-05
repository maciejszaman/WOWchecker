import React from "react";
import * as Types from "./Expansion.types";
import { Instance } from "./Instance/Instance";

export const Expansion = ({ expansion }: Types.ExpansionProps) => {
  return (
    <div className="bg-opacity-75 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {expansion.instances.map((instance, index) => (
        <>
          <Instance expansion={expansion} key={index} instance={instance} />
        </>
      ))}
    </div>
  );
};
