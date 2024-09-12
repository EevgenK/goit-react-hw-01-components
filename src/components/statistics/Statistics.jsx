import PropTypes from 'prop-types';
import { Card } from 'common_styles/common.styled';
import { getRandomHexColor } from 'helpers/randomColor';
import { ColoredItems, TittleH2, Flexlist } from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  const counter = stats.length;
  const items = stats.map(({ id, label, percentage }) => {
    return (
      <ColoredItems
        key={id}
        color={getRandomHexColor()}
        amount={counter}
        checktitle={title}
      >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </ColoredItems>
    );
  });
  return (
    <Card>
      {title && <TittleH2>{title}</TittleH2>}
      <Flexlist>{items}</Flexlist>
    </Card>
  );
};
Statistics.defaultProps = {
  stats: [],
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
