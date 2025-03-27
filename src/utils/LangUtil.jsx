import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const LangUtil = ({ az, en }) => {

    const { lang } = useContext(LangContext);

    return (lang === 'en' ? en : az);
}

export default LangUtil