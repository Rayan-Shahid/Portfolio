import { GENERAL_INFO } from "@/lib/data";

const Footer = async () => {
  return (
    <footer className="text-center pb-5 mt-10" id="contact">
      <div className="container">
        <p className="text-lg">Have a project in mind?</p>
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="text-xl sm:text-3xl md:text-4xl font-anton inline-block mt-5 mb-10 break-all hover:underline"
        >
          {GENERAL_INFO.email}
        </a>

        <div className="">
          <a
            href="https://github.com/Rayan-Shahid/Portfolio"
            target="_blank"
            className="leading-none text-muted-foreground hover:underline hover:text-white"
          >
            Design & built by Rayan Shahid
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
