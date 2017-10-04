import React from 'react';
import PropTypes from 'prop-types';
import styles from './iconCard.css';

const IconCard = (props) => {
  const { title, icon, iconPosition, url, text, links } = props;
  const { card, cardIcon, cardTitle } = styles;

  // Wrap the passed in icon/title/text props in anchor tags if a url was passed in
  // and bundle them into Icon/Title/Text components respectively..
  const iconWrapper = url && links.includes('icon') ? (<a href={url}>{icon}</a>) : icon;
  const Icon = () => (<div className={cardIcon}>{iconWrapper}</div>);

  const titleWrapper = url && links.includes('title') ? (<a href={url}>{title}</a>) : title;
  const Title = () => (<span className={cardTitle}>{titleWrapper}</span>);

  const textWrapper = url && links.includes('text') ? (<a href={url}>{text}</a>) : text;
  const Text = () => (<p>{textWrapper}</p>);

  return (
    <div className={card}>
      {iconPosition === 'top' ? <Icon /> : null}
      <Title />
      {iconPosition === 'middle' ? <Icon /> : null}
      {text !== null ? <Text /> : null}
    </div>
  );
};

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  titleTags: PropTypes.string,
  iconPosition: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string)
};

IconCard.defaultProps = {
  titleTags: 'span',
  iconPosition: 'top',
  url: null,
  text: null,
  links: []
};

export default IconCard;
