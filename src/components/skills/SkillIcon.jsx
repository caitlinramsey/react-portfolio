export default function SkillIcon({
    divClassName,
    iconSrc,
    iconTitle,
    altText,
    iconClassName,
    iconName,
    showText = true,
  }) {
    return (
      <div className={divClassName}>
        <img
          src={iconSrc}
          title={iconTitle}
          alt={altText}
          className={iconClassName}
        />
        {showText && <p className="icon-name">{iconName}</p>}
      </div>
    );
  }