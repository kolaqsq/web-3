class PlanarFigure {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    static dist(figures) {
        for (let i = 0; i < figures.length - 1; i++) {
            for (let j = 1; j < figures.length; j++) {
                if (figures[i] !== figures[j]) {
                    console.log("Расстояние между центрами " + figures[i].constructor.name +
                        " и " + figures[j].constructor.name +
                        ": " + ((figures[j].center[0] - figures[i].center[0]) ** 2 +
                            (figures[j].center[1] - figures[i].center[1]) ** 2) ** 0.5);
                }
            }
        }
    };
}

class Point extends PlanarFigure {
    constructor(x, y) {
        super(x, y);
    };

    get center() {
        return [this.x, this.y];
    };

    get props() {
        console.log("Свойства точки:\n" +
            "\tКоординаты точки: (" + this.center[0] + "; " + this.center[1] + "),\n"
        );
    };
}

class Line extends PlanarFigure {
    constructor(x, y, x_end, y_end) {
        super(x, y);
        this.x_end = x_end;
        this.y_end = y_end;
    };

    get center() {
        return [(this.x + this.x_end) / 2, (this.y + this.y_end) / 2];
    };

    get length() {
        return ((this.x_end - this.x) ** 2 + (this.y_end - this.y) ** 2) ** 0.5;

    };

    get props() {
        console.log("Свойства прямой:\n" +
            "\tКоординаты начала: (" + this.x + "; " + this.y + "),\n" +
            "\tКоординаты конца: (" + this.x_end + "; " + this.y_end + "),\n" +
            "\tКоординаты центра: (" + this.center[0] + "; " + this.center[1] + "),\n" +
            "\tДлинна: " + this.length + "\n"
        );
    };
}

class Circle extends PlanarFigure {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    };

    get center() {
        return [this.x, this.y];
    };

    get radius() {
        return this.r;
    };

    get length() {
        return 2 * Math.PI * this.r;
    };

    get area() {
        return Math.PI * this.r ** 2;
    };

    get props() {
        console.log("Свойства окружности:\n" +
            "\tКоординаты центра: (" + this.center[0] + "; " + this.center[1] + "),\n" +
            "\tРадиус: " + this.radius + "\n" +
            "\tПериметр: " + this.length + "\n" +
            "\tПлощадь: " + this.area + "\n"
        );
    };
}

class Ellipse extends PlanarFigure {
    constructor(x, y, a, b) {
        super(x, y);
        this.a = a;
        this.b = b;
    };

    get center() {
        return [this.x, this.y];
    };

    get axis() {
        return [this.a, this.b];
    };

    get length() {
        return 4 * (Math.PI * this.a * this.b + (this.a - this.b)) / (this.a + this.b);
    };

    get area() {
        return Math.PI * this.a * this.b;
    };

    get props() {
        console.log("Свойства эллипса:\n" +
            "\tКоординаты центра: (" + this.center[0] + "; " + this.center[1] + "),\n" +
            "\tДлина полуоси a: " + this.axis[0] + "\n" +
            "\tДлина полуоси b: " + this.axis[1] + "\n" +
            "\tПериметр: " + this.length + "\n" +
            "\tПлощадь: " + this.area + "\n"
        );
    };
}

class Rectangle extends PlanarFigure {
    constructor(x, y, a, b) {
        super(x, y);
        this.a = a;
        this.b = b;
    };

    get center() {
        return [this.x + this.b / 2, this.y + this.a / 2];
    };

    get sides() {
        return [this.a, this.b];
    };

    get length() {
        return (this.a + this.b) * 2;
    };

    get area() {
        return this.a * this.b;
    };

    get props() {
        console.log("Свойства прямоугольника:\n" +
            "\tКоординаты центра: (" + this.center[0] + "; " + this.center[1] + "),\n" +
            "\tДлина стороны a: " + this.sides[0] + "\n" +
            "\tДлина стороны b: " + this.sides[1] + "\n" +
            "\tПериметр: " + this.length + "\n" +
            "\tПлощадь: " + this.area + "\n"
        );
    };
}

let figures = [
    new Point(6, 9),
    new Line(0, 0, 1, 10,),
    new Circle(4, 2, 5),
    new Ellipse(1, 5, 5, 8),
    new Rectangle(4, 8, 4, 20),
];

figures[0].props;
figures[1].props;
figures[2].props;
figures[3].props;
figures[4].props;

PlanarFigure.dist(figures);
