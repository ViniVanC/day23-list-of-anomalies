import React from "react";
import "./Intro.scss";

export const Intro = () => {
  return (
    <section className="intro">
      <h1>Кожен дослідник має отримати відповіді на свої питання</h1>
      <p className="intro__text">
        Дивні речі, аномалії, не пояснені ніким феномени оточують нас всюди.
        Існують організації що спеціалізуються на захисті, досліджені,
        нейтралізації того що звичайна людина не хотіла б бачити у
        найстрашнішому сні.
      </p>
      <p className="intro__text">
        Я знайшов втрачений архів аномальних об'єктів та хочу відновити старий
        архів. Хто зна можливо це врятує життя якомусь досліднику.
      </p>
    </section>
  );
};