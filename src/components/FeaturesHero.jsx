import Image from "next/image";

const FeaturesHero = () => {
  return (
    <div id="Features" className="w-full min-h-screen flex items-center justify-around px-[80px] bg-[#138F2E]">
        <div className="flex flex-col justify-evenly h-screen">
            <div className="flex flex-col gap-5">
                <p className="font-extrabold text-[64px] text-white">Features That<br/>We Provide</p>
                <div className="flex gap-3 items-start">
                    <div className="w-[30px] border-[1px] border-white h-fit mt-2"></div>
                    <p className="text-white font-[20px]">Optimalkan pertanian Anda dengan Smart<br/>Irrigation System berbasis IoT kami - hemat<br/>air, tingkatkan hasil panen, dan pantau<br/>tanaman Anda secara real-time.</p>
                </div>
            </div>
            <a href="/dashboard" className="group cursor-pointer flex gap-5 items-center">
                <Image src="/assets/Group27.png" alt="" height={100} width={100}/>
                <p className="font-extrabold text-white text-[24px]">Dashboard</p>
            </a>
        </div>
        <div id="FeaturesCardSection" className="flex flex-col gap-10 justify-center pb-10 h-screen">
            <div id="FeaturesCard" className="border-t-[1px] border-t-white flex gap-10 min-w-[600px]">
                <p id="Num" className="text-white text-[24px] pt-4">01/</p>
                <div className="flex flex-col gap-3">
                    <p id="Title" className="font-extrabold text-white text-[48px]">Penghematan air<br/>yang signifikan</p>
                    <p id="Desc" className="font-extrabold text-white text-[20px]">Hanya memberikan air ketika diperlukan,<br/>mengurangi pemborosan.</p>
                </div>
            </div>
            <div id="FeaturesCard" className="border-t-[1px] border-t-white flex gap-10 min-w-[600px]">
                <p id="Num" className="text-white text-[24px] pt-4">02/</p>
                <div className="flex flex-col gap-3">
                    <p id="Title" className="font-extrabold text-white text-[48px]">Monitoring 24/7</p>
                    <p id="Desc" className="font-extrabold text-white text-[20px]">Pantau tanaman Anda dari mana saja,
kapan saja melalui aplikasi berbasis smartphone.</p>
                </div>
            </div>
            <div id="FeaturesCard" className="border-t-[1px] border-t-white flex gap-10 min-w-[600px]">
                <p id="Num" className="text-white text-[24px] pt-4">03/</p>
                <div className="flex flex-col gap-3">
                    <p id="Title" className="font-extrabold text-white text-[48px]">Penghematan air<br/>yang signifikan</p>
                    <p id="Desc" className="font-extrabold text-white text-[20px]">Hanya memberikan air ketika diperlukan,<br/>mengurangi pemborosan.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FeaturesHero;
