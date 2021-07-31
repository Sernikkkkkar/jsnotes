module.exports = {
  title: 'Заметки о скриптах',
  description: 'This is a Zeit Now 2.0 example',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      
    ],
    sidebar: [
            {
              title: 'Содержание',
              collapsable: true,
              children: [
                  ['/guide/1_0','Кнопки. Меню.'],
                  ['/guide/2_0','Окна.Формы.Диалоги.'],
                  ['/guide/3_0','Работа с файловой системой'],
                  ['/guide/4_0','Сервисные функции'],
                  ['/guide/5_0','Строки'],
                  ['/guide/Array JSON','Подготовка данных'],
                  ['/guide/audio','Работа с аудио'],
                  ['/guide/graphic_2D','Графика 2D'],
                  ['/guide/graphic_3D','Графика 3D'],
                  ['/guide/help','Test']
                 ]
                  
            }
          ]
  }
}
