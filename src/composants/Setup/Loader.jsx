export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#6971FF] border-t-transparent"></div>
      <p className="text-[#6971FF] font-semibold">Loading questions...</p>
    </div>
  );
}