import Menu from '../Menu'

function About() {
  const teamInfo = [
    {
      name: 'Иванов Иван Иванович',
      role: 'Руководитель проекта, Senior Developer',
      description: 'Отвечает за архитектуру проекта, управление командой и техническое лидерство. Иван имеет более 10 лет опыта в разработке веб-приложений и является экспертом в области TypeScript и React.',
      avatar: 'https://placehold.co/150x150/6366f1/ffffff?text=II'
    },
    {
      name: 'Петрова Анна Сергеевна',
      role: 'UI/UX Дизайнер',
      description: 'Создает интуитивно понятные и красивые интерфейсы. Анна стремится к тому, чтобы каждый элемент дизайна не только радовал глаз, но и улучшал пользовательский опыт.',
      avatar: 'https://placehold.co/150x150/ec4899/ffffff?text=PS'
    },
    {
      name: 'Сидоров Алексей Владимирович',
      role: 'Backend Developer',
      description: 'Разрабатывает надежные серверные решения и API. Алексей специализируется на Node.js и базах данных, обеспечивая стабильную работу приложения.',
      avatar: 'https://placehold.co/150x150/10b981/ffffff?text=AV'
    },
    {
      name: 'Михайлова Елена Олеговна',
      role: 'QA Инженер',
      description: 'Гарантирует высокое качество продукта. Елена тщательно тестирует все функции приложения, выявляя и устраняя ошибки до выхода в продакшн.',
      avatar: 'https://placehold.co/150x150/f59e0b/ffffff?text=MO'
    },
    {
      name: 'Козлов Дмитрий Сергеевич',
      role: 'Frontend Developer',
      description: 'Превращает дизайн в живой интерфейс. Дмитрий экспертиз в современных технологиях фронтенда и пишет чистый, поддерживаемый код.',
      avatar: 'https://placehold.co/150x150/8b5cf6/ffffff?text=KS'
    }
  ];

  return (
    <div className='main_page'>
      <Menu />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">OurPaintTeam</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Наша команда — это независимые разработчики, объединенные идеей создания свободных
             и доступных САПР инструментов. Наш ключевой продукт, OurPaintDesktop,
              — это десктопное приложение с открытым исходным кодом, которое дает пользователям 
              полный контроль над их рабочим процессом без скрытых подписок и проприетарных 
              ограничений. Мы сфокусированы на производительности и стабильности, а сам процесс 
              разработки ведется прозрачно и напрямую опирается на обратную связь от сообщества. 
              Любой желающий может изучить наш код, предложить улучшения или внедрить новые функции, 
              делая инструмент лучше с каждым коммитом.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Наши участники</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamInfo.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-purple-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{member.name}</h3>
                <p className="text-center text-purple-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
