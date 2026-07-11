const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  small: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
  lg: "px-8 py-4 text-lg",
};

export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 motion-button";
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
