import { twMerge } from "tailwind-merge";

type FontType = {
  lato?: boolean;
  nunito?: boolean;
};

type ParagraphType = React.HTMLAttributes<HTMLParagraphElement> & FontType;

interface PProps extends ParagraphType {}

const P: React.ComponentType<PProps> = ({
  lato = false,
  nunito = false,
  ...props
}) => {
  return (
    <p
      {...props}
      className={twMerge(
        lato && "font-lato",
        nunito && "font-nunito",
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export default P;
