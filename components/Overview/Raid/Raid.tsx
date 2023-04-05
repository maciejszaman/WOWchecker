import { Box, Tab, Tabs, Typography } from "@mui/material";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import * as SharedTypes from "../../../shared/raid.types";
import * as Types from "../Raid/Raid.types";
import { Expansion } from "./Expansion/Expansion";

export const Raid = ({ server, profileData }: Types.RaidProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 1 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [{ data: raidData, loading: raidDataLoading }, fetchRaidData] =
    useAxios<SharedTypes.RaidData>(
      {
        url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${profileData.name.toLowerCase()}/encounters/raids?namespace=profile-eu&locale=en_GB&access_token=${token}`,
      },
      {
        manual: true,
        autoCancel: false,
      }
    );

  console.log(raidData);

  useEffect(() => {
    fetchRaidData();
  }, [profileData]);

  return (
    <div className="text-gray-300 rounded-lg bg-gray-800 bg-opacity-95">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="basic tabs example"
        className="bg-gray-700 rounded-t-lg shadow-sm"
      >
        {raidData?.expansions?.map((expansion, index) => (
          <Tab label={expansion.expansion.name} {...a11yProps(index)} />
        ))}
      </Tabs>

      {raidData?.expansions?.map((expansion, index) => (
        <TabPanel value={value} index={index}>
          <Expansion expansion={expansion} key={index} />
        </TabPanel>
      ))}
    </div>
  );
};
