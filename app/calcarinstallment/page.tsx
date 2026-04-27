"use client";

import { useState } from "react";
import SauHeader from "@/components/SauHeader";
import Image from "next/image";
import carpicture from "@/assets/images/carpicture.png";
import SauFooter from "@/components/SauFooter";
export default function Page() {
    const [price, setPrice] = useState("");
  const [downPercent, setDownPercent] = useState(10);
  const [months, setMonths] = useState(12);
  const [interest, setInterest] = useState("");
  const [result, setResult] = useState("0.00");

  //ยอดจัด = ราคารถ - (ราคารถ * เงินดาวน์ / 100)
//ดอกเบี้ยทั้งหมด = ยอดจัด + ( (ยอดจัด * ดอกเบี้ย / 100) * จำนวนปีที่ผ่อน)
//ค่างวดต่อเดือน = (ยอดจัด + ดอกเบี้ยทั้งหมด ) / จำนวนงวดผ่อน

  const calculate = () => {
    const carPrice = parseFloat(price);
        const carInterest = parseFloat(interest);
    const total = carPrice - (carPrice * downPercent / 100);
    const totalInterest = total + (total * carInterest / 100) * months;
    const installment = totalInterest / months;
    setResult(installment.toFixed(2));
  };

    return (
        <>
            {/* ส่วนของการแสดง SauHeader */}
            <SauHeader />
            
            <div className="p-10 w-3/5 mx-auto mt-20 border border-gray-100 rounded-xl
                    flex flex-col justify-center items-center
                    shadow-xl">
                {/* ส่วนแสดงรูปจาก Internet */}
                <Image
                    src={carpicture} alt="car"
                    width={80} height={37} className="rounded-xl mb-10"/>

                 {/* ส่วนแสดงชื่อการคำนวณ */}
                 <h1 className="text-xl text-center text-blue-600 font-bold">
                  โปรแกรมคำนวณค่างวดรถยนต์
                 </h1>

                 {/* ส่วนแสดงรายละเอียดการคำนวณ */}
                 <div className="w-3/5 mt-5">
                 <label htmlFor="price">ราคารถ (บาท)</label>
                 <input type="number" name="price" id="price" value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  placeholder="999999" 
                  className="bg-yellow-50 p-2 w-full mt-2 mb-3 rounded border" />
                
                <label htmlFor="down">เงินดาวน์ (%)</label>
                 <div className="flex gap-4 mb-4">
                    {[10, 20, 30, 40].map((p) => (
                <label key={p} className="flex gap-1">
                <input type="radio" checked={downPercent === p}
                  onChange={() => setDownPercent(p)} name="down" id="down"/> {p}%
                </label>
            ))}
          </div>

            <label htmlFor="installment">
            จำนวนงวด (เดือน)
          </label>
          <select
          value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full mb-4 px-3 py-2 border rounded bg-yellow-50"
          >
            <option value={12}>12 เดือน</option>
            <option value={24}>24 เดือน</option>
            <option value={36}>36 เดือน</option>
            <option value={48}>48 เดือน</option>
            <option value={60}>60 เดือน</option>
            <option value={72}>72 เดือน</option>
          </select>

          <label htmlFor="interest">
            ดอกเบี้ยต่อปี (%)
          </label>
          <input
            type="number" value={interest}
            onChange={(e) => setInterest(e.target.value)} name="interest" id="interest" placeholder="0.25"
            className="w-full mb-6 px-3 py-2 border rounded bg-yellow-50"
          />

          <button onClick={calculate}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mb-6"
          >
            คำนวณ
          </button>

          {/* ผลลัพธ์ */}
          <div className="bg-gray-200 rounded p-4 text-center">
            <p className="font-semibold">ค่างวดต่อเดือน</p>
            <p className="text-3xl font-bold text-red-600">
              {result}
            </p>
          </div>

          <SauFooter />

          </div>
    </div>
</>
    );
}