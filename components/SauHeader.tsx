import Link from "next/link";
export default function SauHeader() {
    return (
        <div className="bg-blue-400 text-center p-4">
            <Link href="/body/calbmi" className="text-white hover:text-cyan-100 mx-3">
            BMI Calculator
            </Link>
            |
            <Link href="/body/calbmr" className="text-white hover:text-cyan-100 mx-3">
            BMR Calculator
            </Link>
            |
            <Link href="/calcarinstallment" className="text-white hover:text-cyan-100 mx-3">
            Car Installment
            </Link>
        </div>
    );
}