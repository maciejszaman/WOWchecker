import axios from "axios";
import { useEffect, useState } from "react";
import * as SharedTypes from "../shared/types";
import { GrSearch } from "react-icons/gr";
import { Navigation } from "../components/Navigation/Navigation";
import SyncIcon from "@mui/icons-material/Sync";
import {
  createTheme,
  MenuItem,
  Select,
  StyledEngineProvider,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import useAxios from "axios-hooks";
import { Footer } from "../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [searchValue, setSearchValue] = useState("");
  const [server, setServer] = useState("draenor");
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [{ data: profileData, loading: profileDataLoading }, fetchProfileData] =
    useAxios<SharedTypes.ProfileData>(
      {
        url: `https://eu.api.blizzard.com/profile/wow/character/${server}/${searchValue.toLowerCase()}?namespace=profile-eu&access_token=${token}`,
      },
      { manual: true }
    );

  const submit = async () => {
    try {
      setLoading(true);
      await fetchProfileData();
      setCollapsed(true);
      setLoading(false);
    } catch {
      toast.error("User not found");
      setLoading(false);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setServer(event.target.value as string);
  };

  useEffect(() => {
    axios
      .post<SharedTypes.AccessToken>(
        "https://oauth.battle.net/token",
        new URLSearchParams({
          grant_type: "client_credentials",
        }),
        {
          auth: {
            username: "a175b90c11174577a5d6d4e7e484fe4f",
            password: "0qnG70QlkHL0NpYguzFH5dSA3AjIUjvu",
          },
        }
      )
      .then((response) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("token", response.data.access_token || "");
        }
      });
  }, []);

  useEffect(() => {
    console.log("profileData changed");
  }, [profileData]);

  return (
    <>
      <StyledEngineProvider>
        <ThemeProvider theme={darkTheme}>
          <Toaster />
          {profileDataLoading ? (
            <div
              className={
                "bg-zinc-900 z-50 flex flex-row text-sky-50 text-center h-[100vh] w-[100%] "
              }
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <p>Loading</p>
                <SyncIcon className="animate-spin" />
              </div>
            </div>
          ) : null}
          <div
            className={`flex justify-center text-center gap-5 items-center p-5 bg-neutral-900 ${
              collapsed ? "h-30" : "h-[100vh] flex-col"
            } transition-all duration-1000`}
          >
            <div
              className={`text-5xl text-neutral-50 ${
                collapsed ? "hidden" : null
              }`}
            >
              Wow profile viewer
            </div>
            <TextField
              autoFocus
              className={`${
                collapsed ? "w-[30%]" : "w-[50%] md:w-[20%]"
              } transition-all duration-500`}
              id="outlined-basic"
              label="Character Name"
              value={searchValue}
              variant="outlined"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  submit();
                }
              }}
            ></TextField>
            <Select
              className={`${
                collapsed ? "w-[30%]" : "w-[50%]  md:w-[20%]"
              } transition-all duration-500`}
              defaultValue="Draenor"
              id="demo-simple-select"
              label="Server"
              labelId="demo-simple-select-label"
              value={server}
              onChange={handleChange}
            >
              <MenuItem value={"draenor"}>Draenor</MenuItem>
              <MenuItem value={"burning-legion"}>Burning Legion</MenuItem>
              <MenuItem value={"defias-brotherhood"}>
                Defias Brotherhood
              </MenuItem>
              <MenuItem value={"kazzak"}>Kazzak</MenuItem>
              <MenuItem value={"silvermoon"}>Silvermoon</MenuItem>
            </Select>
            <div
              onClick={() => {
                !profileDataLoading ? submit() : null;
              }}
              className={`p-5 bg-neutral-400 rounded-xl shadow-xl hover:bg-neutral-300 transition-all duration-500 hover:-translate-y-1`}
            >
              <GrSearch />
            </div>
          </div>
          {collapsed ? (
            <>
              <div className="body h-fit min-h-screen">
                <Navigation server={server} profileData={profileData} />
              </div>
              <Footer />
            </>
          ) : null}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
