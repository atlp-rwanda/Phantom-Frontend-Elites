import React, { useEffect, useState } from "react";
import Navbar from "./NavbarComponent/Navbar";
import Footer from "./Footer";
import contactFormValidations from "../validations/contactForm";
import { useDispatch } from "react-redux";
import { sendMessage } from "../redux/actions/contactAction";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  // dispatch actions
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    telnumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(contactFormValidations(values));
    const contactData = {
      fullname: values.fullname,
      email: values.email,
      telnumber: values.telnumber,
      message: values.message,
    };
    dispatch(sendMessage(contactData));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setValues({
        fullname: "",
        email: "",
        telnumber: "",
        message: "",
      });
    }
  }, [errors]);

  return (
    <>
      <Navbar />
      <div className="mt-14 lg:mt-20 lg:h-[92vh] flex flex-col lg:px-[100px] bg-white px-[14px]">
        <div>
          <h1 className="text-primary text-2xl lg:text-4xl font-bold mt-8 mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-primary text-md lg:text-lg mb-8 tracking-wide">
            {t("contact.infoPart1")}
            <br /> {t("contact.infoPart2")}
          </p>
        </div>
        {/* Contact Form */}
        <form test-data="formComponent" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col md:space-x-[50px]">
            <div className="text-lg text-primary">
              <label>{t("contact.nameLabel")}</label>
              <input
                className="block border border-primary w-full md:w-[350px] bg-transparent p-2 rounded mb-4"
                type="text"
                placeholder={t("contact.namePlaceholder")}
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
              />
              {errors.fullname && (
                <div className="text-red-800 text-sm -mt-4">
                  {errors.fullname}
                </div>
              )}
            </div>
            <div className="text-lg text-primary">
              <label>{t("contact.emailLabel")}</label>
              <input
                className="block border border-primary w-full md:w-[300px] bg-transparent p-2 rounded mb-4 focus:border-0"
                type="text"
                placeholder={t("contact.emailPlaceholder")}
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="text-red-800 text-sm -mt-4">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="text-lg text-primary">
            <label>{t("contact.telnumberLabel")}</label>
            <input
              className="block border border-primary w-full md:w-[700px] bg-transparent p-2 rounded mb-4 z-30 focus:border-none"
              type="text"
              name="telnumber"
              placeholder={t("contact.telnumberPlaceholder")}
              value={values.telnumber}
              onChange={handleChange}
            />
            {errors.telnumber && (
              <div className="text-red-800 text-sm -mt-4">
                {errors.telnumber}
              </div>
            )}
          </div>
          <div className="text-lg text-primary">
            <label>{t("contact.messageLabel")}</label>
            <textarea
              className="block border border-primary w-full md:w-[700px] h-[100px] lg:h-[150px] bg-transparent p-2 rounded mb-4"
              type="text"
              placeholder={t("contact.messagePlaceholder")}
              name="message"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && (
              <div className="text-red-800 text-sm -mt-4">{errors.message}</div>
            )}
          </div>
          <div className="lg:w-[700px] w-full flex justify-end mb-6">
            <button
              type="submit"
              className="bg-primary text-[20px] hover:bg-[#313232] text-white px-8 py-2 rounded-md"
            >
              {t("contact.sendButton")}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
