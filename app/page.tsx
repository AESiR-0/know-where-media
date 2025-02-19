import Home from "@/sections/hero";
import Campaign from "@/sections/campaign";
import Metrics from "@/sections/metrics";
import Brands from "@/sections/brands";
import Navbar from "@/app/components/navbar";
export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Campaign />
      <Metrics />
      <Brands />
    </>
  );
}
