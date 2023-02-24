import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  th: {
    borderBottom: "1px solid black",
    textAlign: "left",
  },

  th_colspan: {
      borderBottom: "1px solid black",
      textAlign: "center",
  }
})

function CourseListRow(props) {
  const rowStyle = {
    background: props.isHeader ? "#deb5b545" : "#f5f5f5ab"
  }

  if (props.isHeader) {
    if (props.textSecondCell == null) {
      return <tr style={rowStyle}><th className={css(styles.th, styles.th_colspan)} colSpan="2">{props.textFirstCell}</th></tr>
    } else {
      return (
        <tr style={rowStyle}>
          <th className={css(styles.th)}>{props.textFirstCell}</th>
          <th className={css(styles.th)}>{props.textSecondCell}</th>
        </tr>
        )
    }
  }
  return (
    <tr style={rowStyle}>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </tr>
  )
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}


export default CourseListRow

