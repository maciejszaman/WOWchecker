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
    { manual: true }
  );

  useEffect(() => {
    fetchPlayerEquipment();
  }, [profileData]);

  return (
    <div className="flex flex-col gap-5 md:ml-[10%] md:mr-[10%] md:mt-3 md:mb-3">
      {!playerEquipmentLoading ? (
        <>
          <Paper className="bg-neutral-800">
            <div className="CharacterItems p-2">
              <ul className="flex md:flex-row md:flex-wrap flex-col flex-start gap-2">
                {playerEquipment?.equipped_items.map((item, index) => (
                  <ItemData server={server} key={index} item={item} />
                ))}
              </ul>
            </div>
          </Paper>
          <Paper className="bg-neutral-800 w-fit">
            <ListItem>
              <ListItemText
                secondary={`Item Level: ${profileData?.average_item_level}`}
              ></ListItemText>
            </ListItem>
          </Paper>{" "}
        </>
      ) : (
        <div className="h-4/5 bg-neutral-500 animate-pulse w-max"></div>
      )}
    </div>
  );
};
