import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-red-600">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1  from-red-500 via-yellow-500 to-pink-500 rounded-lg text-yellow-500">
                TVK
              </span>
              Blog
            </Link>
          </div>
          {/* <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TVK Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/sahandghavidel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div> */}
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="TVK blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/tvkvijayhq/"
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.instagram.com/tvkvijayhq/"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon
              href="https://x.com/tvkvijayhq"
              icon={BsTwitter}
              target="_blank"
            />
            {/* <Footer.Icon
        href="https://github.com/sahandghavidel"
        icon={BsGithub}
        target="_blank"
    /> */}
            {/* <Footer.Icon
        href="#"
        icon={BsDribbble}
        target="_blank"
    /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}
