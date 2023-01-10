import { baseConfig } from "../config";
import autoplay from "solid-slider/plugins/autoplay";
import { Slider, SliderButton, createSlider } from "solid-slider";

type Props = {};

export default function HotEvent({}: Props) {
  const [slider, { current, next, prev, moveTo }] = createSlider(
    { loop: true },
    autoplay(3000, { pauseOnDrag: true })
  );

  return (
    <>
      <div class="flex gap-1 w-[1200px] mx-auto">
        <div class="w-[796px] h-[243px] bg-orange-700 relative">
          <div use:slider={slider}>
            {[1, 2, 3, 4].map((event) => (
              <img
                width="796"
                height="243"
                src={baseConfig.resolveImagePath(`events/${event}.jpg`)}
              ></img>
            ))}
          </div>
          <button
            onClick={next}
            class="absolute transition hover:opacity-60 rounded-sm rotate-180 bg-black px-2 py-4 opacity-30 right-1 top-[42%]"
          >
            <svg
              width="1em"
              height="1em"
              fill="#fff"
              enable-background="new 0 0 13 20"
              viewBox="0 0 13 20"
              role="img"
              class="stardust-icon stardust-icon-arrow-left-bold"
            >
              <path
                stroke="none"
                d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"
              ></path>
            </svg>
          </button>
          <button
            onClick={prev}
            class="absolute transition  hover:opacity-60 rounded-sm left-1 bg-black px-2 py-4 opacity-30  top-[42%]"
          >
            <svg
              width="1em"
              height="1em"
              fill="#fff"
              enable-background="new 0 0 13 20"
              viewBox="0 0 13 20"
              role="img"
              class="stardust-icon stardust-icon-arrow-left-bold"
            >
              <path
                stroke="none"
                d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex flex-col gap-1 w-[1200px-780px]">
          <div>
            <img
              width="400"
              height="115"
              src={baseConfig.resolveImagePath("2.png")}
            ></img>
          </div>
          <div>
            <img
              width="400"
              height="115"
              src={baseConfig.resolveImagePath("3.jpg")}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
