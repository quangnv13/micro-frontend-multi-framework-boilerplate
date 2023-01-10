import { baseConfig } from "../config";

type Props = {};
const hotCategories = [
  {
    image: "hot-categories/1.png",
    displayName: "Khung Giờ Săn Sale",
  },
  {
    image: "hot-categories/2.png",
    displayName: "Gì Cũng Rẻ - Mua Là Freeship",
  },
  {
    image: "hot-categories/3.png",
    displayName: "Mã Giảm Giá",
  },
  {
    image: "hot-categories/4.png",
    displayName: "Miễn Phí Vận Chuyển",
  },
  {
    image: "hot-categories/5.png",
    displayName: "Bắt Trend - Giá Sốc",
  },
  {
    image: "hot-categories/6.png",
    displayName: "Hoàn Xu Xtra từ 100K",
  },
  {
    image: "hot-categories/7.png",
    displayName: "Hàng Hiệu Giá Tốt",
  },
  {
    image: "hot-categories/8.png",
    displayName: "Chia Kho Xu 30 Triệu",
  },
  {
    image: "hot-categories/9.png",
    displayName: "Nạp Điện Thoại & Thẻ Game",
  },
  {
    image: "hot-categories/10.png",
    displayName: "Hàng Quốc Tế",
  },
];
export default function HotCategory({}: Props) {
  return (
    <div class="flex justify-between items-center pb-4 pt-5 bg-white w-[1200px] mx-auto">
      {hotCategories.map((hot) => (
        <div class="w-[100px] hover:-translate-y-1 transition-transform cursor-pointer h-[81px] flex flex-col items-center justify-start">
          <img
            width={45}
            height={45}
            src={baseConfig.resolveImagePath(hot.image)}
          />
          <span class="text-center text-[0.8rem] mt-1">{hot.displayName}</span>
        </div>
      ))}
    </div>
  );
}
