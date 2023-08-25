const InputField = ({ error, onHandleUserInfo, info, name, holder }) => {
  return (
    <div className="input__field">
      <input
        className={error ? "field-error" : ""}
        onChange={onHandleUserInfo}
        name={name}
        value={info}
        type="text"
        placeholder={holder}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
