import { twMerge } from "tailwind-merge";

type Variant = 1 | 2 | 3 | 4 | 5;

type TagType = {
  variant: Variant;
};

type FontType = {
  lato?: boolean;
  nunito?: boolean;
};

type ParagraphType = React.HTMLAttributes<HTMLParagraphElement> &
  FontType &
  TagType;

interface HProps extends ParagraphType {}

const H: React.ComponentType<HProps> = ({
  lato = false,
  nunito = false,
  ...props
}) => {
  const h = {
    1: (
      <h1
        {...props}
        className={twMerge(
          lato && "font-lato",
          nunito && "font-nunito",
          props.className
        )}
      >
        {props.children}
      </h1>
    ),
    2: (
      <h2
        {...props}
        className={twMerge(
          lato && "font-lato",
          nunito && "font-nunito",
          props.className
        )}
      >
        {props.children}
      </h2>
    ),
    3: (
      <h3
        {...props}
        className={twMerge(
          lato && "font-lato",
          nunito && "font-nunito",
          props.className
        )}
      >
        {props.children}
      </h3>
    ),
    4: (
      <h4
        {...props}
        className={twMerge(
          lato && "font-lato",
          nunito && "font-nunito",
          props.className
        )}
      >
        {props.children}
      </h4>
    ),
    5: (
      <h5
        {...props}
        className={twMerge(
          lato && "font-lato",
          nunito && "font-nunito",
          props.className
        )}
      >
        {props.children}
      </h5>
    ),
  };

  return h[props.variant];
};

export default H;
