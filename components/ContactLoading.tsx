interface ContactLoadingProps {
  message: string;
}

const ContactLoading: React.ComponentType<ContactLoadingProps> = ({
  message,
}) => {
  return <p className="">{message}</p>;
};

export default ContactLoading;
