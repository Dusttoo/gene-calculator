import styles from "./Components.module.css";

function Header() {
  return (
    <header>
      <div className="logoContainer"></div>
      <nav className={styles.navBar}>
        <ul>
            <li>Test</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
