"use client";

import Image from "next/image";
import Chart from "./Chart";

const DashboardHero = ({openHistory, datas}) => {
  return (
    <div id="Dashboard" className="w-full min-h-screen pt-20 flex items-start px-[130px] gap-9">
      <div id="DataSection" className="flex flex-col justify-start items-center max-h-screen pt-10 gap-5">
        <div id="CardSectionDashboard" className="flex gap-5">
          <div className="bg-[#FFB783] flex px-6 py-3 rounded-[20px] justify-between w-[250px] min-h-[130px]">
            <div className="flex flex-col justify-between">
              <p className="text-white font-roboto font-semibold capitalize">
                Kelembaban
                <br />
                Tanah
              </p>
              {datas.length > 0 && (
              <p key={datas[datas.length - 1].id} className="text-white font-roboto text-4xl font-extrabold">
                {datas[datas.length - 1].moist}
              </p>
              )}
            </div>
            <div>
              <Image
                src={"/assets/Group9.png"}
                alt=""
                width={40}
                height={40}
                className="h-auto"
              />
            </div>
          </div>
          <div className="bg-[#B4D2FF] flex px-6 py-3 rounded-[20px] justify-between w-[250px] min-h-[130px]">
            <div className="flex flex-col justify-between">
              <p className="text-white font-roboto font-semibold capitalize">
                Kelembaban Udara
              </p>
              {datas.length > 0 && (
              <p key={datas[datas.length - 1].id} className="text-white font-roboto text-4xl font-extrabold">
                {datas[datas.length - 1].humidity}%
              </p>
              )}
            </div>
            <div>
              <Image
                src={"/assets/Group10.png"}
                alt=""
                width={40}
                height={40}
                className="h-auto"
              />
            </div>
          </div>
          <div className="bg-[#FED37F] flex px-6 py-3 rounded-[20px] justify-between w-[250px] min-h-[130px]">
            <div className="flex flex-col justify-between">
              <p className="text-white font-roboto font-semibold capitalize">
                Suhu Udara
              </p>
              {datas.length > 0 && (
              <p key={datas[datas.length - 1].id} className="text-white font-roboto text-4xl font-extrabold">
                {datas[datas.length - 1].temperature}&deg;C
              </p>
              )}
            </div>
            <div>
              <Image
                src={"/assets/Group11.png"}
                alt=""
                width={40}
                height={40}
                className="h-auto"
              />
            </div>
          </div>
        </div>
        <div id="Chart" className="px-2 py-4 max-w-[900px] min-w-[650px] flex items-end gap-8">
          <Chart datas/>
          <button
            className="px-5 py-1 border-[1px] border-[#138F2E] rounded-[20px] bg-[#138F2E] font-medium text-white text-sm hover:bg-white hover:text-[#138F2E] transition-colors duration-75"
            onClick={openHistory}
          >
            HISTORY
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full max-h-screen gap-5">
        <div id="ChatDashboard" className="max-h-[650px] h-full flex flex-col items-center pt-10 min-w-[450px]">
          <div className="bg-[#138F2E] w-full flex justify-between items-center px-10 py-5 rounded-[20px_20px_0px_0px]">
            <p className="font-bold text-xl text-white">
              Smart Irrigation System
            </p>
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H22M4.85714 9H19.1429M7.71429 16H16.2857"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="h-[400px] w-full bg-[#D9D9D9] rounded-[0px_0px_20px_20px] relative px-8 pt-5 pb-16 flex flex-col gap-3 overflow-y-auto">
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-sm">System</p>
              <div className="bg-white relative w-fit py-3 px-5 pr-20 max-w-full flex-wrap rounded-full">
                <p className="text-black text-sm">
                  Tanaman Anggrek Berhasil Disiram
                </p>
                <p className="absolute text-[8pt] text-black right-5 bottom-1">
                  19.00
                </p>
              </div>
            </div>
          </div>
            <div className="relative w-full">
            <a href="#" className="absolute bottom-3 right-4 text-black">
              View All
            </a>
            </div>
        </div>
        <div id="DashboardButton" className="flex bg-[#138F2E] pr-11 justify-between items-center gap-8 rounded-[30px] group cursor-pointer">
          <div className="bg-[#1A9D37] rounded-[60px_90px_90px_60px]">
            <svg
              width="136"
              height="80"
              viewBox="0 0 136 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="68" cy="52.5" rx="68" ry="52.5" fill="#1A9D37" />
              <path
                d="M67.5233 38.7702L68.0277 40.178L69.6189 40.0478C69.8459 40.0306 70.0735 40.0223 70.3012 40.0227C74.7296 40.0227 78.5 43.5699 78.5 48.1641C78.5 52.7559 74.7296 56.3056 70.3012 56.3056H42.1988C37.7731 56.3056 34 52.7559 34 48.1641C34 44.0584 37.026 40.7692 40.8233 40.1354L42.0154 39.935L42.3876 38.8654C44.208 33.6499 49.2055 30 54.9716 30C60.7054 30 65.6786 33.6073 67.5233 38.7702Z"
                fill="white"
                stroke="white"
                stroke-width="5"
              />
              <path
                d="M41.3412 62.9137C41.356 62.7502 41.4363 62.5978 41.5661 62.4865C41.6958 62.3753 41.8658 62.3132 42.0424 62.3125H46.096C46.5113 62.3125 46.8349 62.6407 46.7999 63.0239L46.4547 66.7915C46.4398 66.955 46.3596 67.1074 46.2298 67.2187C46.1 67.33 45.9301 67.3921 45.7535 67.3927H41.6972C41.5994 67.3927 41.5027 67.3738 41.4132 67.3373C41.3237 67.3008 41.2433 67.2474 41.1772 67.1805C41.111 67.1137 41.0605 67.0348 41.0288 66.9488C40.9972 66.8629 40.9851 66.7718 40.9933 66.6813L41.3412 62.9137Z"
                fill="white"
              />
              <path
                d="M41.3412 62.9137C41.356 62.7502 41.4363 62.5978 41.5661 62.4866C41.6958 62.3753 41.8658 62.3132 42.0424 62.3125H46.096C46.5113 62.3125 46.8349 62.6407 46.7999 63.0239L46.4547 66.7915C46.4398 66.955 46.3596 67.1074 46.2298 67.2187C46.1 67.33 45.9301 67.3921 45.7535 67.3928H41.6972C41.5994 67.3927 41.5027 67.3739 41.4132 67.3373C41.3237 67.3008 41.2433 67.2474 41.1772 67.1805C41.111 67.1137 41.0605 67.0348 41.0288 66.9488C40.9972 66.8629 40.9851 66.7718 40.9933 66.6813L41.3412 62.9137ZM53.6933 62.9137C53.7082 62.7502 53.7884 62.5978 53.9182 62.4866C54.048 62.3753 54.2179 62.3132 54.3946 62.3125H58.4481C58.8634 62.3125 59.1871 62.6407 59.152 63.0239L58.8068 66.7915C58.792 66.955 58.7118 67.1074 58.582 67.2187C58.4522 67.33 58.2822 67.3921 58.1056 67.3928H54.052C53.9543 67.3927 53.8576 67.3739 53.768 67.3373C53.6785 67.3008 53.5981 67.2474 53.532 67.1805C53.4658 67.1137 53.4153 67.0348 53.3837 66.9488C53.352 66.8629 53.3399 66.7718 53.3481 66.6813L53.6933 62.9137ZM64.8507 62.9137C64.8655 62.7502 64.9457 62.5978 65.0755 62.4866C65.2053 62.3753 65.3753 62.3132 65.5519 62.3125H69.6055C69.7033 62.3121 69.8001 62.3307 69.8896 62.3672C69.9792 62.4036 70.0596 62.457 70.1257 62.524C70.1917 62.591 70.2419 62.6701 70.2731 62.7562C70.3043 62.8423 70.3157 62.9335 70.3067 63.0239L69.9642 66.7915C69.9493 66.9555 69.8687 67.1082 69.7383 67.2195C69.608 67.3309 69.4373 67.3927 69.2602 67.3928H65.2094C65.1116 67.3927 65.0149 67.3739 64.9254 67.3373C64.8359 67.3008 64.7555 67.2474 64.6893 67.1805C64.6232 67.1137 64.5727 67.0348 64.541 66.9488C64.5094 66.8629 64.4973 66.7718 64.5055 66.6813L64.8507 62.9137ZM59.6267 72.1248C59.6415 71.9609 59.7221 71.8081 59.8525 71.6968C59.9829 71.5854 60.1535 71.5236 60.3306 71.5236H64.3814C64.7968 71.5236 65.1204 71.8517 65.0853 72.235L64.7428 76.0026C64.728 76.1665 64.6474 76.3193 64.517 76.4306C64.3866 76.542 64.216 76.6038 64.0389 76.6038H59.9854C59.8878 76.6035 59.7914 76.5843 59.7022 76.5477C59.613 76.511 59.533 76.4575 59.4671 76.3907C59.4012 76.3239 59.351 76.2451 59.3195 76.1593C59.288 76.0736 59.276 75.9827 59.2842 75.8924L59.6267 72.1248ZM47.2746 72.1248C47.2894 71.9609 47.37 71.8081 47.5004 71.6968C47.6307 71.5854 47.8014 71.5236 47.9785 71.5236H52.032C52.1298 71.5232 52.2266 71.5418 52.3162 71.5782C52.4058 71.6147 52.4862 71.6681 52.5522 71.7351C52.6182 71.8021 52.6685 71.8812 52.6996 71.9673C52.7308 72.0534 52.7422 72.1446 52.7332 72.235L52.3907 76.0026C52.3758 76.1665 52.2952 76.3193 52.1649 76.4306C52.0345 76.542 51.8639 76.6038 51.6868 76.6038H47.6333C47.5357 76.6035 47.4393 76.5843 47.3501 76.5477C47.2609 76.511 47.1808 76.4575 47.115 76.3907C47.0491 76.3239 46.9988 76.2451 46.9674 76.1593C46.9359 76.0736 46.9238 75.9827 46.932 75.8924L47.2746 72.1248Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-white font-bold text-2xl text-center">Siram Sekarang</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
