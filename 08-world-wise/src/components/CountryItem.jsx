import styles from "./CountryItem.module.css";

function CountryItem({ city }) {
  const { country, emoji } = city;

  return (
    <li className={styles.countryItem}>
      {emoji && <span>{emoji}</span>}
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
