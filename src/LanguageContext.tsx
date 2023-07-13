import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextProps {
    currentLanguage: string;
    setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    currentLanguage: '',
    setLanguage: () => {},
});

interface LanguageProviderProps {
    children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
        const savedLanguage = sessionStorage.getItem('language');
        return savedLanguage || i18n.language;
    });

    useEffect(() => {
        const handleLanguageChange = (language: string) => {
            setCurrentLanguage(language);
            sessionStorage.setItem('language', language);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const setLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
