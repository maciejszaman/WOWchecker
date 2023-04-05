import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect, useState } from "react";
import BackpackIcon from "@mui/icons-material/Backpack";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SchemaIcon from "@mui/icons-material/Schema";
import { Stats } from "../Stats/Stats";
import { Equipment } from "../Equipment/Equipment";
import * as Types from "./Navigation.types";
import { Talents } from "../Talents/Talents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Overview } from "../Overview/Overview";

export const Navigation = ({ profileData, server }: Types.NavigationProps) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <BottomNavigation
        className="bg-gray-700 bg-opacity-95"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Overview" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Equipment" icon={<BackpackIcon />} />
        <BottomNavigationAction label="Stats" icon={<EqualizerIcon />} />
        <BottomNavigationAction label="Talents" icon={<SchemaIcon />} />
      </BottomNavigation>
      <div className="mb-20">
        {value == 0 ? (
          <Overview server={server} profileData={profileData} />
        ) : null}
        {value == 1 ? (
          <Equipment server={server} profileData={profileData} />
        ) : null}
        {value == 2 ? (
          <Stats server={server} profileData={profileData} />
        ) : null}
        {value == 3 ? (
          <Talents server={server} profileData={profileData} />
        ) : null}
      </div>
    </>
  );
};
