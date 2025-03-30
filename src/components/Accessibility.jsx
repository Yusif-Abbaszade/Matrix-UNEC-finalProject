import { useContext, useState } from "react"
import { IconContext } from "react-icons"
import { FaSun } from "react-icons/fa"
import { IoAccessibility } from "react-icons/io5"
import { LangContext } from "../context/LangContext"
import { ThemeContext } from "../context/ThemeContext"
import { FaMoon } from "react-icons/fa6"

const Accessibility = () => {

    const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
    const { lang, setLang } = useContext(LangContext);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-3 justify-content-center align-items-center">
            <div className={`${isAccessibilityOpen ? 'd-flex' : 'd-none'} accessibility-menu bg-primary text-white p-1 rounded-5 flex-column`}>
                <button className="btn" onClick={()=>{ setTheme(theme === "light" ? "black" : "light") }}>
                    <IconContext.Provider value={{ size: "1.5em", color: "#fff" }}>
                        {theme==='light' ? <FaSun /> : <FaMoon />}
                    </IconContext.Provider>
                </button>
                <button className="btn text-light fs-5 fw-bolder" onClick={() => { lang === 'en' ? setLang('az') : setLang('en') }}>{lang.toUpperCase()}</button>
            </div>
            <button className="btn rounded-5 bg-primary text-white" onClick={() => { setIsAccessibilityOpen(!isAccessibilityOpen) }}>
                <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
                    <IoAccessibility />
                </IconContext.Provider>
            </button>
        </div>
    )
}

export default Accessibility