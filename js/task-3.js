class StringBuilder {
    #value; // Приватна властивість

    constructor(initialValue) {
        this.#value = initialValue; // Ініціалізація приватної властивості
    }

    getValue() {
        return this.#value; // Повертаємо поточне значення
    }

    padEnd(str) {
        this.#value += str; // Додаємо рядок у кінець
    }

    padStart(str) {
        this.#value = str + this.#value; // Додаємо рядок на початок
    }

    padBoth(str) {
        this.padStart(str); // Використовуємо метод padStart
        this.padEnd(str); // Використовуємо метод padEnd
    }
}

// Код для перевірки роботи класу:
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
