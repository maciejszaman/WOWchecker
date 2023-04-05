import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import * as SharedTypes from "../../shared/types";
import * as Types from "./Stats.types";
import FlareIcon from "@mui/icons-material/Flare";
import LanguageIcon from "@mui/icons-material/Language";
import StarsIcon from "@mui/icons-material/Stars";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShieldIcon from "@mui/icons-material/Shield";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PetsIcon from "@mui/icons-material/Pets";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SyncIcon from "@mui/icons-material/Sync";

export const Stats = ({ profileData, server }: Types.StatsProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [{ data: statsData, loading: statsDataLoading }, fetchStats] =
    useAxios<SharedTypes.StatsData>(
      {
        url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${profileData?.name.toLowerCase()}/statistics?namespace=profile-eu&locale=en_GB&access_token=${token}`,
      },
      { manual: true, autoCancel: false }
    );

  const [mainStat, setMainStat] = useState<Types.MainStat>();

  useEffect(() => {
    if (statsData) {
      if (
        statsData?.intellect.effective >= statsData?.agility.effective &&
        statsData?.intellect.effective >= statsData?.strength.effective
      ) {
        setMainStat({
          name: "Intellect",
          value: statsData?.intellect.effective,
        });
      } else if (
        statsData?.agility.effective >= statsData?.intellect.effective &&
        statsData?.agility.effective >= statsData?.strength.effective
      ) {
        setMainStat({
          name: "Agility",
          value: statsData?.agility.effective,
        });
      } else if (
        statsData?.strength.effective >= statsData?.agility.effective &&
        statsData?.strength.effective >= statsData?.intellect.effective
      ) {
        setMainStat({
          name: "Strength",
          value: statsData?.strength.effective,
        });
      }
    }
  }, [statsData]);

  useEffect(() => {
    fetchStats();
  }, [profileData]);

  return (
    <div className="flex justify-center">
      <Paper className="bg-gray-800 bg-opacity-95 my-5 max-w-sm">
        <div className="bg-gray-700 rounded-t-lg p-2 text-gray-300 shadow-sm text-sm font-medium uppercase">
          <p className="pl-4">Stats</p>
        </div>
        {!statsDataLoading ? (
          <div className="flex justify-evenly">
            <div className="spec flex flex-col">
              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  <FavoriteIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={"Health"}
                  secondary={statsData?.health}
                />
              </ListItem>

              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  <ShieldIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={"Armor"}
                  secondary={statsData?.armor?.effective}
                />
              </ListItem>

              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  <ElectricBoltIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={statsData?.power_type.name}
                  secondary={statsData?.power}
                />
              </ListItem>

              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  {{
                    Intellect: <PsychologyIcon />,
                    Agility: <PetsIcon />,
                    Strength: <FitnessCenterIcon />,
                  }[mainStat?.name as string] || <p>essa</p>}
                </ListItemAvatar>
                <ListItemText
                  primary={mainStat ? mainStat.name : null}
                  secondary={mainStat ? mainStat.value : null}
                />
              </ListItem>
            </div>
            <div className="flex flex-col pr-4">
              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  <FlareIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={"Crit chance"}
                  secondary={`${statsData?.spell_crit.value.toFixed(1)}%`}
                />
              </ListItem>

              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  <HourglassEmptyIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={"Haste"}
                  secondary={`${statsData?.spell_haste.value.toFixed(1)}%`}
                />
              </ListItem>

              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  <StarsIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={"Mastery"}
                  secondary={`${statsData?.mastery.value.toFixed(1)}%`}
                />
              </ListItem>

              <ListItem sx={{ pl: 4 }}>
                <ListItemAvatar>
                  <LanguageIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={"Versatility"}
                  secondary={`${
                    statsData?.versatility
                  } | ${statsData?.versatility_damage_done_bonus.toFixed(1)}%`}
                />
              </ListItem>
            </div>
          </div>
        ) : (
          <div className="bg-gray-900 text-center text-2xl p-8 animate-pulse w-[358px] h-[288px]">
            <div className="box">
              <p className="">Stats Loading</p>
              <SyncIcon className="animate-spin" />
            </div>
          </div>
        )}
      </Paper>
    </div>
  );
};
