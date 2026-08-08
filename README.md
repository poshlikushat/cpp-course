# Сайт с заданиями по C++

Статический сайт (без бэкенда) со списком заданий по дням и гайдами для учеников
(SSH-ключ, клонирование репозитория, базовый Git).

## Как добавить новый день

Открой [`assets/data/days.js`](assets/data/days.js) и добавь объект в массив `DAYS`:

```js
{
  day: 4,
  title: "День 4: Функции",
  description: "Объявление функций, аргументы, возвращаемое значение.",
  repoUrl: "https://github.com/your-org/day04-functions",
}
```

Больше ничего трогать не нужно — карточка появится на главной странице автоматически.

## Как посмотреть локально

Просто открой `index.html` в браузере, или через локальный сервер:

```bash
npx serve .
```

## Как задеплоить на GitHub Pages

1. Создай новый **публичный** репозиторий на GitHub (например `cpp-course-site`).
2. Запушь в него содержимое этой папки:
   ```bash
   git init
   git add .
   git commit -m "Первая версия сайта с заданиями"
   git branch -M main
   git remote add origin git@github.com:your-username/cpp-course-site.git
   git push -u origin main
   ```
3. На GitHub зайди в **Settings → Pages**.
4. В разделе **Build and deployment** выбери **Source: Deploy from a branch**,
   ветку **main**, папку **/ (root)** → **Save**.
5. Через минуту сайт будет доступен по адресу `https://your-username.github.io/cpp-course-site/`.

После этого при каждом `git push` в `main` сайт будет обновляться автоматически.
