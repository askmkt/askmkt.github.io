import {
  default as NextLink,
  type LinkProps as NextLinkProps,
} from "next/link";

type LinkPropType = NextLinkProps & React.HTMLAttributes<HTMLAnchorElement>;

interface LinkProps extends LinkPropType {}

const Link: React.ComponentType<LinkProps> = (props) => {
  return <NextLink {...props}>{props.children}</NextLink>;
};

export default Link;
