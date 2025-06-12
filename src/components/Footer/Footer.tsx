import Logo from "@/shared/Logo/Logo";

const Footer: React.FC = () => {
  return (
    <div className="nc-Footer relative border-t border-neutral-200 py-20 lg:pt-28 lg:pb-24 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
        <div className="col-span-2 grid grid-cols-4 gap-5 md:col-span-4 lg:flex lg:flex-col lg:md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center">DESCRIPTION</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
