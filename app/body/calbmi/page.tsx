"use client"

import { useState } from "react";
import SauHeader from "@/components/SauHeader";
import Image from "next/image";
import bmipicture from "@/assets/images/bmipicture.png";
import SauFooter from "@/components/SauFooter";
 
export default function Page() {
    //สร้าง state เพื่อจัดการกับค่าข้อมูลใน Component
    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [bmi,setBmi] = useState("0.00");
    const [bmiResult,setBmiResult] = useState("?????");

    //ฟังก์ชันสำหรับการคํานวณ BMI
    const handleCalBMIClick = () => {
      //Validate
      if (weight === "" || height === "") {
        alert("กรุณาป้อนน้ำหนักและส่วนสูงให้ครบถ้วน");
        return;
      }

      if(weight === "0" || height === "0"){
        alert("ค่าน้ำหนัก และส่วนสูง ต้องไม่เป็นศูนย์");
        return;
      }

      //คำนวญ BMI
      const weightValue = parseFloat(weight);
      const heightValue = parseFloat(height) / 100;
      const bmiValue = weightValue / (heightValue ** 2);
      setBmi(bmiValue.toFixed(2));

      //แปลผล BMI
      if (bmiValue < 18.5) {
        setBmiResult("ผอมเกินไป");
      } else if (bmiValue <= 24.9) {
        setBmiResult("น้ําหนักปกติ เหมาะสม");
      } else if (bmiValue <= 29.9) {
        setBmiResult("อ้วน");
      } else if(bmiValue <= 39.9) {
        setBmiResult("อ้วนมาก");
      } else {
        setBmiResult("อ้วนอันตราย");
      }
    };
 
    //ฟังก์ชันสำหรับการล้างข้อมูล
    const handleClearClick = () => {
      setWeight("");
      setHeight("");
      setBmi("0.00");
      setBmiResult("?????");
    };
  return (
    <>
      {/* ส่วนของการแสดง SauHeader */}
      <SauHeader />
 
      <div
        className="p-10 w-3/5 mx-auto mt-20 border border-gray-100 rounded-xl
                    flex flex-col justify-center items-center
                    shadow-xl"
      >
        {/* ส่วนแสดงรูปจาก Internet */}
        <Image
          src={bmipicture} alt="bmi"
          width={80} height={37} className="rounded-xl mb-10"
        />
 
        {/* ส่วนแสดงชื่อการคำนวณ */}
        <h1 className="text-xl text-center text-blue-600 font-bold">
          BMI Calculator
          <br />
          โปรแกรมคำนวณ BMI
        </h1>
 
        {/* ส่วนของการป้อนน้ำหนัก ส่วนสูง และปุ่มคำนวณ */}
        <div className="w-3/5 mt-5">
          <label htmlFor="weight">ป้อนน้ำหนัก (kg.)</label>
          <input type="number" name="weight" id="weight"
                  placeholder="55.50" value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="bg-amber-50 p-2 w-full mt-2 mb-3 rounded" />
 
          <label htmlFor="height">ป้อนส่วนสูง (cm.)</label>
          <input type="number" name="height" id="height"
                  placeholder="155.50" value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-amber-50 p-2 w-full mt-2 rounded" />
         
          <button onClick={handleCalBMIClick}
          className="w-full bg-blue-500 hover:bg-blue-700
                          text-white font-bold p-2 mt-5 rounded">
            คำนวณ BMI
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
            BMI
          </h2>
          <h2 className="text-3xl text-center font-bold mb-1 text-red-600">
            {bmi}
          </h2>
          <h2 className="text-lg text-center font-bold mb-3 text-gray-600">
            การแปลผล BMI : {bmiResult}
          </h2>        
        </div>
 
        {/* ส่วนของการแสดง SauFooter */}
        <SauFooter />
      </div>
    </>
  );
}