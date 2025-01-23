import ProductInfo from "./ProductInfo";

function CardList() {
    let productList = [
        {
          name: "Kismis (Raisin)",
          image: "Kismis (Raisin).jpg",
          mrp: 400,
          discount: 10,
          inStock: true,
        },
        {
          name: "Kaju (Cashew)",
          image: "Kaju (Cashew).jpg",
          mrp: 1000.0,
          discount: 5,
          inStock: true,
        },
        {
          name: "Dry Anjeer ( Figs)",
          image: "Anjeer (Dry Fig).jpg",
          mrp: 1400,
          discount: 0,
          inStock: true,
        },
        {
          name: "Akhrot (Walnut) (Without Shell)",
          image: "Akhrot (Walnut) ws.jpg",
          mrp: 600,
          discount: 7,
          inStock: false,
        },
        {
          name: "Plain Pista (Pistachio)",
          image: "Pista.jpg",
          mrp: 3200,
          discount: 0,
          inStock: true,
        },
        {
          name: "Makhana (Lotus Seed)",
          image: "Makhana (Lotus Seed).jpg",
          mrp: 450,
          discount: 10,
          inStock: true,
        },
        {
          name: "Chiranji (Cudpahnut)",
          image: "Chiranji (Cudpahnut).jpg",
          mrp: 1200,
          discount: 25,
          inStock: true,
        },
        {
          name: "Apricot (Khubani)",
          image: "Jardalu (Apricot).jpg",
          mrp: 780,
          discount: 5,
          inStock: true,
        },
        {
          name: "Manukka (Prunes)",
          image: "Manukka (Prunes).jpg",
          mrp: 500,
          discount: 10.0,
          inStock: false,
        },
        {
          name: "Chilgoja (Pine Nut)",
          image: "Chilgoja (Pine Nut).jpg",
          mrp: 1050.0,
          discount: 10.0,
          inStock: true,
        },
        {
          name: "Magaj (Watermelon Seed)",
          image: "Tarbuj Beej (Watermelon Seed).jpg",
          mrp: 880.0,
          discount: 0,
          inStock: true,
        },
        {
          name: "Kaddu Beej (Pumpkin Seed)",
          image: "Kaddu Beej (Pumpkin Seed).jpg",
          mrp: 750.0,
          discount: 10.0,
          inStock: true,
        },
        {
          name: "Kharik (Chuwara)",
          image: "Kharik (Dry Dates).jpg",
          mrp: 380,
          discount: 0,
          inStock: true,
        },
        {
          name: "Khajoor (Dates)",
          image: "Khajoor (Dates).jpg",
          mrp: 175,
          discount: 0,
          inStock: true,
        },
        {
          name: "Badam (Almond)",
          image: "Badam (Almond).jpg",
          mrp: 800,
          discount: 5,
          inStock: true,
        },
        {
          name: "Akhrote American",
          image: "Akrod.jpg",
          mrp: 860,
          discount: 10,
          inStock: false,
        },
        {
          name: "Akhrot (Chilli)",
          image: "Akrod.jpg",
          mrp: 700,
          discount: 10,
          inStock: false,
        },
        {
          name: "Raisins (Black) - manuka",
          image: "Manukka (Prunes).jpg",
          mrp: 600,
          discount: 5,
          inStock: true,
        },
        {
          name: "Raisins (Golden)",
          image: "Kismis (Raisin).jpg",
          mrp: 420,
          discount: 5,
          inStock: true,
        },
        {
          name: "Salted Pista (Pistachio)",
          image: "Salted Pista.jpg",
          mrp: 1200,
          discount: 0,
          inStock: true,
        },
        {
          name: "Salted Kaju (Cashew)",
          image: "Salted Cashew.jpg",
          mrp: 1200,
          discount: 0,
          inStock: true,
        },
        {
          name: "Masala Kaju (Cashew)",
          image: "Masala Cashew.jpg",
          mrp: 1250,
          discount: 0,
          inStock: true,
        },
        {
          name: "Badam Mamra (Almond)",
          image: "Mamra Badam.jpg",
          mrp: 3200,
          discount: 0,
          inStock: true,
        },
        {
          name: "Khajoor Kimia (Dates)",
          image: "Khajoor (Dates).jpg",
          mrp: 200,
          discount: 20.0,
          inStock: true,
        },
      ];
      
      return(

        <div className="row" >
            {productList.map((e,i)=>(
            <ProductInfo card={e} key={i} />
            ))}
        </div>

      )
}

export default CardList;