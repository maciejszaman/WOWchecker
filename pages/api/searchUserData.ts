import axios from "axios";
import * as SharedTypes from "../../shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: { name?: string; server?: string; token?: string };
}

const searchUserData = async (
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) => {
  const { name, server, token } = req.body;

  const profileData = await axios.get<SharedTypes.ProfileData>(
    `https://eu.api.blizzard.com/profile/wow/character/${server}/${name}?namespace=profile-eu&access_token=${token}`
  );

  //   const talentsData = await axios.get<SharedTypes.TalentsData>(
  //     `https://eu.api.blizzard.com/profile/wow/character/${server}/${name}/specializations?namespace=profile-eu&locale=en_GB&access_token=${token}`
  //   );

  //   const specData = await axios.get<SharedTypes.SpecData>(
  //     `https://eu.api.blizzard.com/data/wow/playable-specialization/${talentsData.data.active_specialization.id}?namespace=static-9.2.7_44981-eu&access_token=${token}`
  //   );

  //   const playerEquipment = await axios.get<SharedTypes.PlayerEquipment>(
  //     `https://eu.api.blizzard.com/profile/wow/character/${server}/${name}/equipment?namespace=profile-eu&locale=en_GB&access_token=${token}`
  //   );

  // Stats

  //   const statsData = await axios.get<SharedTypes.StatsData>(
  //     `https://eu.api.blizzard.com/profile/wow/character/${server}/${name}/statistics?namespace=profile-eu&locale=en_GB&access_token=${token}`
  //   );

  // MythicPlus

  //   const mythicPlusData = await axios.get<SharedTypes.MythicPlusData>(
  //     `https://eu.api.blizzard.com/profile/wow/character/${server}/${name}/mythic-keystone-profile?namespace=profile-eu&locale=en_GB&access_token=${token}`
  //   );

  //   const playerInfo = [
  //     profileData.data,
  //     talentsData.data,
  //     specData.data,
  //     playerEquipment.data,
  //     statsData.data,
  //     mythicPlusData.data,
  //   ];

  res.status(200).json(profileData.data);
};

export default searchUserData;
