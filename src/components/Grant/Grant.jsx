import React from "react";
import "./Grant.scss";
import { MdArrowForwardIos } from "react-icons/md";

function Grant() {
  return (
    <main>
      <section className="grant">
        <div className="container">
          <div className="grant__wrapper">
            <div className="grant__left">
              <div className="mainfs">
                <p className="title">Главная</p>
                <MdArrowForwardIos />
                <p className="subtitle">Гарантии</p>
              </div>
              <p className="inf">Гарантии</p>
            </div>
            <div className="grant__right">
              <p className="grant__title">
                Обмен и возврат по желанию покупателя
              </p>
              <p className="grant__desc">
                Все товары в магазине «NornLight» имеют гарантию. Она заявляется
                производителем и имеет определенный срок действия на различные
                группы товаров. Если ваше изделие вышло из строя в
                течение гарантийного срока вы можете обратиться к нам и получить
                бесплатный ремонт. Для этого нужно: Предоставить чек, накладную
                или сообщить почту или номер телефона, указанные при оформлении
                заказа. Привезти товар к нам на склад или отправить его
                транспортной компанией. После товар отправляется на экспертизу и
                ремонт. Если ремонт невозможен, мы обменяем изделие на
                аналогичное либо вернем деньги за покупку. Обращаем внимание,
                что «А-Свет» не является сервисным центром, а выполняет роль
                посредника между клиентом и поставщиком. Поэтому сроки
                проведения ремонта могут отличаться для товаров различных
                брендов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default React.memo(Grant) 