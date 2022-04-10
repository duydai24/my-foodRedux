import react from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-black opacity-80 py-20 z-20">
      <div className="container flex justify-between">
        <img src="/logoRemove.png" className="w-[20rem] h-[10rem]" />
        <div className="">
          <p className="text-white uppercase font-bold text-xl mb-6">Address</p>
          <FooterItems icons={<BsFillTelephoneFill />} text={"0964247999"} />
          <FooterItems
            icons={<AiOutlineMail />}
            text={"nguyenduydai24@gmail.com"}
          />
          <FooterItems
            icons={<BiBuildingHouse />}
            text={"Tân Lộc, Lộc Hà, Hà Tĩnh"}
          />
          <div className="flex mt-6">
            <a className="text-blue-800 text-3xl m-2">
              <GrFacebookOption />
            </a>
            <a className="text-blue-500 text-3xl m-2">
              <AiOutlineTwitter />
            </a>
            <a className="text-[#FF6600] text-3xl m-2">
              <AiFillInstagram />
            </a>
            <a className="text-[#3399FF] text-3xl m-2">
              <FaTelegramPlane />
            </a>
            <a className="text-red-700 text-3xl m-2">
              <AiFillYoutube />
            </a>
          </div>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60535.612848405864!2d105.81008713463979!3d18.507388721929093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31384a76433cf7e5%3A0xddc506d89cc801e0!2zVMOibiBM4buZYywgTOG7mWMgSMOgLCBIw6AgVMSpbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1647936397689!5m2!1svi!2s"
            width="500"
            height="230"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function FooterItems({ icons, text }) {
  return (
    <div className="flex">
      <a className="text-xl text-[#fbb403] mr-4 m-2">{icons}</a>
      <p className="text-white text-lg hover:text-[#fbb403]">{text}</p>
    </div>
  );
}
export default Footer;
