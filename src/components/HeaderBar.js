import React from 'react';
import PropTypes from 'prop-types';
import { TopNavigation, TopNavigationAction, withStyles, Icon } from '@ui-kitten/components';

import CustomText from './Text';

const BackIcon = props => {
  return <Icon {...props} name="arrow-back-outline" height={24} width={24} />;
};
const CloseIcon = props => {
  return <Icon {...props} name="close-outline" height={32} width={32} />;
};

const MenuIcon = props => {
  return <Icon {...props} name="funnel-outline" />;
};

const MoreIcon = props => {
  return <Icon {...props} name="more-horizontal-outline" />;
};

const styles = theme => ({
  headerTitle: {
    marginVertical: 8,
    fontSize: theme['font-size-medium'],
    fontWeight: theme['font-semi-bold'],
  },
});

const HeaderBarComponent = ({
  eva: { style },
  onBackPress,
  leftButtonIcon,
  buttonType,
  onRightPress,
  rightButtonIcon,
  title,
  showLeftButton,
  showRightButton,
  alignment,
}) => {
  const renderLeftControl = () => {
    if (leftButtonIcon) {
      return <TopNavigationAction icon={CloseIcon} onPress={onBackPress} />;
    }
    return <TopNavigationAction icon={BackIcon} onPress={onBackPress} />;
  };

  const renderRightControl = () => {
    if (rightButtonIcon) {
      return <TopNavigationAction icon={CloseIcon} onPress={onBackPress} />;
    }
    return (
      <TopNavigationAction
        icon={buttonType === 'menu' ? MenuIcon : MoreIcon}
        onPress={onRightPress}
      />
    );
  };
  return (
    <TopNavigation
      title={evaProps => (
        <CustomText {...evaProps} style={style.headerTitle}>
          {title}
        </CustomText>
      )}
      alignment={alignment}
      titleStyle={style.headerTitle}
      {...(showLeftButton && { accessoryLeft: renderLeftControl })}
      {...(showRightButton && { accessoryRight: renderRightControl })}
    />
  );
};

const propTypes = {
  eva: PropTypes.shape({
    style: PropTypes.object,
    theme: PropTypes.object,
  }).isRequired,
  onBackPress: PropTypes.func,
  onRightPress: PropTypes.func,
  title: PropTypes.string,
  showLeftButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  alignment: PropTypes.string,
  iconName: PropTypes.string,
  buttonType: PropTypes.string,
  leftButtonIcon: PropTypes.string,
  rightButtonIcon: PropTypes.string,
};

const defaultProps = {
  alignment: 'center',
};

HeaderBarComponent.propTypes = propTypes;
HeaderBarComponent.defaultProps = defaultProps;

const HeaderBar = withStyles(HeaderBarComponent, styles);

export default React.memo(HeaderBar);
