type TextProps = {
  title: string;
  type?: string;
  className?: string;
};

const Text: React.FC<TextProps> = ({ title, type, className }) => {
  if (type === 'main') {
    return <h1 className={`font-bold text-2xl py-2 ${className}`}>{title}</h1>;
  } else if (type === 'second') {
    return <h2 className={`font-bold text-xl py-2 ${className}`}>{title}</h2>;
  } else {
    return <h3 className={`font-medium text-lg py-2 ${className}`}>{title}</h3>;
  }
};

export default Text;
