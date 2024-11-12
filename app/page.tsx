import Image from "next/image";
import {StackedAreaChart} from "@/components/stacked_area_chart";

export default function Home() {
  return (
      <main className="flex flex-col">
        <div className="flex p-8 gap-10 justify-center">
          <div className="basis-1/3 space-y-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">XXX company prevails the market</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              with its innovative products and services. We are a team of professionals who are dedicated to providing
              the best services to our clients. We are looking for talented individuals to join our team. If you are
              passionate about technology and want to work in a fast-paced environment, we would love to hear from you.
              Apply now!
            </p>
          </div>
          <div className={"basis-1/2"}>
            <StackedAreaChart/>
          </div>
        </div>
        <Image src="/map.svg" alt="map" width={1920} height={1080}/>

      </main>
  );
}
