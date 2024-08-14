type TextProps = {
  title: string;
  type?: string;
  className?: string;
};

const Text: React.FC<TextProps> = ({ title, type, className }) => {
  if (type === 'main') {
    return (
      <h1 className={`font-bold text-3xl py-4 text-color-accent ${className}`}>
        {title}
      </h1>
    );
  } else if (type === 'second') {
    return (
      <h2 className={`font-bold text-xl py-3 text-color-accent ${className}`}>
        {title}
      </h2>
    );
  } else {
    return (
      <h3 className={`text-md md:text-lg py-2 text-color-accent ${className}`}>
        {title}
      </h3>
    );
  }
};

export default Text;
