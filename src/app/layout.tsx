import Topbar from "@/components/Topbar";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
