import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import * as Types from "./MythicPlus.types";
import { MythicSeason } from "./MythicSeason/MythicSeason";

export const MythicPlus = ({ mythicPlusData }: Types.MythicPlusProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSeason(+event.target.value);
  };

  const newestSeason = mythicPlusData.seasons?.reduce(
    (acc, next) => (next.id > acc ? next.id : acc),
    mythicPlusData.seasons[0].id
  );

  const [selectedSeason, setSelectedSeason] = React.useState(newestSeason);

  return (
    <>
      {mythicPlusData ? (
        mythicPlusData.seasons ? (
          <div className="bg-gray-700 bg-opacity-75 rounded-t-lg shadow-sm w-full flex gap-1 items-center">
            <p className="text-gray-300 text-sm font-medium uppercase order-2">
              Mythic+ Dungeons Top runs
            </p>
            <FormControl
              variant="outlined"
              size="small"
              sx={{ m: 1, minWidth: 80, maxWidth: 225 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Season
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedSeason?.toString()}
                onChange={handleChange}
                label="Season"
                defaultValue={mythicPlusData.seasons[0].id.toString()}
              >
                {mythicPlusData?.seasons
                  ? mythicPlusData?.seasons?.map((season) => (
                      <MenuItem value={season.id}>{season.id}</MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
          </div>
        ) : null
      ) : null}
      {mythicPlusData ? (
        mythicPlusData.seasons ? (
          mythicPlusData.seasons.map((season, index) => (
            <MythicSeason
              key={index}
              selectedSeason={selectedSeason}
              season={season}
            />
          ))
        ) : (
          <p className="italic text-sm text-gray-500 tracking-wide p-6">
            This player has no registered M+ dungeon runs
          </p>
        )
      ) : null}
    </>
  );
};
