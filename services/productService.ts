import { PieceProduct } from '../types';

// ==========================================
// スプレッドシート連携の設定 (Google Sheets Integration)
// ==========================================
// 1. Googleスプレッドシートを作成し、1行目をヘッダーにします:
//    id, Piece_Name, Piece_Catchphrase, Piece_Description, Piece_Image_URL, Piece_Detail_URL
// 2. 「ファイル」>「共有」>「ウェブに公開」を選択し、「カンマ区切り形式 (.csv)」で公開します。
// 3. 発行されたURLを以下の変数に設定してください。
// const GOOGLE_SHEET_CSV_URL = "ここに公開されたCSVのURLを貼り付け";

const MOCK_DATA: PieceProduct[] = [
  {
    id: "1",
    Piece_Name: "Piece One",
    Piece_Catchphrase: "暮らしの中に、ひとつのピースを。",
    Piece_Description: "240Wの高速充電。480Mbpsのデータ転送。磁力でぴたっとまとまり、いつもすっきり。あなたのデジタルライフを静かに支える、究極のケーブル体験。",
    // カンマ区切りで複数の画像を指定すると、自動的にスライドショーになります
    Piece_Image_URL: "assets/piece_one_01.png,assets/piece_one_02.png,assets/piece_one_03.png,assets/piece_one_04.png,assets/piece_one_05.png",
    Piece_Detail_URL: "/products/piece-one/"
  },
  {
    id: "2",
    Piece_Name: "Piece Flow",
    Piece_Catchphrase: "流れを止めない、美しさ。",
    Piece_Description: "強靭さと、しなやかさを。高耐久ナイロン編組と金属コネクタの輝きが、確かな接続と上質な手触りを約束します。日常のノイズを忘れさせる、スムーズなデータフロー。",
    Piece_Image_URL: "assets/piece_flow_01.png,assets/piece_flow_02.png,assets/piece_flow_03.png",
    Piece_Detail_URL: "/products/piece-flow/"
  }
];

export const fetchProducts = async (): Promise<PieceProduct[]> => {
  // 実装例: Google Sheets CSVからのフェッチ (コメントアウトを解除して使用)
  /*
  if (typeof GOOGLE_SHEET_CSV_URL !== 'undefined' && GOOGLE_SHEET_CSV_URL) {
    try {
      const response = await fetch(GOOGLE_SHEET_CSV_URL);
      const csvText = await response.text();
      // 簡易的なCSVパース処理
      const lines = csvText.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.trim());
      
      const parsedData = lines.slice(1).map((line, index) => {
        // 注: データ内にカンマが含まれる場合は適切なCSVパーサーライブラリ(PapaParse等)を使用してください
        // ここでは簡易的に処理しています
        const values = line.split(','); 
        const entry: any = { id: String(index + 1) };
        headers.forEach((header, i) => {
          // 画像URL列の場合はカンマで結合されたまま取得したい場合があるため注意が必要ですが、
          // シンプルな実装として値をそのまま割り当てます。
          entry[header] = values[i]?.trim() || "";
        });
        return entry as PieceProduct;
      });
      return parsedData;
    } catch (e) {
      console.error("Failed to fetch spreadsheet", e);
      return MOCK_DATA;
    }
  }
  */

  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 500);
  });
};