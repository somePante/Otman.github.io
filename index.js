
const slider = document.getElementById("slider");
const año = document.getElementById("año");
const texto = document.getElementById("texto");
const otman = document.getElementById("otman");


const datosPorAño = {
  2005: {
    texto: "Un ser humano delicado, destinado a ser el Guardián del Alba. Nace, dándole luz a la noche.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192059638386768/IMG_20251109_220524.jpg?ex=691258e8&is=69110768&hm=b125b805af667e47284fd66bc5191f4855a5761c13833a247ec0288ee35a5f10&=&format=webp&width=519&height=693"
  },
  2006: {
    texto: "El destino de programador se traza en su piel negra como el carbón.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192951527903433/IMG-20251109-WA0072.jpg?ex=691259bd&is=6911083d&hm=854cf7f1ae97734b4626b34d72d510d51f75440bab46fede5f501379504d8353&=&format=webp&width=519&height=693"
  },
  2007: {
    texto: "El autismo empezó a ser evidente.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192951091691600/IMG-20251109-WA0062.jpg?ex=691259bd&is=6911083d&hm=f34117a97275dae455b241547108d558ad606a8113ef7a64755d9fee24838fcd&=&format=webp&width=924&height=693"
  },
  2008: {
    texto: "Estaba a un año de conocer a alguien que robaría su paz, con problemas auditivos y pañal permanente. El Guadrdián no huyó y se atrevió a hacerle frente, pero no sería suficiente.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192682849177762/IMG-20251109-WA0088.jpg?ex=6912597d&is=691107fd&hm=b65f5870e24d8b0468bab6e001e9a277360329ea2f20b404a779863a5c7ceb8a&=&format=webp&width=1231&height=693"
  },
  2009: {
    texto: "Otman deja de ser un niño, ahora es un hombre!! Pues su hermana debe ser cuidada por alguien, y ese alguien era él.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192950755889214/IMG-20251109-WA0074.jpg?ex=691259bd&is=6911083d&hm=0358bdc732cc590c3d8723fdb1d1340d49881d4ab7e8156e7cedbbea7c283666&=&format=webp&width=519&height=693"
  },
  2010: {
    texto: "Llega a primaria, empieza a forjar el espíritu heychmanil.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192950416281810/IMG-20251109-WA0069.jpg?ex=691259bd&is=6911083d&hm=a3e9c05f4567f2a9dd178d7cae8b58fcc37b8d5cd24fbe86e2fb361fc744ecf4&=&format=webp&width=519&height=693"
  },
  2011: {
    texto: "Otman ya no era Otman, había perdido su dignidad pues `le había dejado la novia`(solo Otman entenderá la referencia).",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192950072475813/IMG-20251109-WA0075.jpg?ex=691259bd&is=6911083d&hm=2e1a2df8961ae7b1f1f324251da2150c0951e5d0b388f535d8f76487670373a9&=&format=webp&width=924&height=693"
  },
  2012: {
    texto: "El mejor año de su vida, su hermano responsable de sus mejores momentos había nacido.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192949757644941/IMG-20251109-WA0002.jpg?ex=691259bc&is=6911083c&hm=dd9c6af8fcb85a00373ef90ded7c3f642d5cac6c5aaf78da8d48b3179958696c&=&format=webp&width=365&height=691"
  },
  2013: {
    texto: "Otman empezó a ser un gran hermano, ya hacía cosas de ellos. Como ir a la habitación de su hermana, empujarla y molestarla, reírse en su cara y dejar la puerta abierta. Que bonito.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192949061648405/IMG-20251109-WA0056.jpg?ex=691259bc&is=6911083c&hm=2a4b7d87dee1300d82182bedd76eaa615e22baa519bec71c8ad556f15d622c34&=&format=webp&width=519&height=691"
  },
  2014: {
    texto: "Cambió de ambiente, hizo amigos sorprendentemente.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192948709069042/IMG-20251109-WA0039.jpg?ex=691259bc&is=6911083c&hm=0590e5185a768f8e3222c87ed5d44d33598bae2b15aa39b255d310c75e1c3409&=&format=webp&width=519&height=693"
  },
  2015: {
    texto: "Increíble, habían pasado 10 años desde su nacimiento, su primera década completada.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192685604831232/IMG-20251109-WA0011.jpg?ex=6912597d&is=691107fd&hm=1a342590a04fad212b40fe256c484f1a9aea9ac24946f17870177c9d06b8f115&=&format=webp&width=519&height=693"
  },
  2016: {
    texto: "Se hacía más mayor...",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192685160108032/IMG-20251109-WA0015.jpg?ex=6912597d&is=691107fd&hm=9360a0aec15446906031149cdc08b7cc30e7fdace4361426ff98d5e761755b31&=&format=webp&width=519&height=693"
  },
  2017: {
    texto: "Empieza a llevar a sus hermanos al colegio, el equivalente a torturarlos. Otman se empezó a interesar por la tecnología y su época otaku empezó. Y también se interesó por la pelea, era un adolescente que no toleraba el racismo y se peleó por primera vez cuando tal palabra `racismo` fue usada contra él. Su oponente no vivió para contarlo.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192684837277906/IMG-20251109-WA0019.jpg?ex=6912597d&is=691107fd&hm=ffe21a31075544909fd51b461359820ad9b132d09193b06dcfd08fc28f9e2cac&=&format=webp&width=519&height=693"
  },
  2018: {
    texto: "Llegan a su vida Mimi y John. ",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192684510117938/IMG-20251109-WA0054.jpg?ex=6912597d&is=691107fd&hm=5e3ad8e87bd368c85b97a7e13c3a9c51bb7a877db72ead78c61f91a1a2174268&=&format=webp&width=519&height=693"
  },
  2019: {
    texto: "El mejor año de su vida, los 14, y libertad total.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192683759341679/IMG-20251109-WA0067.jpg?ex=6912597d&is=691107fd&hm=15fe129c2973cf82f536351ca847232256d3b8fa6b41f9aa9bb3940a8855f312&=&format=webp&width=435&height=486"
  },
  2020: {
    texto: "Cuarentena, nunca había estado tanto tiempo con sus hermanos y empezó a interesarse por la informática. Otman dejó de pelearse y actuar como un MDLR para darse cuenta de que su futuro estaba muy cerca, demasiado incluso.",
    imagen: "https://cdn.discordapp.com/attachments/1408066503839842464/1408113213278781552/IMG_0151.png?ex=69115e5f&is=69100cdf&hm=12c88993fc76550a51208a76f12588c444e8b7b80d3ad0fc211f6c8eb73d5673"
  },
  2021: {
    texto: "Bachillerato empezó, Otman ya tenía su futuro pensado y ya no actuaba con tanta prudencia. La relación con su hermano mejoró. Más anime...",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192683172007976/IMG-20251109-WA0090.jpg?ex=6912597d&is=691107fd&hm=dc6b33262476349fc02c61a6cfa9d6ce259bbb712089376d6d52fbd21d67fefe&=&format=webp&width=519&height=693"
  },
  2022: {
    texto: "Literalmente, estudiar estudiar y estudiar.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192683478319104/IMG-20251109-WA0045.jpg?ex=6912597d&is=691107fd&hm=e74799c6ad97d5a0be7837feab11a5941d3b29573bb9df2394aa3b973728cbcf&=&format=webp&width=389&height=693"
  },
  2023: {
    texto: "Otman se gradua y logra enorgullecer a su padre, Otman consiguió lo que había soñado, ahora por fin estudiaria ingeniería informática después de tanto esfuerzo y dedicación.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192685919408158/IMG-20251109-WA0065.jpg?ex=6912597e&is=691107fe&hm=2f735eb82db60d3d22a854978b4b939dae2c6833a11fae1e5acfb37a6cbecd92&=&format=webp&width=519&height=693"
  },
  2024: {
    texto: "La vida de adulto tan soñada de Otman no fue más que un infierno, pero detrás de su infierno estaba el cielo de su hermano, al que le regaló su móvil.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192684166058035/IMG-20251109-WA0071.jpg?ex=6912597d&is=691107fd&hm=4446325fc4ee7cff3c9920acd310a2b918d5525f81423f1f5fd2002ed7f820b2&=&format=webp&width=519&height=693"
  },
  2025: {
    texto: "El Guardián del Alba encontró su verdadera esencia que se hundía entre las tinieblas, eso asíc como cierra las puertas a su segunda década y abre las de la tercera. Esto lo hace asumiendo el peso del tiempo: en los próximos 10 años deberá casarse, comprar un coche, comprar una casa, tener tres hijos (Leyla, Ahmed y Saad), tener un trabajo estable, fundar un negocio millonario, comprar coche a cada uno de sus hermanos... Si no logra hacerlo, su hermano le otorgará su ayuda y su hermana el dinero.",
    imagen: "https://media.discordapp.net/attachments/1408066503839842464/1437192949443203184/IMG-20251109-WA0004.jpg?ex=691259bc&is=6911083c&hm=42f4c6e20da16b35b525ea7df3ec1c3342035cb5a4c146ea4914d6eb7b2148ba&=&format=webp&width=389&height=693"
  },
};

function actualizar() {
  const valor = slider.value;
  año.textContent = valor;

  if (datosPorAño[valor]) {
    texto.textContent = datosPorAño[valor].texto;
    otman.src = datosPorAño[valor].imagen;
  } else {
    texto.textContent = "Sin información para este año";
    otman.src = "";
  }
}


actualizar();
