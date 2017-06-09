# webpack-config
via [screencast](https://learn.javascript.ru/screencast/webpack) by Ilya Kantor

## Простая сборка
### master branch:
Видео 1 – 3.7
* простой конфиг
* пересборка при изменениях / watch
* source maps
* `NODE_ENV`
* подключение `babel.js`
* resolving
* минификация
* несколько точек входа
* «NoErrorsPlugin»
* «CommonsChunkPlugin»
* общий для всех модулей код

## Продвинутые require
### require branch:
Видео 4.1 – 4.5
* динамическая подгрузка скриптов через `require.ensure` (и AMD-syntax)
* объединение фрагментов в общий фрагмент сборки
* require с выражением вместо строки
* `require.context` и простой роутинг
* динамический `require.context` с помощью `bundle-loader`

### require-part2 branch:
Видео 4.5 – 4.7
* «ContextReplacementPlugin» и замена контекста
* «IgnorePlugin» и игнорирование модулей

## Внешние библиотеки
### libraries branch:
Видео 5.1 – 5.5
* подключение скриптов с CDN и использование `externals` в конфиге
* «ProvidePlugin»
* оптимизация - `exclude`, `noParse` & `include`
* работа со старыми/чужими скриптами – `exports-loader` & `imports-loader`
* `expose-loader`

## Стили и файлы
### styles branch:
Видео 6.1 – 6.6
* `style-loader` на примере компонента `Menu`
* CSS и `file-loader`
* `url-loader`
* `jade-loader`
* работа с препроцессорами
* «ExtractTextPlugin»
