import Logo from "../../assets/images/logo.png";
export default function Footer() {
  return (
    <div className="flex font-poppins text-white bg-black py-20 px-20 pr-[30%] gap-16">
      <div className="w-[20%]">
        <img src={Logo}></img>
      </div>
      <div className="grid gap-8 w-[45%]">
        <p>
          Departement Teknik Elektro dan Teknologi Informasi, Fakultas
          Teknik,Universitas Gadjah Mada, Yogyakarta
        </p>
        <div className="grid gap-4">
          <p className="text-xs opacity-75 cursor-pointer hover:opacity-100">
            <u>+62-8812-3456-789</u>
          </p>
          <p className="text-xs opacity-75 cursor-pointer hover:opacity-100">
            <u>teti@ugm.ac.id</u>
          </p>
        </div>
      </div>
      <div className="text-xs opacity-75 grid content-between">
        <div className="grid gap-6">
          <div className="">Created by:</div>
          <div>
            <ul className="list-disc list-inside">
              <li>Evan Ananda Jati</li>
              <li>Adinda Luthfiah Sya’bani</li>
              <li>Rizky Intan Nurlita</li>
              <li>Dinda Sabela Rahma Wisista</li>
            </ul>
          </div>
        </div>
        <div> &copy; 2023 Senior Project TIF. Dinda's Gang</div>
      </div>
    </div>
  );
}
