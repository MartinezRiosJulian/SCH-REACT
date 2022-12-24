let obj = [
  { id: "1", name: "Llantas Clio", category: "Llantas", stock: "20", price: "10000", url: "https://http2.mlstatic.com/D_NQ_NP_955651-MLA31581536377_072019-O.webp", },
  { id: "2", name: "Llantas Fiesta", category: "Llantas", stock: "20", price: "10000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2slCYnijirU5wgv07Bdv67IuYdZePN_NPw&usqp=CAU", },
  { id: "3", name: "Llantas Palio", category: "Llantas", stock: "20", price: "10000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGufHRoRHLrnOVxzvlKakpsklTrTfPzmjiVA&usqp=CAU", },
  { id: "4", name: "Opticas Clio", category: "Opticas", stock: "20", price: "15000", url: "https://http2.mlstatic.com/D_NQ_NP_890876-MLA31112728467_062019-O.webp", },
  { id: "5", name: "Opticas Fiesta", category: "Opticas", stock: "20", price: "15000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJtwHD4mhLfXlv3SPWeekh1xB6AunM1icFA&usqp=CAU", },
  { id: "6", name: "Opticas Palio", category: "Opticas", stock: "20", price: "15000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRw4GAGMmMS-toaYJ-dgDWXfi5lJVHSnW_Q&usqp=CAU", },
  { id: "7", name: "P. de freno Clio", category: "Pastillas", stock: "20", price: "11000", url: "https://http2.mlstatic.com/D_NQ_NP_694405-MLA20857482025_082016-O.webp", },
  { id: "8", name: "P. de freno Fiesta", category: "Pastillas", stock: "20", price: "11000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp2DfWIOBCceIS2VrA1-T9Tj3RZRcB8cZ0A&usqp=CAU", },
  { id: "9", name: "P. de freno Palio", category: "Pastillas", stock: "20", price: "11000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03s8qSAzIlsTHdAWDCH8Jtc5PQRcUPD5JZg&usqp=CAU", },
  { id: "10", name: "Amortiguadores Clio", category: "Amortiguadores", stock: "20", price: "10000", url: "https://http2.mlstatic.com/D_NQ_NP_921730-MLA40439257715_012020-O.webp", },
  { id: "11", name: "Amortiguadores Fiesta", category: "Amortiguadores", stock: "20", price: "10000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7i8eIFak514Q4exhQni9Eti_bAm8v0DKT_g&usqp=CAU", },
  { id: "12", name: "Amortiguadores Palio", category: "Amortiguadores", stock: "20", price: "10000", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1-2mJ2a_5kp4XHlNqG3XDs4a_QIBXvzx3b-gw_nqHWjX8FUW0ctj3sQylJODxcCHJoQ&usqp=CAU", },
];

export const gFetch = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(id ? obj.find((item) => item.id === id) : obj);
    }, 400);
  });
};
