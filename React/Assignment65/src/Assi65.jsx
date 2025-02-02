import NavBtn from "./NavBtn";
import FestivalInfo from "./FestivalInfo";
import { useState } from "react";

function Assi65() {

    let festivalList = [
        {
          name: "Diwali",
          image1: "diwali1.jpg",
          image2: "diwali2.jpg",
          image3: "diwali3.jpg",
          image4: "diwali4.jpg",
          info: "Diwali, also known as Deepavali is the Festival of Lights. It is one of the most important festivals in India. It is celebrated by millions of people, marking the victory of light over darkness and good over evil. Diwali usually falls in October or November and lasts for five days. The festival starts with Dhanteras, where people buy gold and silver. The main day of Diwali is marked by lighting oil lamps, or diyas, and decorating homes with colourful rangoli. Families gather to pray to Goddess Lakshmi for wealth and prosperity. People exchange sweets and gifts, creating a joyful atmosphere. Fireworks light up the night sky, adding to the celebration. Diwali is also a time for forgiveness and strengthening relationships. It encourages people to let go of past grievances and start anew. Overall, Diwali brings happiness, unity, and hope for a brighter future.",
        },
        {
          name: "Ganpati Festival",
          image1: "ganpati1.jpg",
          image2: "ganpati2.jpg",
          image3: "ganpati3.jpg",
          image4: "ganpati4.jpg",
          info: "Ganesh Chaturthi is a Hindu festival which holds utmost importance in the religion. This festival is celebrated following the Hindu Mythology which says that Ganesh Chaturthi is the birthday of the Lord Ganesha. Hindus refer to Lord Ganesha as the remover of all obstacles. People believe that Lord Ganesha comes every year with prosperity and success. Furthermore, they welcome Lord Ganesha in their homes with this festival with the belief that he will remove all their sufferings. Ganesh Chaturthi sparks joy all over the country and unties people with celebrations. The specialty of Ganesha Chaturthi  is celebrated for a whole 11 days. It begins on the Chaturthi when people install the statue of Lord Ganesha in their homes and temples. This festival ends on Anant Chaturdashi with Ganesh Visarjan. The devotees of the Lord Ganesha offer their prayers to God. They sing devotional songs for him and recited various mantras in his praise. They perform aartis in favour of the lord and seek his blessings on them.",
        },
        {
          name: "Holi",
          image1: "holi1.jpg",
          image2: "holi2.jpg",
          image3: "holi3.jpg",
          image4: "holi4.jpg",
          info: "Holi is about celebrating happiness with friends and family. People forget their troubles and indulge in this festival to celebrate brotherhood. In other words, we forget our enmities and get into the festival spirit. Holi is called the festival of colours because people play with colours and apply them to each other’s faces to get coloured in the essence of the festival. History of Holi The Hindu religion believes there was a devil king named Hiranyakashyap long ago. He had a son named Prahlad and a sister called Holika. It is believed that the devil king had blessings of Lord Brahma. This blessing meant no man, animal or weapon could kill him. This blessing turned into a curse for him as he became very arrogant. He ordered his kingdom to worship him instead of God, not sparing his own son.Following this, all the people began worshipping him except for his son, Prahlad. Prahlad refused to worship his father instead of God as he was a true believer of Lord Vishnu. Upon seeing his disobedience, the devil king planned with his sister to kill Prahlad. He made her sit in the fire with his son on the lap, where Holika got burned and Prahlad came out safe. This indicated he was protected by his Lord because of his devotion. Thus, people started celebrating Holi as the victory of good over evil.",
        },
        {
          name: "Dussehra",
          image1: "dussehra1.jpg",
          image2: "dussehra2.jpg",
          image3: "dussehra3.jpg",
          image4: "dussehra4.jpg",
          info: "Dussehra is a festival celebrated in the Hindu religion. It is one of the most important festivals in India. In addition, it is also one of the longest ones. People celebrated Dussehra with great enthusiasm and love, throughout the country. It is time for rejoicing for everyone. The students get ten-day-long holidays from their schools and colleges to thoroughly enjoy this festival. Dussehra is also known as Vijayadashami in some regions of India. If we set aside the regional differences, the main events of this festival have one motto i.e. the victory of good over evil. People all over India celebrate Dussehra with immense enthusiasm, pomp, and show. The different cultures do not affect the celebrations of the festival. The spirit and zeal remain the same throughout the festival. Furthermore, Dussehra marks Lord Rama’s victory over Demon Ravana. Thus, people enact the battle that took place between them for ten long days. This dramatic form is called Ram-Leela. People in North India act out the Ram-Leela by wearing masks and through various dance forms",
        },
      ];

      let [selectedIndex,setSelectedIndex]=useState(0);

      function handleBtnClick(selectedIndex){
        console.log(selectedIndex);
        setSelectedIndex(selectedIndex);
        
      }
    
    return(
        <>
          <div className="text-end p-4 bg-secondary">{festivalList.map((e,i)=>(
            <NavBtn onClickBtn={handleBtnClick} festivalName={e.name} key={i} index={i} />  
            ))}
          </div>
          <div className="myBorder"></div>

            <FestivalInfo festival={festivalList[selectedIndex]} />

        </>
    )

}

export default Assi65;