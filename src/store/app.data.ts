// 更新頻度の高いテキストやバナーなどのデータを一元管理する
import { BnrData } from "@/store/app.config";

export class AppData {
  public static bannerDataList: BnrData[] = [
    {
      src: "/img/banner-monsterdive.png",
      href: "https://www.monster-dive.com/",
      alt: "バナー:株式会社 MONSTER DIVE",
    },
    {
      src: "/img/banner-C&R.png",
      href: "https://www.c-r.com/",
      alt: "バナー:株式会社 C&R研究所",
    },
  ];
}
