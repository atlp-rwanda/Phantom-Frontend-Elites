import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const ContactSuccess = () => {
  const { t } = useTranslation();
  return (
    <div className="h-[98vh] w-[320px] md:w-[500px] mx-auto">
      <div className="absolute text-gray-700 text-center font-bold tracking-wider bg-[#e7e5e4] w-[320px] md:w-[500px] h-[250px] mt-[30vh] py-10 rounded-md shadow-xl">
        <h1 className="text-3xl pb-2">
          {t("contactSuccess.greetings")}{" "}
          <FontAwesomeIcon className="text-yellow-400" icon={faHand} />
        </h1>
        <p className="text-xl py-2">{t("contactSuccess.introTitle")}</p>
        <p>{t("contactSuccess.feedbackPromise")}</p>
        <p className="pt-10">{t("contactSuccess.end")}</p>
      </div>
    </div>
  );
};

export default ContactSuccess;
