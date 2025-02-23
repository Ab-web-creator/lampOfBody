import Navbar from "../../components/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <Navbar />
      <main className="mt-20 max-w-[1200px] mx-auto ">{children}</main>
    </div>
  );
}
