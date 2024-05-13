import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <p className={css.searchText}>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default SearchBox;
