import Card from "./Card";

const AboutUsHero = () => {
  return (
    <div id="AboutUs" className="w-full min-h-screen pt-28 flex flex-col items-center px-[130px] gap-16">
      <div className="flex flex-col  items-center">
        <p className="font-roboto text-[64px] font-bold text-[#138F2E] text-center">
          OUR TEAM
        </p>
        <p className="font-roboto text-[16px] text-center text-[#333333] opacity-80">
          &quot;Bertemu dengan Otak di Balik Layar! Inilah Tim Developer Kami
          yang Penuh Kreativitas,
          <br />
          Menghadirkan Inovasi di Setiap Kode yang Mereka Tulis.
          <br />
          Kenali Orang-Orang Dibalik Teknologi yang Mengubah Pengalaman
          Anda.&quot;
        </p>
      </div>
      <div id="CardImage" className="w-full grid grid-cols-4">
        <Card image="Pika" name="Dhefika Fazhira" nrp="15-2021-047" />
        <Card image="Nabil" name="M.Nabil Athillah" nrp="15-2021-076" />
        <Card image="Jaki" name="Zaky Arif Rahman" nrp="15-2021-146" />
        <Card image="Kai" name="Kaifa Nalendra Putra" nrp="15-2021-195" />
      </div>
    </div>
  );
};

export default AboutUsHero;
