import { CiViewList } from "react-icons/ci"; // Importation de l'icône ToDo List
import { LuSun } from "react-icons/lu"; // Importation de l'icône Soleil
import { FaRegMoon } from "react-icons/fa"; // Importation de l'icône Lune

function Header(props) {
  const { isDark, handleThemeChange } = props; // Déstructuration des props

  return (
    <header>
      <div>
        {/* Icône de ToDo List */}
        <CiViewList />
        {/* Affichage du titre passé en prop */}
        <h1>{props.title}</h1>
      </div>
      <div>
        {/* Bouton pour changer le thème */}
        <button onClick={handleThemeChange}>
          {/* Affiche l'icône lune si isDark est vrai, sinon affiche l'icône soleil */}
          {isDark ? <FaRegMoon /> : <LuSun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
