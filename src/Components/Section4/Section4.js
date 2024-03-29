import React from 'react'
import style from "./section4.module.css";

const Section4 = () => {
  return (
    <section className={style.section}>
        <p className={style.title}>ИНДИВИДУАЛЬНЫЙ ПОДХОД</p>
        <p className={style.text}>В центре нашей философии лежит индивидуальность. Мы приглашаем вас в мир гибкого и индивидуального партнерства. Наша компания с готовностью предоставляет уникальные условия сотрудничества для предприятий малого и среднего бизнеса, а также для сферы HoReCa. Мы тщательно учитываем уникальные потребности каждого клиента и создаем наилучшие возможности сотрудничества, гарантируя вам доступ к продукту высочайшего качества</p>
        <div className={style.btn}>
            <a href="">Связаться с нами</a>
        </div>
    </section>
  )
}

export  {Section4}
