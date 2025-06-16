import React, { useState, useEffect } from 'react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const index = Math.round(scrollY / windowHeight);
    setCurrentSlide(index);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-y-auto h-screen snap-y snap-mandatory">
      {/* Slide 1 */}
      <section id="slide1" className="snap-start slide slide1 min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-600/50 bg-cover bg-center p-8">
        <h1 className="title text-white font-serif text-5xl md:text-6xl leading-tight mb-6">
          <span className="text-2xl md:text-3xl">РУССКИЙ КОД</span>
          <br />
          Алгоритм души
        </h1>
        <div className="logos flex gap-5 mb-8">
          <div className="logo bg-white/20 text-white rounded-md px-4 py-2 text-sm md:text-base">ПФКИ</div>
          <div className="logo bg-white/20 text-white rounded-md px-4 py-2 text-sm md:text-base">Китеж</div>
          <div className="logo bg-white/20 text-white rounded-md px-4 py-2 text-sm md:text-base">Мечта</div>
        </div>
        <p className="footer text-white text-sm md:text-base">Розанов Никита Олегович, Общество Китеж (организация-заявитель)</p>
        <a href="#slide2" className="nav text-white text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 2 */}
      <section id="slide2" className="snap-start slide slide2 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-80 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-4">Проблема</h2>
        <p className="subtitle italic text-lg md:text-xl text-gray-700 max-w-md mb-6">Технологии меняют мир, но нравственность ИИ остаётся неясной</p>
        <div className="graph flex gap-10 my-6">
          <div className="bar w-16 h-40 bg-gray-200 rounded overflow-hidden relative" data-perc="77">
            <span className="absolute bottom-0 left-0 w-full bg-blue-600" style={{ height: '77%' }}></span>
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 font-bold">77%</span>
          </div>
          <div className="bar w-16 h-40 bg-gray-200 rounded overflow-hidden relative" data-perc="85">
            <span className="absolute bottom-0 left-0 w-full bg-purple-600" style={{ height: '85%' }}></span>
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 font-bold">85%</span>
          </div>
        </div>
        <p className="footer text-gray-600 text-sm md:text-base">77% россиян за участие человека в этике ИИ (ВЦИОМ)<br />85% за единые этические стандарты</p>
        <a href="#slide3" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 3 */}
      <section id="slide3" className="snap-start slide slide3 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-4">Цель</h2>
        <p className="subtitle text-lg md:text-xl text-gray-700 max-w-lg mb-4 text-center">
          Осмыслить и очертить ценностную матрицу отечественного ИИ на основе традиционных духовно-нравственных ценностей
        </p>
        <p className="font-bold text-gray-800 mt-4">Через диалог культуры, философии, религии и технологий</p>
        <a href="#slide4" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 4 */}
      <section id="slide4" className="snap-start slide slide4 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-6">Концепция</h2>
        <ul className="list-none pl-6 space-y-3 text-left max-w-lg mx-auto">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">8 открытых дискуссий</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Перформативность</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Философия</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Междисциплинарность</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Видеокурс</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Интервью</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Философские комментарии</li>
        </ul>
        <a href="#slide5" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 5 */}
      <section id="slide5" className="snap-start slide slide5 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-6">Для кого проект</h2>
        <ul className="list-none pl-6 space-y-3 text-left max-w-lg mx-auto">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Разработчики ИИ — получат ориентиры</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Студенты ИТ — идейный трамплин</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Философы — междисциплинарный анализ</li>
        </ul>
        <a href="#slide6" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 6 */}
      <section id="slide6" className="snap-start slide slide6 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-6">Как реализуем</h2>
        <ul className="list-none pl-6 space-y-3 text-left max-w-lg mx-auto">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Дискуссии в РГГУ</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Медиапроизводство (съёмка, монтаж, курс)</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Социальная аналитика (опросы, измерения)</li>
        </ul>
        <a href="#slide7" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 7 */}
      <section id="slide7" className="snap-start slide slide7 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-6">Ценностная матрица</h2>
        <ul className="list-none pl-6 space-y-3 text-left max-w-lg mx-auto">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium"><b>Что это:</b> инструмент, соединяющий традиционные ценности с задачами ИИ</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium"><b>Как создаётся:</b> на основе дискуссий, интерпретаций, диалогов</li>
        </ul>
        <a href="#slide8" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 8 */}
      <section id="slide8" className="snap-start slide slide8 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-6">Результаты</h2>
        <ul className="list-none pl-6 space-y-3 text-left max-w-lg mx-auto">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">8 дискуссий</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">1 видеокурс</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Ценностная матрица</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Рост этической грамотности</li>
        </ul>
        <a href="#slide9" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 9 */}
      <section id="slide9" className="snap-start slide slide9 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-6">Значимость</h2>
        <ul className="list-none pl-6 space-y-3 text-left max-w-lg mx-auto">
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Укрепление гуманитарной составляющей технологий</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Осмысление идентичности в цифровую эпоху</li>
          <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-blue-600 font-medium">Вклад в устойчивое цифровое будущее</li>
        </ul>
        <a href="#slide10" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 10 */}
      <section id="slide10" className="snap-start slide slide10 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-4">Команда</h2>
        <p className="subtitle text-lg md:text-xl text-gray-700 max-w-md">Модераторы, философы, религиозные деятели, ИТ-специалисты</p>
        <a href="#slide11" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 11 */}
      <section id="slide11" className="snap-start slide slide11 min-h-screen flex flex-col justify-center items-center bg-white bg-opacity-85 bg-cover bg-center p-8">
        <h2 className="title text-gray-800 text-4xl md:text-5xl font-bold mb-4">Партнёры и цитаты</h2>
        <p className="subtitle italic text-lg md:text-xl text-gray-700 max-w-md mb-4">"Создаём цифровое будущее с человеческим лицом"</p>
        <a href="#slide12" className="nav text-gray-800 text-4xl absolute bottom-6 right-6">&#8595;</a>
      </section>

      {/* Slide 12 */}
      <section id="slide12" className="snap-start slide slide12 min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-600/50 bg-cover bg-center p-8 text-white">
        <h2 className="title text-white text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
        <p className="subtitle text-lg md:text-xl text-center">Никита Розанов<br />careviolan@gmail.com<br />Общество Китеж</p>
        <p className="footer text-white text-xl md:text-2xl font-bold mt-8">Спасибо за внимание</p>
      </section>
    </div>
  );
}