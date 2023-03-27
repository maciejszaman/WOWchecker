import * as SharedTypes from "../../../shared/types";
import React, { useEffect } from "react";
import * as Types from "./ItemData.types";
import useAxios from "axios-hooks";
import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";

export const ItemData = ({ item }: Types.ItemDataProps) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [{ data: itemMedia, loading: itemLoading }] =
    useAxios<SharedTypes.ItemMedia>(
      `https://eu.api.blizzard.com/data/wow/media/item/${item.item.id}?namespace=static-eu&locale=en_GB&access_token=${token}`
    );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <>
      <ListItem
        dense
        divider
        alignItems="center"
        className="sm:w-full md:w-[100%] lg:w-[49%] xl:w-[49%] 2xl:w-[32%]"
      >
        {itemMedia && !itemLoading ? (
          <ListItemAvatar>
            <Avatar
              alt={item.name}
              src={itemMedia ? itemMedia.assets?.[0].value : ""}
              variant="square"
            />
          </ListItemAvatar>
        ) : (
          <ListItemAvatar>
            <Avatar alt={item.name} src={""} variant="square" />
          </ListItemAvatar>
        )}
        <ListItemText
          primary={
            <Button size="small" onClick={handleOpen} className="p-0 text-left">
              {item.name}
            </Button>
          }
          secondary={
            <>
              <span>{item.level.display_string.slice(11)}</span>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-96 backdrop-blur-sm p-5 border-2 border-neutral-600 shadow-2xl">
                  <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-5">
                      <Avatar
                        alt={item.name}
                        src={itemMedia ? itemMedia.assets?.[0].value : ""}
                        variant="rounded"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <Typography
                        id="modal-modal-description"
                        className="text-neutral-200"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        id="modal-modal-description"
                        className="text-neutral-300"
                      >
                        {item.level.display_string}
                      </Typography>
                      <div className="flex flex-row justify-between">
                        <Typography
                          id="modal-modal-description"
                          className="text-neutral-400"
                        >
                          {item.slot.name}
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          className="text-neutral-400"
                        >
                          {item.item_subclass.name}
                        </Typography>
                      </div>
                      <Typography
                        id="modal-modal-description"
                        className="text-neutral-400"
                      >
                        {item.armor?.display.display_string}
                      </Typography>
                      {item.stats?.map((stat, index) => (
                        <Typography
                          key={index}
                          id="modal-modal-description"
                          className="text-neutral-300"
                        >
                          {stat.is_negated ? null : stat.display.display_string}
                        </Typography>
                      ))}
                      {item.enchantments?.map((enchant, index) => (
                        <Typography
                          key={index}
                          id="modal-modal-description"
                          className="text-purple-600"
                        >
                          {enchant.display_string.slice(0, -48)}
                        </Typography>
                      ))}
                      {item.sockets?.map(
                        (
                          socket: { display_string: any },
                          index: React.Key | null | undefined
                        ) => (
                          <Typography
                            key={index}
                            id="modal-modal-description"
                            className="text-emerald-600"
                          >
                            {socket.display_string
                              ? socket.display_string
                              : "Empty socket"}
                          </Typography>
                        )
                      )}
                      {item.spells?.map((spell, index) => (
                        <Typography
                          key={index}
                          id="modal-modal-description"
                          className="text-sky-300"
                        >
                          {spell.description}
                        </Typography>
                      ))}
                    </div>
                  </div>
                </Box>
              </Modal>
            </>
          }
        />
      </ListItem>
    </>
  );
};
