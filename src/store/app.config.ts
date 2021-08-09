// プロジェクト共通で用いるTypeScriptのクラス定義やインターフェース定義などを一元管理する
/**
 * バナーデータ
 */
export interface BnrData {
  src: string;
  href: string;
  alt: string;
}
/**
 * MVデータ
 */
export interface HeroData {
  page: string;
  headingHtml: string;
  descHtml: string;
  cls: string;
}
