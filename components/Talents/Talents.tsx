import { List, ListItem } from "@mui/material";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { ClassTalents } from "./ClassTalents/ClassTalents";
import { SpecTalents } from "./SpecTalents/SpecTalents";
import * as Types from "./Talents.types";
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
      autoCancel: false,
    }
  );

  useEffect(() => {
    fetchSpecializationsData();
  }, [profileData]);

  return (
    <div
      className="flex flex-col justify-center gap-5 sm:flex-row p-5 rounded-lg
    "
    >
      <List className=" bg-gray-800 rounded-lg bg-opacity-95 text-gray-300 h-fit">
        <ListItem className="-mt-2 mb-3 text-sm font-medium bg-gray-700 tracking-wider shadow-sm rounded-t-lg">
          {profileData.character_class.name.en_GB.toUpperCase()}
        </ListItem>
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
          <div className="italic text-gray-500 p-3 py-9">
            This player has no talents selected
          </div>
        )}
      </List>
      <List className=" bg-gray-800 bg-opacity-95 text-gray-300 rounded-lg h-fit">
        <ListItem className="-mt-2 mb-3 text-sm font-medium bg-gray-700 bg-opacity-75 tracking-wider shadow-sm rounded-t-lg">
          {specializationsData?.active_specialization
            ? specializationsData?.active_specialization.name.toUpperCase()
            : "SPEC"}
        </ListItem>
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
          <div className="italic text-gray-500 p-3 py-9">
            This player has no talents selected
          </div>
        )}
      </List>
    </div>
  );
};
