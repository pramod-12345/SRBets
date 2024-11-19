import React from "react";
import navImages from "../../assets/svg/navbar";
import Typography from "../common/typography";
import { footer } from "../../assets/svg/footer";
import Seperator from "../common/seperator";
import { footerData } from "../../data";

const Footer = () => {
  const socialIcons = [
    { icon: footer?.instagram },
    { icon: footer?.facebook },
    { icon: footer?.whatsapp },
    { icon: footer?.skype },
    { icon: footer?.youtube },
    { icon: footer?.linkedin },
    { icon: footer?.twitter },
  ];

  const coins = [
    { icon: footer?.betblocker },
    { icon: footer?.bitcoin },
    { icon: footer?.bitcoincash },
    { icon: footer?.dogecoin },
    { icon: footer?.ethereum },
    { icon: footer?.hub88 },
    { icon: footer?.litecoin },
    { icon: footer?.responsiveGaming },
    { icon: footer?.tether },
    { icon: footer?.tron },
  ];
  return (
    <footer className="my-[48px] ">
      <div className="flex items-center justify-between py-7">
        <div className="flex flex-col gap-7 sm:gap-3">
          <div className="flex items-center gap-3 font-monasans">
            <img
              src={navImages.logoStarIcon}
              alt="logo"
              className="sm:w-9 sm:h-9 h-8 w-8"
            />
            <span className="text-2xl text-white">
              <b className="mr-2">SR</b>Bets
            </span>
          </div>
          <div className="flex sm:hidden gap-6 items-center">
            {socialIcons?.map((i) => (
              <img src={i?.icon} className="w-6 h-6" />
            ))}
          </div>
          <Typography
            color={"purpleFog"}
            variant={"textSmMedium"}
            content={"© 2024 SRbets.com | All Rights Reserved."}
          />
        </div>
        <div className="hidden sm:flex gap-6 items-center">
          {socialIcons?.map((i) => (
            <img src={i?.icon} className="w-6 h-6" />
          ))}
        </div>
      </div>
      <Seperator />
      <div className=" sm:py-8 py-5 sm:px-4 px-0">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {footerData.map((section, index) => (
            <div key={index} className="">
              <Typography
                color={"purpleFog"}
                variant={"textXsMedium"}
                content={section.section?.toUpperCase()}
              />
              <ul className="mt-4 gap-2 flex flex-col">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="transition duration-200 cursor-pointer"
                  >
                    <Typography
                      color={"white"}
                      variant={"textXsNormal"}
                      content={link}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Seperator />
      <div className="sm:py-8 py-5 sm:px-4 px-0 flex items-center gap-x-[75px] gap-y-[34px] flex-wrap">
        {coins?.map((i) => (
          <img src={i?.icon} alt="" className=" h-[36px]" />
        ))}
        <div>
          <Typography
            variant={"textXsMedium"}
            color={"purpleFog"}
            content="SRbets is committed to responsible gambling, for more information
            visit Gamblingtherapy.org"
          />
          <div className="mt-3">
            <Typography
              variant={"textXsMedium"}
              color={"purpleFog"}
              content="Stake is owned and operated by Medium Rare N.V., registration
              number: 145353, registered address: Korporaalweg 10, Willemstad,
              Curaçao. Contact us at support@stake.com. Payment agent company is
              Medium Rare Limited with address 7-9 Riga Feraiou, LIZANTIA COURT,
              Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and
              Registration number: HE 410775"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
