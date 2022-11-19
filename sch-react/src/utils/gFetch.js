let obj = [
    { id: "1", nombre: "Llantas Clio", categoria: "LLANTAS", stock: "SI", precio: "10000", foto: "https://http2.mlstatic.com/D_NQ_NP_955651-MLA31581536377_072019-O.webp" },
    { id: "2", nombre: "Opticas Clio", categoria: "OPTICAS", stock: "SI", precio: "15000", foto: "https://http2.mlstatic.com/D_NQ_NP_890876-MLA31112728467_062019-O.webp" },
    { id: "3", nombre: "P. de freno Clio", categoria: "PASTILLAS DE FRENO", stock: "SI", precio: "11000", foto: "https://http2.mlstatic.com/D_NQ_NP_694405-MLA20857482025_082016-O.webp" },
    { id: "4", nombre: "Amortiguadores Clio", categoria: "AMORTIGUADORES", stock: "SI", precio: "10000", foto: "https://http2.mlstatic.com/D_NQ_NP_921730-MLA40439257715_012020-O.webp" },
]

 export const gFetch = new Promise((res, rej) => {
    setTimeout(() => {
        res(obj)
    }, 2000)
})

