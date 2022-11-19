let obj = [
    { id: "1", nombre: "Llantas Clio", categoria: "Llantas", stock: "20", precio: "10000", foto: "https://http2.mlstatic.com/D_NQ_NP_955651-MLA31581536377_072019-O.webp" },
    { id: "2", nombre: "Llantas Fiesta", categoria: "Llantas", stock: "20", precio: "10000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2slCYnijirU5wgv07Bdv67IuYdZePN_NPw&usqp=CAU" },
    { id: "3", nombre: "Llantas Palio", categoria: "Llantas", stock: "20", precio: "10000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGufHRoRHLrnOVxzvlKakpsklTrTfPzmjiVA&usqp=CAU" },
    { id: "4", nombre: "Opticas Clio", categoria: "Opticas", stock: "20", precio: "15000", foto: "https://http2.mlstatic.com/D_NQ_NP_890876-MLA31112728467_062019-O.webp" },
    { id: "5", nombre: "Opticas Fiesta", categoria: "Opticas", stock: "20", precio: "15000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJtwHD4mhLfXlv3SPWeekh1xB6AunM1icFA&usqp=CAU" },
    { id: "6", nombre: "Opticas Palio", categoria: "Opticas", stock: "20", precio: "15000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRw4GAGMmMS-toaYJ-dgDWXfi5lJVHSnW_Q&usqp=CAU" },
    { id: "7", nombre: "P. de freno Clio", categoria: "Pastillas", stock: "20", precio: "11000", foto: "https://http2.mlstatic.com/D_NQ_NP_694405-MLA20857482025_082016-O.webp" },
    { id: "8", nombre: "P. de freno Fiesta", categoria: "Pastillas", stock: "20", precio: "11000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp2DfWIOBCceIS2VrA1-T9Tj3RZRcB8cZ0A&usqp=CAU" },
    { id: "9", nombre: "P. de freno Palio", categoria: "Pastillas", stock: "20", precio: "11000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03s8qSAzIlsTHdAWDCH8Jtc5PQRcUPD5JZg&usqp=CAU" },
    { id: "10", nombre: "Amortiguadores Clio", categoria: "Amortiguadores", stock: "20", precio: "10000", foto: "https://http2.mlstatic.com/D_NQ_NP_921730-MLA40439257715_012020-O.webp" },
    { id: "11", nombre: "Amortiguadores Fiesta", categoria: "Amortiguadores", stock: "20", precio: "10000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hp9CNlT47s-2nwCqCUOXhZSN4cWBgp9mdA&usqp=CAU" },
    { id: "12", nombre: "Amortiguadores Palio", categoria: "Amortiguadores", stock: "20", precio: "10000", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1-2mJ2a_5kp4XHlNqG3XDs4a_QIBXvzx3b-gw_nqHWjX8FUW0ctj3sQylJODxcCHJoQ&usqp=CAU" },
]

export const gFetch = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(id ? obj.find(item => item.id === id) : obj)
        }, 1000)
    })

}

