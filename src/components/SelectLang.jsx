import React, { useState } from "react";

const SelectLang = () => {
  const currentLang = localStorage.getItem("language");
  const [language, setLanguage] = useState(currentLang);

  const changeLang = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
    location.reload();
  };

  return (
    <div>
      <select
        id="sort-item"
        className="select"
        value={language}
        onChange={(e) => changeLang(e)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="rw">Kinyarwanda</option>
      </select>
    </div>
  );
};

export default SelectLang;
