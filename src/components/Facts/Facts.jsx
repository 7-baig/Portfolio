import React from "react"
import pizzaEatingMan from "../../images/facts/pizza-eating-man.png"
import eye from "../../images/facts/eye.png"
import draw from "../../images/facts/draw.png"
import coffee from "../../images/facts/coffee.png"
import laptop from "../../images/facts/laptop.png"
import nature from "../../images/facts/nature.png"
import alien from "../../images/facts/alien.png"
import scifi from "../../images/facts/scifi.png"
import physics from "../../images/facts/physics.png"
import styles from "./Facts.module.scss"

const Facts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img
          src={pizzaEatingMan}
          alt="pizza-eating-man"
          className={styles.pizza}
        />
        <img src={eye} alt="eye" className={styles.eye} />
      </div>
      <div className={styles.rightContainer}>
        <h1>Random facts about me</h1>
        <div className={styles.fact}>
          <img src={draw} alt="pencil" />
          <p>I like to draw.</p>
        </div>
        <div className={styles.fact}>
          <img src={coffee} alt="coffee" />
          <p>I drink a lot of coffee.</p>
        </div>
        <div className={styles.fact}>
          <img src={laptop} alt="laptop" />
          <p>I love programming.</p>
        </div>
        <div className={styles.fact}>
          <img src={nature} alt="nature" />
          <p>I'm a fond of nature.</p>
        </div>
        <div className={styles.fact}>
          <img src={alien} alt="alien" />
          <p>
            I love to talk about the universe, atoms, aliens, magic, intellect
            and memories.
          </p>
        </div>
        <div className={styles.fact}>
          <img src={scifi} alt="scifi" />
          <p>I'm addicted to art {"&"} movies.</p>
        </div>
        <div className={styles.fact}>
          <img src={physics} alt="physics" />
          <p>I like physics.</p>
        </div>
      </div>
    </div>
  )
}

export default Facts
