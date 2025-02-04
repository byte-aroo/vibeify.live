import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 relative"
          style={{ backgroundImage: 'url("/image/about-us_3_1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-15 rounded-2xl"></div>
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Stay connected with us on our socials to get the latest updates!
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
            style={{ fontWeight: "bolder" }}
          >
            Don&apos;t miss out our events updates & exciting surpirses. Connect with us now!
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row relative z-20">
          <a href="https://whatsapp.com/channel/0029Vb50Kv35Ejy0L2QwLG3r" target="_blank" rel="noopener noreferrer">
            <Button color="white" size="md" className="flex items-center">
              <i className="fa-brands fa-whatsapp mr-2 text-lg" />
              WhatsApp
            </Button>
            </a>
            <a href="https://www.instagram.com/vibeify.live?igsh=MTd1NXZzYmI3aWloZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Button color="white" size="md" className="flex items-center">
              <i className="fa-brands fa-instagram mr-2 text-lg" />
              Instagram
            </Button>
            </a>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Developed by{" "}
          <a href="https://www.bytearoo.com" target="_blank">
            <u><b>Bytearoo</b></u>
          </a>
        </Typography>
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
            Material Tailwind
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul> */}
          <div className="flex w-fit justify-center gap-2">
            {/* <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton> */}
            <a href="https://whatsapp.com/channel/0029Vb50Kv35Ejy0L2QwLG3r" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-whatsapp text-lg" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/vibeify.live?igsh=MTd1NXZzYmI3aWloZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
