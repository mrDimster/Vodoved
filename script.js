function changeImage(element) {
    const current = document.getElementById('current');
    current.src = element.src;

    // Убираем класс active у всех
    document.querySelectorAll('.thumbnails img').forEach(img => img.classList.remove('active'));
    // Добавляем active выбранному
    element.classList.add('active');
}