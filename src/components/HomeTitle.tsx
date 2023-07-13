import {useState, useEffect, useContext} from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "@mui/material";
import {LanguageContext} from "../LanguageContext.tsx";

const HomeTitle = () => {
    const {t} = useTranslation();
    const [showTitle, setShowTitle] = useState(false);
    const { currentLanguage } = useContext(LanguageContext);
    console.log("currentLanguage",currentLanguage)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTitle(true);
        }, 3000); // 10 seconds in milliseconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div  style={{
                position: "relative",
                top: "24%"
            }}>
            {showTitle && <div>
                <h1 className={"text-white"}> {t('home title')}</h1>
                <button className="bg-white p-2 border mt-3">
                    <Link href="/blog" className="bg-white p-2 border mt-1">{t("home readmore")}</Link>
                </button>


            </div>}
        </div>
    );
};

export default HomeTitle;
