import { observer } from "mobx-react-lite";
import React from "react";
import images from "../../../../store/images";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import Image from "../../../common/image/Image";
import InfoContainer from "../../../common/infoContainer/InfoContainer";
import NewsCardContainer from "../../../ui/newsCardContainer/NewsCardContainer";

const InfoPage = observer(() => {
  return (
    <div
      style={{ fontSize: toggleFontSize(1) }}
      className={`infopage-main ${toggleClassName(
        "infopage-main ",
        "infopage-white",
        "infopage-black",
        "infopage-contrast"
      )}`}
    >
      <InfoContainer
        title="Новости университета"
        newsTitle="Заголовок новости"
        btnTitle="Все новости"
        image={
          <Image
            src="img/newsimg/corpus.jpg"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem
        facilis a iusto sunt et, reiciendis cumque cupiditate aspernatur,
        possimus velit nam, officia nihil! Corrupti sapiente pariatur aperiam
        hic dolore! Voluptatum aliquid sit dolor iste sunt veritatis omnis saepe
        eligendi magnam, autem laborum corporis tempora provident et obcaecati
        officia ipsa nobis asperiores inventore sint debitis repudiandae quas
        molestiae fugit. Eum? Ratione tempora ab vero et aspernatur recusandae
        aliquam repellendus sed maxime iste, neque quam. Voluptatum natus quos,
        similique neque voluptatem ipsa distinctio corrupti facilis doloribus
        dolor quasi hic voluptates magnam. A, ut quisquam. At non modi placeat
        aliquid eos deleniti sunt! Nihil repellat facere sit pariatur quasi.
        Consectetur natus itaque est nulla inventore. Vel minus quam quae
        ratione, alias omnis?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Odio quidem facilis a iusto sunt et, reiciendis cumque cupiditate
        aspernatur, possimus velit nam, officia nihil! Corrupti sapiente
        pariatur aperiam hic dolore! Voluptatum aliquid sit dolor iste sunt
        veritatis omnis saepe eligendi magnam, autem laborum corporis tempora
        provident et obcaecati officia ipsa nobis asperiores inventore sint
        debitis repudiandae quas molestiae fugit. Eum? Ratione tempora ab vero
        et aspernatur recusandae aliquam repellendus sed maxime iste, neque
        quam. Voluptatum natus quos, similique neque voluptatem ipsa distinctio
        corrupti facilis doloribus dolor quasi hic voluptates magnam. A, ut
        quisquam. At non modi placeat aliquid eos deleniti sunt! Nihil repellat
        facere sit pariatur quasi. Consectetur natus itaque est nulla inventore.
        Vel minus quam quae ratione, alias omnis?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Odio quidem facilis a iusto sunt et,
        reiciendis cumque cupiditate aspernatur, possimus velit nam, officia
        nihil! Corrupti sapiente pariatur aperiam hic dolore! Voluptatum aliquid
        sit dolor iste sunt veritatis omnis saepe eligendi magnam, autem laborum
        corporis tempora provident et obcaecati officia ipsa nobis asperiores
        inventore sint debitis repudiandae quas molestiae fugit. Eum? Ratione
        tempora ab vero et aspernatur recusandae aliquam repellendus sed maxime
        iste, neque quam. Voluptatum natus quos, similique neque voluptatem ipsa
        distinctio corrupti facilis doloribus dolor quasi hic voluptates magnam.
        A, ut quisquam. At non modi placeat aliquid eos deleniti sunt! Nihil
        repellat facere sit pariatur quasi. Consectetur natus itaque est nulla
        inventore. Vel minus quam quae ratione, alias omnis?
      </InfoContainer>
      {images.image !== "off" ? <NewsCardContainer /> : null}
    </div>
  );
});
export default InfoPage;
