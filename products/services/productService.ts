
import { PieceProduct } from '../types';

const MOCK_DATA: PieceProduct[] = [
  {
    id: "1",
    Piece_Name: "Piece One",
    Piece_Catchphrase: "整う、という快感。",
    Piece_Description: "240Wの高速充電。480Mbpsのデータ転送。磁力でぴたっとまとまり、いつもすっきり。高耐久ナイロン編組と金属コネクタの輝きが、上質な体験を約束します。",
    Piece_Image_URL: "../assets/piceone_01_bk.jpg",
    Piece_Detail_URL: "piece-one/",
    Category: "Cables",
    Tag: "Best Seller"
  },
  {
    id: "2",
    Piece_Name: "Piece Flow",
    Piece_Catchphrase: "流れを止めない、美しさ。",
    Piece_Description: "シリコンの滑らかな手触りと、亜鉛合金コネクタの重厚な輝き。遊び心のあるバイカラーデザインが、日常に柔らかなアクセントを添えます。絡まずしなやかに、あなたの時間を止めないスムーズなケーブル体験を。",
    Piece_Image_URL: "../assets/pieceflow_02_bp.jpg",
    Piece_Detail_URL: "piece-flow/"
    ,
    Category: "Cables",
    Tag: "New"
  }
];

export const fetchProducts = async (): Promise<PieceProduct[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 500);
  });
};
