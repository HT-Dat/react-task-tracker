import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header>
      {/* <h1 style={{color:'red', backgroundColor: 'black'}}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color="green" text={showAddTask ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header;
