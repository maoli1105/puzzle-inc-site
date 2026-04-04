
import { PieceProduct } from '../types';

const MOCK_DATA: PieceProduct[] = [
  {
    id: "1",
    Piece_Name: "Piece One",
    Piece_Catchphrase: "整う、という快感。",
    Piece_Description: "240Wの高速充電。480Mbpsのデータ転送。磁力でぴたっとまとまり、いつもすっきり。リキッドシリコンの柔らかな手触り。",
    Piece_Image_URL: "../assets/piceone_01_bk.jpg",
    Piece_Detail_URL: "piece-one/",
    Category: "Cables",
    Tag: "Best Seller"
  },
  {
    id: "2",
    Piece_Name: "Piece Flow",
    Piece_Catchphrase: "流れを止めない、美しさ。",
    Piece_Description: "強靭さと、しなやかさを。高耐久ナイロン編組と金属コネクタの輝きが、確かな接続と上質な手触りを約束します。日常のノイズを忘れさせる、スムーズなデータフロー。",
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
