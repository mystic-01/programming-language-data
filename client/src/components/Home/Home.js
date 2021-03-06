import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeIcon from "@material-ui/icons/Code";
import AddBoxIcon from "@material-ui/icons/AddBox";

import "./Home.css";

import { getLanguages } from "../../actions/language";

const Home = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.language);
  const [currentLanguages, setCurrentLanguages] = useState(languages);

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  useEffect(() => {
    setCurrentLanguages(languages);
  }, [languages]);

  const subLanguagesHandler = (index) => {
    currentLanguages.map(
      (item, i) => (item.showSub = i === index ? !item.showSub : false)
    );
    setCurrentLanguages([...currentLanguages]);
  };
  return (
    <div className="home">
      <h2>Languages</h2>
      <div className="home__languages">
        {currentLanguages.map((language, index) => (
          <div key={index}>
            <div className="home__languageCard">
              <CodeIcon className="home__languageImage" />
              <div className="home__languageInfo">
                <div className="home__languageHeading">
                  <div>
                    {language.name} &nbsp; | &nbsp; {language.year}
                  </div>
                  <button
                    className="subLanguageIcon"
                    onClick={() => subLanguagesHandler(index)}
                  >
                    <AddBoxIcon />
                  </button>
                </div>
                <p>
                  {language.name} was created by {language.creator} in the year{" "}
                  {language.year}.
                </p>
              </div>
            </div>
            {currentLanguages[index].showSub ? (
              <div>
                <h3>Sub Languages of {language.name} :</h3>
                {currentLanguages[index].subLanguages.map((sub) => (
                  <li key={sub.name}>{sub.name}</li>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
