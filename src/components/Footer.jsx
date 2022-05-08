import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div
      test-data="footerComponent"
      className="grid grid-rows-2 text-white py-2 lg:px-24 px-6 ] bg-primary"
    >
      <div className="grid lg:grid-cols-4 row-span-3">
        <div className="mt-[40px]">
          <Link to="/">
            <h1 className="font-bold text-[35px]">Phantom</h1>
          </Link>
        </div>

        <div className="mt-[50px]">
          <h2 className="text-lg pb-4">{t("footer.titleCompany")}</h2>
          <h2 className="text-sm text-[#9CA3AF]">
            <Link className="hover:text-white" to="/about" target="_blank">
              {t("footer.aboutUs")}
            </Link>
          </h2>
        </div>

        <div className="mt-[50px]">
          <h2 className="text-lg pb-4">{t("footer.contact")}</h2>
          <h2 className="text-sm text-[#9CA3AF]">
            <Link className="hover:text-white" target="_blank" to="/contact">
              {t("footer.contactUs")}
            </Link>
          </h2>
        </div>

        <div className="mt-[50px]">
          <h2 className="text-lg pb-4">{t("footer.stayInTouch")}</h2>
          <div className="flex border-2 lg:w-[280px] w-[300px] border-gray-400 p-2 rounded-md">
            <input
              className=" appearance-none bg-transparent focus:outline-none lg:w-[150px]"
              type="text"
              placeholder={t("footer.emailPlaceholder")}
            />
            <span className="pl-4 text-[#9CA3AF] hover:text-gray-300">
              <Link to="">{t("footer.subscribe")}</Link>
            </span>
          </div>
          <div className="text-[#9CA3AF] mt-4">
            <Link to="">
              <FontAwesomeIcon
                className="pr-4 hover:text-gray-300"
                icon={faTwitter}
              />
            </Link>
            <Link to="">
              <FontAwesomeIcon
                className="px-4 hover:text-gray-300"
                icon={faLinkedinIn}
              />
            </Link>
            <Link to="">
              <FontAwesomeIcon
                className="px-4 hover:text-gray-300"
                icon={faFacebookF}
              />
            </Link>
            <Link to="">
              <FontAwesomeIcon
                className="px-4 hover:text-gray-300"
                icon={faInstagram}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="row-span-1 pt-[40px] pb-8">
        <p className="lg:text-center text-[#9CA3AF]">&copy; Phantom 2022</p>
      </div>
    </div>
  );
};

export default Footer;
