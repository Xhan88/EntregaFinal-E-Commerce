let objBoy = [
  {id: '1', name:'Carrito cargador de Niño', categoria: 'Juguetes para niño', stock: '30', precio: '$ 250', foto:"https://images-na.ssl-images-amazon.com/images/I/813jqye+32L._AC._SR360,460.jpg"},
  {id: '2', name:'Carrito para pasear', categoria: 'Juguetes para niño', stock: '30', precio: '$ 150', foto:"https://m.media-amazon.com/images/I/31NzVXnsbyS._SL500_.jpg"},
  {id: '3', name:'Dinosaurio JW', categoria: 'Juguetes para niño', stock: '30', precio: '$ 450', foto:"https://www.plasticosur.com/images/thumbs/0177798_matthd-49-figura-yangchuanosaurus-g.jpeg"},
  {id: '4', name:'patin', categoria: 'Juguetes para niño', stock: '30', precio: '$ 1200', foto:"https://http2.mlstatic.com/D_NQ_NP_884896-MLM31222664632_062019-O.jpg"},
  {id: '5', name:'Carritos', categoria: 'Juguetes para niño', stock: '30', precio: '$ 28', foto:"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00002708412013L.jpg"},
  {id: '6', name:'Piezas Lego ', categoria: 'Juguetes para niño', stock: '15', precio: '$ 849', foto:"https://http2.mlstatic.com/D_NQ_NP_2X_809112-MLA48231772017_112021-V.webp"},
  
  {id: '7', name:'Casa de Muñecas ', categoria: 'Juguetes para niña', stock: '10', precio: '$ 1849', foto:"https://cdn1.coppel.com/images/catalog/pm/5056193-2.jpg"},
  {id: '8', name:'Muñeca Barbie ', categoria: 'Juguetes para niña', stock: '15', precio: '$ 849', foto:"https://http2.mlstatic.com/D_NQ_NP_622103-MCO50937813118_072022-O.jpg"},
  {id: '9', name:'Muñeco Bebe ', categoria: 'Juguetes para niña', stock: '25', precio: '$ 349', foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaa6OgQjW7CMC2Q6dkWcucIagRScxg-uK0A&usqp=CAU"},
  {id: '10', name:'Motoneta Niña ', categoria: 'Juguetes para niña', stock: '15', precio: '$ 3849', foto:"https://images.ecestaticos.com/xFTkhy7PODdIsxMgMzdFFKCxqfM=/0x0:640x361/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F73d%2F33f%2F35e%2F73d33f35e8b66ab404588b8a1d500879.jpg"},
  {id: '11', name:'Bloques Iteractivos ', categoria: 'Juguetes para niña', stock: '5', precio: '$ 349', foto:"https://http2.mlstatic.com/D_NQ_NP_869543-MLM46161518562_052021-V.jpg"},
  {id: '12', name:'Kit de maquillaje y Pinturas ', categoria: 'Juguetes para niña', stock: '21', precio: '$ 449', foto:"https://m.media-amazon.com/images/I/81kvHpp6nrL._AC_SX425_.jpg"},

  {id: '13', name:'Carrito Montable ', categoria: 'Juguetes en Oferta', stock: '31', precio: '$ 489', foto:"https://static0.tiendeo.mx/upload_articulos/430243/94e4f1ad-aee7-4beb-a50a-68b77525ff78.jpg"},
  {id: '14', name:'Puzle de Figuras ', categoria: 'Juguetes en Oferta', stock: '12', precio: '$ 49', foto:"http://cdn.shopify.com/s/files/1/0101/8711/2533/products/shape-o_2_PRINICPAL_2_grande.jpg?v=1578435584"},
  {id: '15', name:'Juguete de Estimulacion', categoria: 'Juguetes en Oferta', stock: '3', precio: '$ 839', foto:"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/mg/images/categorias/d-bebes/f-bebes-juguetes-y-estimulacion/l-juguetes-andaderas.jpg"},
  {id: '16', name:'Dinosaurio - JW Ataque Rujido', categoria: 'Juguetes en Oferta', stock: '11', precio: '$ 449', foto:"https://palutatoymarket.com/28377-medium_default/dinosaurio-jw-ataque-rugido-ceratosaurus.jpg"},
  {id: '17', name:'Bebe Yoda', categoria: 'Juguetes en Oferta', stock: '10', precio: '$ 249', foto:"https://cnnespanol.cnn.com/wp-content/uploads/2021/11/baby-yoda-grogu-mandalorian-juguete.png"},
  {id: '18', name:'Patines de 4 Ruedas', categoria: 'Juguetes en Oferta', stock: '29', precio: '$ 649', foto:"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/0adb78a4-7da3-4aaf-9ddf-c3d73779ba32.3b621b13630d0918ff1337c70834b401.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffffv"},
  
  {id: '19', name:'Indominus Rex ', categoria: 'Proximos Lansamientos', stock: '31', precio: '$ 2200', foto:"https://d2r9epyceweg5n.cloudfront.net/stores/001/095/952/products/91ylciqnk6l-_ac_sl1500_-21-3221f6d1b47eb8313216075623728739-1024-1024.jpg"},
  {id: '20', name:'Tyrannosaurus Rex ', categoria: 'Proximos Lansamientos', stock: '12', precio: '$ 1454', foto:"https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/mg/gm/1p/images/product-images/img_large/00019473503540l.jpg"},
  {id: '21', name:'Mosasaurus', categoria: 'Proximos Lansamientos', stock: '23', precio: '$ 1839', foto:"https://chedrauimx.vtexassets.com/arquivos/ids/9756291/194735058136_00.jpg?v=638060180501370000"},
  {id: '22', name:'Vegetto', categoria: 'Proximos Lansamientos', stock: '11', precio: '$ 1449', foto:"https://www.figuritasde.com/wp-content/uploads/2020/06/16-DBZ-Vegetto.jpg"},
  {id: '23', name:'Power Ranger Red', categoria: 'Proximos Lansamientos', stock: '10', precio: '$ 249', foto:"https://http2.mlstatic.com/D_NQ_NP_653862-MLM44221885914_122020-O.jpg"},
  {id: '24', name:'Construx Pokemon Pikachu', categoria: 'Proximos Lansamientos', stock: '29', precio: '$ 649', foto:"https://cdn.shopify.com/s/files/1/0612/7563/5954/products/jdm86y72mvml64k9nmme_63a90dc8-a0c4-4d63-9e0b-56dc4939cbd3_grande.jpg?v=1670412914"},
];


export const GFetch = (id) => {
  return new Promise ( (resolve, reject)=> {
    const condition = true
    if(condition) {
      setTimeout(() => {
        resolve( objBoy )
      },1000)
    }else {
      reject('Error')
    }
  })
}

