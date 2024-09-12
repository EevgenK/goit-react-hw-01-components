import PropTypes from 'prop-types';
import { Card, Flexlist, Name } from 'common_styles/common.styled';
import {
  Avatar,
  Description,
  Item,
  Label,
  Paragraph,
  Quantity,
} from './profile.styled';
import { firstLetterUpper } from 'helpers/firstLetterUpper';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  let items = [];
  for (let key in stats) {
    items.push(
      <Item key={key[0] + key.slice(1, 3)}>
        <Label>{firstLetterUpper(key)}</Label>
        <Quantity>{stats[key]}</Quantity>
      </Item>
    );
  }

  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Paragraph>@{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </Description>
      <Flexlist>{items}</Flexlist>
    </Card>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
