import Image from "next/image";
import calculatorpicture from "./../assets/images/calculatorpicture.png";
//หรือ import calculatorpicture from "@/assets/images/calculatorpicture.png";
import SauFooter from "@/components/SauFooter";
//หรือ import SauFooter from "./../components/SauFooter";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-10 w-3/4 mx-auto mt-20 border border-gray-100 rounded-xl
                    flex flex-col justify-center items-center
                    shadow-xl">
      {/* ส่วนแสดงรูปจาก Internet*/}
      <Image
        src="https://images.pexels.com/photos/7680748/pexels-photo-7680748.jpeg"
        alt="เครื่องคำนวณ"
        width={280}
        height={37}
        className="rounded-xl mb-10"
      />

      {/* ส่วนแสดงรูปจากในโปรเจ็กต์ (assets/images/)*/}
      <Image
        src={calculatorpicture}
        alt="เครื่องคำนวณ"
        width={100}
        height={20}
        className="rounded-xl mb-10"
      />

      {/* ส่วนแสดงชื่อโปรแกรม*/}
      <h1 className="text-3xl text-center text-blue-600 font-bold">
        Calculator Varity
        <br />
        โปรแกรมคำนวณหลากหลายแบบ
      </h1>

      {/* ส่วนของ Link เปิดไปยังหน้า Page ต่างๆ */}
      <div className="flex mt-10">
        <Link href="/body/calbmi" className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
         BMI Calculator
        </Link>
        |
        <Link href="/body/calbmr" className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
         BMR Calculator
        </Link>
        |
        <Link href="/calcarinstallment" className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
         Car Installment
        </Link>
      </div>

      {/* ส่วนแสดง footer*/}
      <SauFooter />
    </div>
  );
}