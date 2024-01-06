const Footer = () => {
  return (
    <div className="bg-[#138F2E]">
      <div className="w-full flex justify-end p-6">
        <img src="/assets/Group 28.png" alt="" />
      </div>
      <div id="Footer" className="flex justify-center gap-32 pt-10 w-full">
        <div>
          <p className="font-roboto font-medium text-[20px] text-white">
            ABOUT
          </p>
          <p className="font-light text-[16px] text-white">
            Aplikasi berbasis web ini dibuat untuk
            <br />
            memenuhi tugas praktikum IOT, yang
            <br />
            beranggotakan 4 orang yaitu Dhefika Fazhira,
            <br />
            Muhammad Nabil, Kaifa Nalendra, dan Zaky
            <br />
            Arif Rahman.
          </p>
        </div>
        <div>
          <p className="font-roboto font-medium text-[20px] text-white uppercase">
            Keep In Touch
          </p>
          <p className="font-light text-[16px] text-white">GitHub</p>
          <p className="font-light text-[16px] text-white">Gmail</p>
        </div>
        <div>
          <p className="font-roboto font-medium text-[20px] text-white">
            Features
          </p>
          <p className="font-light text-[16px] text-white">
            Terdapat fitur-fitur yang bisa digunakan
            <br />
            seperti menyiram tanaman lewat aplikasi
            <br />
            web secara otomatis, melihat informasi
            <br />
            mengenai kelambaban tanah dan lain
            <br />
            sebagainya
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-white mt-9 mb-7 mx-[130px] opacity-60"></div>
      <div className="flex flex-col items-center gap-7">
        <div className="flex gap-4 items-center">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M22.9167 17.6248V20.7498C22.9178 21.0399 22.8584 21.327 22.7422 21.5928C22.626 21.8587 22.4555 22.0973 22.2417 22.2934C22.028 22.4895 21.7756 22.6388 21.5008 22.7318C21.226 22.8247 20.9348 22.8592 20.6458 22.8331C17.4405 22.4848 14.3615 21.3895 11.6562 19.6352C9.1394 18.0359 7.00556 15.902 5.40625 13.3852C3.64581 10.6677 2.55025 7.57373 2.20833 4.35394C2.1823 4.06589 2.21654 3.77557 2.30885 3.50147C2.40117 3.22737 2.54955 2.97549 2.74455 2.76188C2.93954 2.54827 3.17688 2.3776 3.44145 2.26074C3.70602 2.14387 3.99202 2.08338 4.28125 2.08311H7.40625C7.91178 2.07813 8.40187 2.25715 8.78517 2.58679C9.16847 2.91643 9.41883 3.3742 9.48958 3.87478C9.62148 4.87484 9.86609 5.85678 10.2188 6.80186C10.3589 7.1747 10.3892 7.57989 10.3062 7.96944C10.2231 8.35899 10.0301 8.71656 9.75 8.99978L8.42708 10.3227C9.90995 12.9306 12.0692 15.0898 14.6771 16.5727L16 15.2498C16.2832 14.9697 16.6408 14.7767 17.0303 14.6936C17.4199 14.6105 17.8251 14.6409 18.1979 14.781C19.143 15.1337 20.1249 15.3783 21.125 15.5102C21.631 15.5816 22.0931 15.8364 22.4235 16.2263C22.7538 16.6162 22.9293 17.1139 22.9167 17.6248Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <svg
            width="26"
            height="32"
            viewBox="0 0 26 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M9.61538 26.7197C3.46154 28.8599 3.46154 23.1529 1 22.4395M18.2308 31V25.4785C18.2769 24.7981 18.1976 24.1142 17.9982 23.4722C17.7987 22.8301 17.4836 22.2446 17.0738 21.7547C20.9385 21.2553 25 19.5575 25 11.7674C24.9997 9.7754 24.3387 7.85981 23.1538 6.41708C23.7149 4.67431 23.6752 2.74797 23.0431 1.03823C23.0431 1.03823 21.5908 0.538864 18.2308 3.14982C15.4099 2.26355 12.4363 2.26355 9.61538 3.14982C6.25538 0.538864 4.80308 1.03823 4.80308 1.03823C4.17092 2.74797 4.13125 4.67431 4.69231 6.41708C3.49862 7.87051 2.83695 9.80342 2.84615 11.8102C2.84615 19.5432 6.90769 21.241 10.7723 21.7975C10.3674 22.2825 10.0551 22.861 9.85576 23.4952C9.65644 24.1294 9.57453 24.8051 9.61538 25.4785V31"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M4.16666 4.1665H20.8333C21.9792 4.1665 22.9167 5.104 22.9167 6.24984V18.7498C22.9167 19.8957 21.9792 20.8332 20.8333 20.8332H4.16666C3.02083 20.8332 2.08333 19.8957 2.08333 18.7498V6.24984C2.08333 5.104 3.02083 4.1665 4.16666 4.1665Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.9167 6.25L12.5 13.5417L2.08333 6.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="flex justify-center">
            <p className="font-roboto text-[16px] text-white opacity-60 pb-10">©Copyright. Smart Irrigation System 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
