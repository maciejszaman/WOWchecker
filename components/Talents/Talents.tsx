import {
  Avatar,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import * as SharedTypes from "../../shared/types";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { ClassTalents } from "./ClassTalents/ClassTalents";
import { SpecTalents } from "./SpecTalents/SpecTalents";
import * as Types from "./Talents";
import * as TalentsTypes from "../../shared/talents.types";

export const Talents = ({ profileData, server }: Types.TalentsProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [
    { data: specializationsData, loading: specializationsDataLoading },
    fetchSpecializationsData,
  ] = useAxios<TalentsTypes.SpecializationsData>(
    {
      url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${profileData.name.toLowerCase()}/specializations?namespace=profile-eu&locale=en_GB&access_token=${token}`,
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    fetchSpecializationsData();
  }, [profileData]);

  return (
    <div className="flex flex-col justify-center gap-5 sm:flex-row">
      <List className="my-2 bg-neutral-700 text-neutral-200 drop-shadow rounded-lg h-fit min-w-60">
        <ListItem className="text-lg text-neutral-300 tracking-wider">
          {profileData.character_class.name.en_GB.toUpperCase()}
        </ListItem>
        <Divider className="mb-3"></Divider>
        {specializationsData?.specializations[0].loadouts ? (
          specializationsData.specializations[0].loadouts[0].selected_class_talents.map(
            (classTalent, index) => (
              // eslint-disable-next-line react/jsx-key
              <ClassTalents
                key={index}
                loading={specializationsDataLoading}
                classTalent={classTalent}
              />
            )
          )
        ) : (
          <div className="italic text-neutral-500 px-3 pb-3">
            This player has no talents selected
          </div>
        )}
      </List>
      <List className="my-2 bg-neutral-700 text-neutral-200 drop-shadow rounded-lg h-fit min-w-60">
        <ListItem className="text-lg text-neutral-300 tracking-wider">
          {specializationsData?.active_specialization
            ? specializationsData?.active_specialization.name.toUpperCase()
            : "SPEC"}
        </ListItem>
        <Divider className="mb-3"></Divider>
        {specializationsData?.specializations[0].loadouts ? (
          specializationsData.specializations[0].loadouts[0].selected_spec_talents.map(
            (specTalent, index) => (
              <SpecTalents
                key={index}
                loading={specializationsDataLoading}
                specTalent={specTalent}
              />
            )
          )
        ) : (
          <div className="italic text-neutral-500 px-3 pb-3">
            This player has no talents selected
          </div>
        )}
      </List>
    </div>
  );
};
