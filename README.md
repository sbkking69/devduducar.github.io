<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Каталог товаров</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <input type="text" id="search" placeholder="Поиск товара...">
        <div>
            <label>
                <input type="radio" name="category" value="parts" checked> Запчасти
            </label>
            <label>
                <input type="radio" name="category" value="services"> Сервисы
            </label>
        </div>
    </header>
    <main id="catalog">
        <!-- Товары будут загружены сюда -->
    </main>
    <button id="load-more">Показать еще</button>

    <script src="script.js"></script>
</body>
</html>
