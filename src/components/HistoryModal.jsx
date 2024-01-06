"use client";

const HistoryModal = ({ closeHistory, datas }) => {
  // useEffect(() => {
  //     const dateInput = document.getElementById('yourDateInputId'); // Ganti 'yourDateInputId' dengan ID input Anda

  //     const today = new Date().toISOString().split('T')[0];

  //     dateInput.value = today;
  //   }, []);
  return (
    <div className="w-screen h-screen fixed left-0 right-0 top-0 bottom-0 z-[99999] flex justify-center items-center backdrop-blur-md">
      <div className="bg-white w-3/5 shadow-2xl px-[38px] py-[23px] flex flex-col gap-3 rounded-md">
        <div className="flex justify-between items-center">
          <p className="font-bold text-[24px] text-[#138F2E]">HISTORY</p>
          <svg
            width="30"
            height="23"
            viewBox="0 0 30 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group cursor-pointer"
            onClick={closeHistory}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.1111 0C16.9657 0 17.7853 0.269245 18.3896 0.748505C18.9938 1.22776 19.3333 1.87778 19.3333 2.55556V5.92378C19.3333 6.26267 19.1636 6.58767 18.8614 6.8273C18.5593 7.06693 18.1495 7.20156 17.7222 7.20156C17.2949 7.20156 16.8851 7.06693 16.583 6.8273C16.2809 6.58767 16.1111 6.26267 16.1111 5.92378V2.55556H4.83333C4.40604 2.55556 3.99625 2.69018 3.69411 2.92981C3.39196 3.16944 3.22222 3.49445 3.22222 3.83333V19.1667C3.22222 19.5056 3.39196 19.8306 3.69411 20.0702C3.99625 20.3098 4.40604 20.4444 4.83333 20.4444H14.5C14.9273 20.4444 15.3371 20.3098 15.6392 20.0702C15.9414 19.8306 16.1111 19.5056 16.1111 19.1667V17.0762C16.1111 16.7373 16.2809 16.4123 16.583 16.1727C16.8851 15.9331 17.2949 15.7984 17.7222 15.7984C18.1495 15.7984 18.5593 15.9331 18.8614 16.1727C19.1636 16.4123 19.3333 16.7373 19.3333 17.0762V20.4444C19.3333 21.1222 18.9938 21.7722 18.3896 22.2515C17.7853 22.7308 16.9657 23 16.1111 23H3.22222C2.36764 23 1.54805 22.7308 0.943767 22.2515C0.339483 21.7722 0 21.1222 0 20.4444V2.55556C0 1.87778 0.339483 1.22776 0.943767 0.748505C1.54805 0.269245 2.36764 0 3.22222 0H16.1111Z"
              fill="#888888"
              className="group-hover:fill-black transition-colors"
            />
            <path
              d="M11.2778 11.5001H29.0001H11.2778ZM29.0001 11.5001L24.1667 7.02783L29.0001 11.5001ZM29.0001 11.5001L24.1667 15.9723L29.0001 11.5001Z"
              fill="#888888"
              className="group-hover:fill-black transition-colors"
            />
            <path
              d="M11.2778 11.5001H29.0001M29.0001 11.5001L24.1667 7.02783M29.0001 11.5001L24.1667 15.9723"
              stroke="#888888"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="group-hover:stroke-black transition-colors"
            />
          </svg>
        </div>
        <table className="table text-center">
          <thead>
            <tr>
              <th>TANGGAL</th>
              <th>JAM</th>
              <th>KELEMBABAN TANAH</th>
              <th>SUHU UDARA</th>
              <th>INTENSITAS CAHAYA</th>
            </tr>
          </thead>
          <tbody>
            {datas.slice(-10).map((data) => (
              <tr key={data.id}>
                <td>{data.timestamp}</td>
                <td>20.00</td>
                <td>{data.moist}%</td>
                <td>{data.temperature}&deg;C</td>
                <td>{data.humidity}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryModal;
