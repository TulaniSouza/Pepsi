import lata from "../assets/lataazul.png";
import lata2 from "../assets/latabranca.png";
import lata3 from "../assets/latapreta.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { useState, useEffect } from "react";
import s from "./Main.module.scss";

const Main = () => {
    const [cor, setCor] = useState("blue");
    const [lataAtual, setLataAtual] = useState({src: lata, alt: "lata azul da pepsi" });

    const mudarCorELata = (cor, lata, alt) => {
        setCor(cor);
        setLataAtual({ src: lata, alt });
    };

    useEffect(() => {
        document.body.style.backgroundColor = cor;
    }, [cor]);

    return (
        <main className={s.container}>
            <section className={s.box_text}>
                <h2>THAT'S WHAT</h2>
                <h1> I LIKE</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente aspernatur possimus odio accusantium inventore. Vel perferendis molestias a unde eum dolorem officia doloremque! Doloribus asperiores quas vitae quisquam libero.
                </p>
                <button>VIEW ALL PRODUCTS</button>
            </section>

            <section className={s.box_latas}>
                <button
                    onClick={() => mudarCorELata("blue", lata, "lata azul da pepsi")}
                    aria-label="lata azul da pepsi"
                >
                    <img src={lata} alt="lata azul da pepsi" />
                </button>
                <button
                    onClick={() => mudarCorELata("red", lata2, "lata branca diet da pepsi")}
                    aria-label="lata branca diet da pepsi"
                >
                    <img src={lata2} alt="lata branca diet da pepsi" />
                </button>
                <button
                    onClick={() => mudarCorELata("rgb(31,30,31)", lata3, "lata preta zero açúcar da pepsi")}
                    aria-label="lata preta zero açúcar da pepsi"
                >
                    <img src={lata3} alt="lata preta zero açúcar da pepsi" />
                </button>
            </section>

            <section className={s.box}>
                <img src={lataAtual.src} alt={lataAtual.alt} />
            </section>

            <aside className={s.social}>
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
            </aside>
        </main>
    );
};

export default Main;
