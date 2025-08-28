import { Sidebar } from "@/widgets/sidebar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Header } from "@/widgets/header";
import { PatientHeader } from "@/widgets/patient-header/ui/PatientHeader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "TxPlanPro",
  description: "TxPlanPro Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <div className="max-w-[1440px] min-h-[674px] ml-auto mr-auto flex items-start gap-4 pt-4 pb-8 px-8 bg-background-dark w-full">
          <Sidebar />
          <main className="flex-col items-start gap-4 flex-1 grow flex">
            {/* <Header /> */}
            <PatientHeader name={"Inna Sergeeva"} />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
