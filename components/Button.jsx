const Button = ({ name, classStyle, handleClick, able }) => (
  <button
    type="submit"
    className={`text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-inter font-semibold rounded-3xl nft-gradient ${classStyle}`}
    onClick={handleClick}
  >
    {name}
  </button>
);

export default Button;
