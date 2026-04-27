"use client";

import { useState } from "react";
import SauHeader from "@/components/SauHeader";
import Image from "next/image";
import exercisepicture from "@/assets/images/exercisepicture.png";
import SauFooter from "@/components/SauFooter";
export default function Page() {
    //สร้าง state เพื่อจัดการกับค่าข้อมูลใน Component
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [bmr, setBmr] = useState("0.00");
    const [gender, setGender] = useState("male");

    //ฟังก์ชันสำหรับการคํานวณ BMR
    const handleBmrCalClick = () => {
        //Validate
        if (weight === "" || height === "" || age === "") {
            alert("กรุณาป้อนน้ำหนักและส่วนสูงให้ครบถ้วน");
            return;
        }

        if (weight === "0" || height === "0" || age === "0") {
            alert("ค่าน้ำหนัก และส่วนสูง ต้องไม่เป็นศูนย์");
            return;
        }

        //คำนวณ BMR
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);
        const ageValue = parseFloat(age);

        //สำหรับผู้ชาย : BMR = 66 + (13.7 x น้ำหนักตัวเป็น กก.) + (5 x ส่วนสูงเป็น ซม.) – (6.8 x อายุ)
        //สำหรับผู้หญิง : BMR = 665 + (9.6 x น้ำหนักตัวเป็น กก.) + (1.8 x ส่วนสูงเป็น ซม.) – (4.7 x อายุ)
        let bmrValue = 0.0;
        if (gender === "male") {
            bmrValue = 66 + (13.7 * weightValue) + (5 * heightValue) - (6.8 * ageValue);
        } else {
            bmrValue = 665 + (9.6 * weightValue) + (1.8 * heightValue) - (4.7 * ageValue);
        }
        setBmr(bmrValue.toFixed(2));
    }

    //ฟังก์ชันสำหรับการล้างข้อมูล
    const handleClearClick = () => {
        setWeight("");
        setHeight("");
        setAge("");
        setBmr("0.00");
        setGender("male");
    };

    return (
        <>
            {/* ส่วนของการแสดง SauHeader */}
            <SauHeader />
        
    <div 
                className="p-10 w-3/5 mx-auto mt-20 border border-gray-100 rounded-xl
                    flex flex-col justify-center items-center
                    shadow-xl">
                {/* ส่วนแสดงรูปจาก Internet */}
        <Image
          src={exercisepicture} alt="bmr"
          width={80} height={37} className="rounded-xl mb-10"
        />

        {/* ส่วนแสดงชื่อการคำนวณ */}
        <h1 className="text-xl text-center text-blue-600 font-bold">
          BMR Calculator
          <br />
          โปรแกรมคำนวณ BMR
        </h1>

                {/* ส่วนของการป้อนน้ำหนัก ส่วนสูง และปุ่มคำนวณ */}
        <div className="w-3/5 mt-5">
          <div className="flex gap-5 mb-3"> 
            <button onClick={()=>{setGender('male')}} 
            className={`w-full cursor-pointer border-2 rounded p-2 border-gray-300
                                ${gender === "male" ? "bg-green-300 border-green-500" : ''}`}>
                ชาย
            </button>
            <button onClick={()=>{setGender('female')}}
            className={`w-full cursor-pointer border-2 rounded p-2 border-gray-300
                                ${gender === "female" ? "bg-pink-300 border-pink-500" : ''}`}>
                หญิง
            </button>
          </div>

          <label htmlFor="weight">ป้อนน้ำหนัก (kg.)</label>
          <input type="number" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}
                  placeholder="55.50" 
                  className="bg-amber-50 p-2 w-full mt-2 mb-3 rounded" />
 
          <label htmlFor="height">ป้อนส่วนสูง (cm.)</label>
          <input type="number" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)}
                  placeholder="155.50" 
                  className="bg-amber-50 p-2 w-full mt-2 rounded mb-3" />

          <label htmlFor="age">ป้อนอายุ (ปี)</label>
          <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)}
                  placeholder="25" 
                  className="bg-amber-50 p-2 w-full mt-2 rounded" />
         
          <button onClick={handleBmrCalClick}
          className="w-full bg-blue-500 hover:bg-blue-700
                          text-white font-bold p-2 mt-5 rounded">
            คำนวณ BMR
          </button>
          <button onClick={handleClearClick}
          className="w-full bg-orange-500 hover:bg-orange-700
                          text-white font-bold p-2 mt-2 rounded">
            ล้างข้อมูล
          </button>
        </div>

        {/* ส่วนของการแสดงผล BMI */}
        <div className="w-3/5 mt-5 bg-gray-300 p-5 rounded">
          <h2 className="text-lg text-center font-bold mb-1 text-gray-600">
            BMR
          </h2>
          <h2 className="text-3xl text-center font-bold mb-1 text-red-600">
            {bmr}
          </h2>
        </div>
        {/* ส่วนของการแสดง SauFooter */}
        <SauFooter />
    </div>
        </>
    );
}