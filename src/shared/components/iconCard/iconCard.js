import React from 'react';
import PropTypes from 'prop-types';
import styles from './iconCard.css';

const Title = (props) => {
  const { link, url, title, titleTag } = props;
  const titleWrapper = link ? (<a href={url}>{title}</a>) : title;

  switch (titleTag) {
    case 'h3':
      return (<h3 className={styles.cardTitle}>{titleWrapper}</h3>);
    default:
      return (<span className={styles.cardTitle}>{titleWrapper}</span>);
  }
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string.isRequired,
  link: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

const IconCard = (props) => {
  const { title, icon, titleTag, iconPosition, url, target, rel, text, textStyle, links } = props;
  const { card, cardIcon } = styles;

  // Wrap the passed in icon/title/text props in anchor tags if a url was passed in
  // and bundle them into Icon/Title/Text components respectively..
  const iconWrapper = url && links.includes('icon') ? (<a href={url}>{icon}</a>) : icon;
  const Icon = () => (<div className={cardIcon}>{iconWrapper}</div>);

  const textWrapper = url && links.includes('text') ? (<a href={url}>{text}</a>) : text;
  const Text = () => (<p className={textStyle}>{textWrapper}</p>);

  return (
    <div className={card}>
      {iconPosition === 'top' ? <Icon /> : null}
      <Title
        link={url && links.includes('title')}
        title={title}
        titleTag={titleTag}
        url={url}
        target={target}
        rel={rel}
      />
      {iconPosition === 'middle' ? <Icon /> : null}
      {text !== null ? <Text /> : null}
    </div>
  );
};

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  titleTag: PropTypes.oneOf(['h3', 'span']),
  iconPosition: PropTypes.oneOf(['top', 'middle']),
  url: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  textStyle: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.oneOf([
    'title',
    'icon',
    'text'
  ])),
};

IconCard.defaultProps = {
  titleTag: 'span',
  iconPosition: 'top',
  url: null,
  target: null,
  rel: null,
  text: null,
  textStyle: null,
  links: []
};

export default IconCard;
