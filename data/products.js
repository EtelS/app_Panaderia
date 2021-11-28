// const ApiItems={
//     items:[
//     {id:1, catid:3 ,nombre: "Bicicleta Usada", precio:10000, imagenUrl:"https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg", descripcion: 'Descripcion1'},
//     {id:2, catid:2 ,nombre:"Pennywise", precio:15000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_652236-MLA43334548863_092020-O.jpg", descripcion: 'Descripcion1'},
//     {id:3, catid:4 ,nombre:"Compresor de Aerografo", precio: 5000, imagenUrl:"https://www.artisticacordoba.com.ar/5315-home_default/mini-compresor-para-aerografos-con-manguera-y-regulador.jpg", descripcion: 'Descripcion1'},
//     {id:4, catid:4 ,nombre: "Cajon de madera", precio:1000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_703446-MLA31136086024_062019-W.jpg", descripcion: 'Descripcion1'},
//     {id:5, catid:4 ,nombre: "Heladera Familiar", precio:30000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_889745-MLA32557339159_102019-O.jpg", descripcion: 'Heladera con Freezer marca Gafa en buen estado, bajo consumo'},
//     {id:6, catid:1 ,nombre: "Notebook HP", precio:25000, imagenUrl:"https://www.computershopping.com.ar/Images/Productos/HP-240-G7_Foto0.jpg", descripcion: ' Corei3, 8 gigas de RAM, disco SATA 1 TB, windows 10'},
//     {id:7, catid:1 ,nombre:"Celular Motorola", precio:32600, imagenUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/652/596/products/1121-cf8ae440ee291bbf4616069311474825-640-0.jpg", descripcion: 'Motorola G7 usado con gorila glass perfectas condiciones'},
//     {id:8, catid:1 ,nombre:"Impresora EPSON", precio: 17000, imagenUrl:"https://www.epson.es/files/assets/converted/1500m-1500m/2/3/0/0/23002-productpicture-hires-en-et2710_l3150_hero.png.png", descripcion: 'Impresora con carga de tinta continua'},
//     {id:9, catid:3 ,nombre: "Cuchillo de caza", precio:3460, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/51PG5zrNMBL._AC_SX466_.jpg", descripcion: 'Perfeto para depostar animales'},
//     {id:10, catid:3 ,nombre: "Linterna Tactita", precio:7840, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_699374-MLA31062520034_062019-O.jpg", descripcion: 'Antigolpes, resistente al agua'},
//     {id:11, catid:1 ,nombre:"Auriculares Bluetoth", precio:3880, imagenUrl:"https://dxelectronica.com.ar/wp-content/uploads/2020/02/FotoProducto15.jpg", descripcion: 'Perfectos para que tu gato no te coma los cables'},
//     {id:12, catid:4 ,nombre:"Lampara de escritorio", precio: 2356, imagenUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/278/708/products/screenshot_81-7c79f7b13c3dc3253616080632716729-1024-1024.jpg", descripcion: 'Con tres intensidades de luz'},
//     {id:13, catid:2 ,nombre: "Red Arrow", precio:17000, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/71tVF9xyWBL._AC_SL1500_.jpg", descripcion: 'Figura unica, lo vendo porque tengo otro'},
//     {id:14, catid:2 ,nombre: "Comic de Superman", precio:58692, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/51ycXnScQ9L._SX319_BO1,204,203,200_.jpg", descripcion: 'El primer comic donde aparece Superman, certificado'},
//     {id:15, catid:4 ,nombre:"Biblioteca de Madera", precio:2582, imagenUrl:"http://www.blocksrl.com.ar/wp-content/uploads/2015/10/Biblioteca-con-6-estantes1.jpg", descripcion: 'Madera muy resistente'},
//     {id:16, catid:4 ,nombre:"Zapatero", precio: 5000, imagenUrl:"https://www.platinumshop.com.ar/250-thickbox_default/zapatero-3-cajones-cedro.jpg", descripcion: 'Guarda 10 pares de zapatos por nivel, 3 niveles'},
//     {id:17, catid:3 ,nombre: "Mochila de Camping", precio:800, imagenUrl:"https://www.doiteargentina.com.ar/wp-content/uploads/2017/05/doite-mochila-all-terrain-los-andes-50-verde-musgo-01.jpg", descripcion: 'Se vende barato por muchisimo uso'}
    
//     ],
//     all: function() {
//         return this.items;
//     },
//     get: function(id) {
//         return this.items.find(i => i.id === id);
//     },
//     get2: function(catid) {
//         return this.items.filter(i => i.catid === catid);
//     }
    
