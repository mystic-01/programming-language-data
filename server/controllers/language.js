import Language from "../models/language.js";

export const getLanguages = async (req, res) => {
  try {
    const allLanguages = await Language.find();
    res.status(200).json(allLanguages);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad request." });
  }
};

// For development purposes only.
export const addLanguages = async (req, res) => {
  try {
    const languageArray = req.body;
    await Language.insertMany(languageArray);
    res.status(201).json({ result: languageArray });
  } catch (error) {
    console.log(error);
    res.status(406).json({ message: "Your addition was not accepted." });
  }
};
