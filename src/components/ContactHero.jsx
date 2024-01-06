import Image from "next/image";

const ContactHero = () => {
  return (
    <div id="Contact" className="w-full min-h-screen pt-20 flex items-start px-[130px] justify-around gap-20 relative">
      <div className="flex flex-col items-center z-10 pt-12">
        <p className="font-roboto text-[56px] font-bold text-[#138F2E]">
          CONTACT
        </p>
        <p className="font-roboto text-[18px] text-[#333] opacity-80 text-center pb-8">
          Jalin Komunikasi yang Lebih Dekat dengan Tim
          <br />
          Kami! Sampaikan Pertanyaan, Saran, atau
          <br />
          Kolaborasi melalui Informasi Kontak yang Tersedia.
          <br />
          Kami Siap Membantu Anda
        </p>
        <div id="ContactButton" className="bg-[#1F672F] py-[6px] px-[7px] rounded-[30px] flex items-center min-w-[430px] gap-3 box-border">
          <div className="bg-white p-[14px] rounded-full">
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.44444 2.66667L12.4689 9.89667C12.928 10.2278 13.4586 10.4033 14 10.4033C14.5414 10.4033 15.072 10.2278 15.5311 9.89667L25.5556 2.66667M3.88889 21H24.1111C24.8773 21 25.6121 20.6488 26.1539 20.0237C26.6956 19.3986 27 18.5507 27 17.6667V4.33333C27 3.44928 26.6956 2.60143 26.1539 1.97631C25.6121 1.35119 24.8773 1 24.1111 1H3.88889C3.12271 1 2.38791 1.35119 1.84614 1.97631C1.30436 2.60143 1 3.44928 1 4.33333V17.6667C1 18.5507 1.30436 19.3986 1.84614 20.0237C2.38791 20.6488 3.12271 21 3.88889 21Z"
                stroke="#138F2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="w-full box-border">
            <p className="text-white text-[16px] text-center">muhammad.nabilathillah@mhs.itenas.ac.id</p>
          </div>
        </div>
      </div>
      <div id="imgCustomerService" className="w-5/12 flex justify-center items-center z-10 self-center pb-48">
        <img src="/assets/Online support service.png" alt="" className="w-full"/>
      </div>
      <img src="/assets/wave.png" alt="" className="absolute bottom-0 left-0 w-full z-0"/>
    </div>
  );
};

export default ContactHero;