//     }
    
//     export default ApiItems; 



//     items:[
//     {id:1, catid:3 ,nombre: "Bicicleta Usada", precio:10000, imagenUrl:"https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg", descripcion: 'Descripcion1'},
//     {id:2, catid:2 ,nombre:"Pennywise", precio:15000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_652236-MLA43334548863_092020-O.jpg", descripcion: 'Descripcion1'},
//     {id:3, catid:4 ,nombre:"Compresor de Aerografo", precio: 5000, imagenUrl:"https://www.artisticacordoba.com.ar/5315-home_default/mini-compresor-para-aerografos-con-manguera-y-regulador.jpg", descripcion: 'Descripcion1'},
//     {id:4, catid:4 ,nombre: "Cajon de madera", precio:1000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_703446-MLA31136086024_062019-W.jpg", descripcion: 'Descripcion1'},
//     {id:5, catid:4 ,nombre: "Heladera Familiar", precio:30000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_889745-MLA32557339159_102019-O.jpg", descripcion: 'Heladera con Freezer marca Gafa en buen estado, bajo consumo'},
//     {id:6, catid:1 ,nombre: "Notebook HP", precio:25000, imagenUrl:"https://www.computershopping.com.ar/Images/Productos/HP-240-G7_Foto0.jpg", descripcion: ' Corei3, 8 gigas de RAM, disco SATA 1 TB, windows 10'},
//     {id:7, catid:1 ,nombre:"Celular Motorola", precio:32600, imagenUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/652/596/products/1121-cf8ae440ee291bbf4616069311474825-640-0.jpg", descripcion: 'Motorola G7 usado con gorila glass perfectas condiciones'},
//     {id:8, catid:1 ,nombre:"Impresora EPSON", precio: 17000, imagenUrl:"https://www.epson.es/files/assets/converted/1500m-1500m/2/3/0/0/23002-productpicture-hires-en-et2710_l3150_hero.png.png", descripcion: 'Impresora con carga de tinta continua'},
//     {id:9, catid:3 ,nombre: "Cuchillo de caza", precio:3460, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/51PG5zrNMBL._AC_SX466_.jpg", descripcion: 'Perfeto para depostar animales'},
//     {id:10, catid:3 ,nombre: "Linterna Tactita", precio:7840, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_699374-MLA31062520034_062019-O.jpg", descripcion: 'Antigolpes, resistente al agua'},
//     {id:11, catid:1 ,nombre:"Auriculares Bluetoth", precio:3880, imagenUrl:"https://dxelectronica.com.ar/wp-content/uploads/2020/02/FotoProducto15.jpg", descripcion: 'Perfectos para que tu gato no te coma los cables'},
//     {id:12, catid:4 ,nombre:"Lampara de escritorio", precio: 2356, imagenUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/278/708/products/screenshot_81-7c79f7b13c3dc3253616080632716729-1024-1024.jpg", descripcion: 'Con tres intensidades de luz'},
//     {id:13, catid:2 ,nombre: "Red Arrow", precio:17000, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/71tVF9xyWBL._AC_SL1500_.jpg", descripcion: 'Figura unica, lo vendo porque tengo otro'},
//     {id:14, catid:2 ,nombre: "Comic de Superman", precio:58692, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/51ycXnScQ9L._SX319_BO1,204,203,200_.jpg", descripcion: 'El primer comic donde aparece Superman, certificado'},
//     {id:15, catid:4 ,nombre:"Biblioteca de Madera", precio:2582, imagenUrl:"http://www.blocksrl.com.ar/wp-content/uploads/2015/10/Biblioteca-con-6-estantes1.jpg", descripcion: 'Madera muy resistente'},
//     {id:16, catid:4 ,nombre:"Zapatero", precio: 5000, imagenUrl:"https://www.platinumshop.com.ar/250-thickbox_default/zapatero-3-cajones-cedro.jpg", descripcion: 'Guarda 10 pares de zapatos por nivel, 3 niveles'},
//     {id:17, catid:3 ,nombre: "Mochila de Camping", precio:800, imagenUrl:"https://www.doiteargentina.com.ar/wp-content/uploads/2017/05/doite-mochila-all-terrain-los-andes-50-verde-musgo-01.jpg", descripcion: 'Se vende barato por muchisimo uso'}
    
//     ],
//     all: function() {
//         return this.items;
//     },
//     get: function(id) {
//         return this.items.find(i => i.id === id);
//     },
//     get2: function(catid) {
//         return this.items.filter(i => i.catid === catid);
//     }
    
