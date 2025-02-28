import PropTypes from 'prop-types';
import { ThemeButton, LanguageSwitcherContainer } from "../Home/style";
import englishFlag from "@assets/icons/en.png";
import portugueseFlag from "@assets/icons/pt.png";


interface LanguageSwitcherProps {
    onChangeLanguage: (language: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onChangeLanguage }) => {
    return (
        <LanguageSwitcherContainer>
            <ThemeButton onClick={() => onChangeLanguage("en")}>
                <img src={englishFlag} alt="English" />
            </ThemeButton>
            <ThemeButton onClick={() => onChangeLanguage("pt")}>
                <img src={portugueseFlag} alt="Português" />
            </ThemeButton>
        </LanguageSwitcherContainer>
    );
};

LanguageSwitcher.propTypes = {
    onChangeLanguage: PropTypes.func.isRequired,
};

export default LanguageSwitcher;