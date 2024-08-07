import { Footer } from "flowbite-react";
import logo from '../assets/logo.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterBar = () => {
  return (
    <div className="">
        <Footer className="bg-slate-900 rounded-none">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div >
            <img className="w-20" src={logo} alt="" />
          </div>
          <div>
            <Footer.Title className="text-white" title="Company" />
            <Footer.LinkGroup className="text-white" col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white" title="help center" />
            <Footer.LinkGroup className="text-white" col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white" title="legal" />
            <Footer.LinkGroup className="text-white" col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
        </div>
        <div className="container max-w-[1100px] my-0 mx-auto px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="OpenVoiceHub" year={2024} />
          <div>
            
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  )
}

export default FooterBar