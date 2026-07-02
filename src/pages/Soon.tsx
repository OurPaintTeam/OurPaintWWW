import Menu from './../Menu'

function Soon() {
  return (
    <div className='main_page'>
      <Menu />
      <div className="fixed inset-0 flex items-center justify-center z-0 opacity-90">
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8 max-w-md mx-4 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            ⚠️ Внимание: Технические работы
          </h2>
          <p className="text-yellow-700 text-lg">
            В данный момент эта страница недоступна.
            Мы прилагаем все усилия, чтобы вернуться в сеть как можно скорее.
          </p>
          <p className="text-yellow-600 mt-4 text-sm">
            Приносим свои извинения за причиненные неудобства.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Soon
