import { Box, List, ListItem, ListItemText, Paper } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import useAxios from "axios-hooks";
import * as SharedTypes from "../../shared/types";
import * as Types from "./Equipment.types";
import { ItemData } from "./ItemData/ItemData";
import { Footer } from "../Footer/Footer";

export const Equipment = ({ profileData, server }: Types.EquipmentProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";
  const [
    { data: playerEquipment, loading: playerEquipmentLoading },
    fetchPlayerEquipment,
  ] = useAxios<SharedTypes.PlayerEquipment>(
    {
      url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${profileData?.name.toLowerCase()}/equipment?namespace=profile-eu&locale=en_GB&access_token=${token}`,
    },
    { manual: true, autoCancel: false }
  );

  useEffect(() => {
    fetchPlayerEquipment();
  }, [profileData]);

  return (
    <div className="flex justify-center">
      <div className="my-5 max-w-lg">
        {!playerEquipmentLoading ? (
          <>
            <Paper className="bg-slate-800 bg-opacity-95">
              <div className="bg-gray-700 shadow-sm p-2 bg-opacity-75 rounded-t-lg text-gray-300 text-sm font-medium uppercase">
                <p className="pl-3">Equipment</p>
              </div>
              <div className="CharacterItems p-1">
                <ul className="flex md:flex-row md:flex-wrap flex-col flex-start gap-2">
                  {playerEquipment?.equipped_items.map((item, index) => (
                    <ItemData server={server} key={index} item={item} />
                  ))}
                </ul>
              </div>
            </Paper>
          </>
        ) : (
          <div className="w-lg bg-gray-800 bg-opacity-95 animate-pulse text-gray-300">
            Loading
          </div>
        )}
      </div>
    </div>
  );
};
