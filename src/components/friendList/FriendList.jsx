import PropTypes from 'prop-types';
import { Name, CommonList } from 'common_styles/common.styled';
import { FriendCard, FriendsAvatar, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  const items = friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendCard key={id}>
        <Status line={isOnline.toString()}></Status>
        <FriendsAvatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </FriendCard>
    );
  });
  return <CommonList className="friend-list">{items}</CommonList>;
};

FriendList.defaultProps = {
  friends: [],
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
