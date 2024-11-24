import PropTypes from "prop-types";

function ListItem({ student, value }) {
  return (
    <li>
      {student} {value}
    </li>
  );
}

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ListItem;