//     }
    
//     export default ApiItems; 


export const articulos=[
    {id:1, catid:3 ,nombre: "Bicicleta Usada", precio:10000, imagenUrl:"https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg", descripcion: 'Descripcion1'},
    {id:2, catid:2 ,nombre:"Pennywise", precio:15000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_652236-MLA43334548863_092020-O.jpg", descripcion: 'Descripcion1'},
    {id:3, catid:4 ,nombre:"Compresor de Aerografo", precio: 5000, imagenUrl:"https://www.artisticacordoba.com.ar/5315-home_default/mini-compresor-para-aerografos-con-manguera-y-regulador.jpg", descripcion: 'Descripcion1'},
    {id:4, catid:4 ,nombre: "Cajon de madera", precio:1000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_703446-MLA31136086024_062019-W.jpg", descripcion: 'Descripcion1'},
    {id:5, catid:4 ,nombre: "Heladera Familiar", precio:30000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_889745-MLA32557339159_102019-O.jpg", descripcion: 'Heladera con Freezer marca Gafa en buen estado, bajo consumo'},
    {id:6, catid:1 ,nombre: "Notebook HP", precio:25000, imagenUrl:"https://www.computershopping.com.ar/Images/Productos/HP-240-G7_Foto0.jpg", descripcion: ' Corei3, 8 gigas de RAM, disco SATA 1 TB, windows 10'},
    {id:7, catid:1 ,nombre:"Celular Motorola", precio:32600, imagenUrl:"http://d3ugyf2ht6aenh.cloudfront.net/stores/652/596/products/1121-cf8ae440ee291bbf4616069311474825-640-0.jpg", descripcion: 'Motorola G7 usado con gorila glass perfectas condiciones'},
    {id:8, catid:1 ,nombre:"Impresora EPSON", precio: 17000, imagenUrl:"https://www.epson.es/files/assets/converted/1500m-1500m/2/3/0/0/23002-productpicture-hires-en-et2710_l3150_hero.png.png", descripcion: 'Impresora con carga de tinta continua'},
    {id:9, catid:3 ,nombre: "Cuchillo de caza", precio:3460, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/51PG5zrNMBL._AC_SX466_.jpg", descripcion: 'Perfeto para depostar animales'},
    {id:10, catid:3 ,nombre: "Linterna Tactita", precio:7840, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_699374-MLA31062520034_062019-O.jpg", descripcion: 'Antigolpes, resistente al agua'},
    {id:11, catid:1 ,nombre:"Auriculares Bluetoth", precio:3880, imagenUrl:"https://dxelectronica.com.ar/wp-content/uploads/2020/02/FotoProducto15.jpg", descripcion: 'Perfectos para que tu gato no te coma los cables'},
    {id:12, catid:4 ,nombre:"Lampara de escritorio", precio: 2356, imagenUrl:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/278/708/products/screenshot_81-7c79f7b13c3dc3253616080632716729-1024-1024.jpg", descripcion: 'Con tres intensidades de luz'},
    {id:13, catid:2 ,nombre: "Red Arrow", precio:17000, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/71tVF9xyWBL._AC_SL1500_.jpg", descripcion: 'Figura unica, lo vendo porque tengo otro'},
    {id:14, catid:2 ,nombre: "Comic de Superman", precio:58692, imagenUrl:"https://images-na.ssl-images-amazon.com/images/I/51ycXnScQ9L._SX319_BO1,204,203,200_.jpg", descripcion: 'El primer comic donde aparece Superman, certificado'},
    {id:15, catid:4 ,nombre:"Biblioteca de Madera", precio:2582, imagenUrl:"http://www.blocksrl.com.ar/wp-content/uploads/2015/10/Biblioteca-con-6-estantes1.jpg", descripcion: 'Madera muy resistente'},
    {id:16, catid:4 ,nombre:"Zapatero", precio: 5000, imagenUrl:"https://www.platinumshop.com.ar/250-thickbox_default/zapatero-3-cajones-cedro.jpg", descripcion: 'Guarda 10 pares de zapatos por nivel, 3 niveles'},
    {id:17, catid:3 ,nombre: "Mochila de Camping", precio:800, imagenUrl:"https://www.doiteargentina.com.ar/wp-content/uploads/2017/05/doite-mochila-all-terrain-los-andes-50-verde-musgo-01.jpg", descripcion: 'Se vende barato por muchisimo uso'}
]