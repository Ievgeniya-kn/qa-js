const averageGrade = 105;

if (averageGrade < 0 || averageGrade > 100) {
    console.log("Оцінка повинна бути в межах від 0 до 100")
} else if (averageGrade < 60) {
    console.log("Незадовільно");
} else if (averageGrade <= 70) {
    console.log("Задовільно");
} else if (averageGrade <= 80) {
    console.log("Добре");
} else if (averageGrade <= 90) {
    console.log("Дуже добре");
} else {
    console.log("Відмінно");
}