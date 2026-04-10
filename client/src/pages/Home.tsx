import { useEffect, useState } from 'react';
import '../styles/home.css';

/**
 * Warm Storytelling Design Philosophy
 * - Paleta de cores quentes (coral, laranja, amarelo)
 * - Tipografia expressiva (Merriweather para títulos, Open Sans para corpo)
 * - Layout alternado entre imagens full-width e seções de texto com fundo colorido
 * - Animações suaves que guiam o usuário pela jornada emocional
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="love-declaration">
      {/* Seção de Introdução */}
      <section className="intro-section">
        <div className="intro-content fade-in">
          <h1>Uma Declaração de Amor</h1>
          <p className="intro-subtitle">Para alguém muito especial</p>
        </div>
      </section>

      {/* Foto 1 - Casal */}
      <section className="photo-section photo-1">
        <img src="/images/casal1.webp" alt="Casal momento especial" className="full-width-photo" />
      </section>

      {/* Seção de Texto 1 - Fundo Coral */}
      <section className="text-section coral-bg">
        <div className="text-content">
          <h2>Você é meu porto seguro</h2>
          <p>
            Nos dias em que o mundo parece pesado demais, sua presença é o que me faz respirar fundo e seguir em frente. Você é aquele abraço que faz tudo fazer sentido novamente.
          </p>
        </div>
      </section>

      {/* Foto 2 - Casal */}
      <section className="photo-section photo-2">
        <img src="/images/casal2.webp" alt="Casal momento especial" className="full-width-photo" />
      </section>

      {/* Seção de Texto 2 - Fundo Laranja */}
      <section className="text-section orange-bg">
        <div className="text-content">
          <h2>Você é minha força</h2>
          <p>
            Quando você está ao meu lado, sinto que posso encarar qualquer oceano que a vida me apresente. Sua coragem me inspira, seu sorriso me acalma, e seu carinho me completa.
          </p>
        </div>
      </section>

      {/* Foto 3 - Casal */}
      <section className="photo-section photo-3">
        <img src="/images/casal3.webp" alt="Casal momento especial" className="full-width-photo" />
      </section>

      {/* Seção de Texto 3 - Fundo Amarelo */}
      <section className="text-section yellow-bg">
        <div className="text-content">
          <h2>Você é meu lar</h2>
          <p>
            Não importa onde estejamos, quando estou com você, sinto que estou em casa. Você é o lugar onde meu coração encontra paz, onde minhas preocupações desaparecem, e onde meu amor floresce.
          </p>
        </div>
      </section>

      {/* Seção Final - Gatinho e Mensagem */}
      <section className="final-section">
        <div className="shark-cat-container">
          <img src="/images/gatinho.jpg" alt="Gatinho de tubarão" className="shark-cat-image" />
        </div>
        <div className="final-message">
          <h2>Um presente especial</h2>
          <div className="message-text">
            <p>
              Escolhi esse gatinho de tubarão para te dar porque ele me lembrou muito a gente. Por fora, ele tenta parecer um tubarão bravo e destemido para encarar o mundo, mas por dentro, é apenas um gatinho fofo que só quer carinho.
            </p>
            <p>
              Que ele te lembre que, nos dias em que você precisar ser forte e enfrentar os oceanos da vida, eu estarei aqui para ser o seu porto seguro. E nos dias em que você só quiser ser o gatinho, meu colo vai estar sempre pronto.
            </p>
            <p className="love-message">
              Te amo! ❤️
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
