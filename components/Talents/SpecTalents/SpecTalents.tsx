import { Avatar, ListItem, ListItemAvatar, Tooltip } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";
import * as Types from "./SpecTalents.types";

export const SpecTalents = ({
  specTalent,
  loading,
}: Types.SpecTalentsProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [{ data: specTalentMedia }] = useAxios<Types.SpecTalentMedia>(
    `https://eu.api.blizzard.com/data/wow/media/spell/${specTalent.tooltip.spell_tooltip.spell.id}?namespace=static-eu&locale=en_GB&access_token=${token}`
  );

  return (
    <>
      <Tooltip
        followCursor
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(5px)",
              color: "whitesmoke",
              border: "whitesmoke 1px solid",
            },
          },
        }}
        title={
          <>
            <div className="p-2 flex flex-col gap-2">
              <div className="head flex justify-between">
                {specTalentMedia?.assets[0] ? (
                  <img src={specTalentMedia?.assets[0].value}></img>
                ) : (
                  <img
                    className="h-14"
                    src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg"
                  ></img>
                )}
                <div className="flex-col">
                  <h1>{specTalent.tooltip.spell_tooltip.spell.name}</h1>
                  <p>{`Rank ${specTalent.rank}`}</p>
                </div>
              </div>
              <div className="body flex flex-row justify-between flex-wrap">
                {specTalent.tooltip.spell_tooltip.power_cost &&
                specTalent.tooltip.spell_tooltip.range ? (
                  <div className="left">
                    <p>{specTalent.tooltip.spell_tooltip.power_cost}</p>
                    <p>{specTalent.tooltip.spell_tooltip.range}</p>
                  </div>
                ) : null}

                <div className="right">
                  <p>{specTalent.tooltip.spell_tooltip.cast_time}</p>
                  <p>{specTalent.tooltip.spell_tooltip.cooldown}</p>
                </div>
              </div>
              <div className="desc w-60">
                <p>{specTalent.tooltip.spell_tooltip.description}</p>
              </div>
            </div>
          </>
        }
      >
        <ListItem className="p-1 px-4">
          <ListItemAvatar>
            {!loading ? (
              <Avatar
                className="m-0 border border-amber-500 rounded-sm"
                sx={{ width: 30, height: 30 }}
                src={specTalentMedia?.assets[0].value}
                variant="square"
              ></Avatar>
            ) : (
              <div className="h-[30px] w-[30px] animate-pulse bg-sky-600"></div>
            )}
          </ListItemAvatar>
          {!loading ? (
            <div className="-translate-x-4">
              {specTalent?.tooltip?.talent?.name}
            </div>
          ) : (
            <div className="h-[38px] translate-y-2 -translate-x-3 animate-pulse">
              Loading...
            </div>
          )}
        </ListItem>
      </Tooltip>
    </>
  );
};
