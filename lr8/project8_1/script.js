class PlanarFigure {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
}

class Point extends PlanarFigure {
    constructor(x, y) {
        super(x, y);
    };

    get pos() {
        return [this.x, this.y];
    };
}

class Line extends PlanarFigure {
    constructor(x, y, x_end, y_end) {
        super(x, y);
        this.x_end = x_end;
        this.y_end = y_end;
    };

    get pos() {
        return [this.x, this.y, this.x_end, this.y_end]
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
}

class Rectangle extends PlanarFigure {
    constructor(x, y, a, b) {
        super(x, y);
        this.a = a;
        this.b = b;
    };

    get pos() {
        return [this.x, this.y, this.a, this.b];
    };
}

function createPoint() {
    preview_cache = [];
    cache.push(new Point(mouse_pos.x, mouse_pos.y));
}

function previewPoint() {
    start_pos.x = mouse_pos.x;
    start_pos.y = mouse_pos.y;
    if (start_pos.x !== 0 && start_pos.y !== 0) {
        preview_cache.push(new Point(start_pos.x, start_pos.y));
    }
}

function startFigure() {
    start_pos.x = mouse_pos.x;
    start_pos.y = mouse_pos.y;
}

function createLine() {
    preview_cache = [];
    cache.push(new Line(start_pos.x, start_pos.y, mouse_pos.x, mouse_pos.y));
    start_pos.x = 0;
    start_pos.y = 0;
}

function previewLine() {
    if (start_pos.x !== 0 && start_pos.y !== 0) {
        preview_cache.push(new Line(start_pos.x, start_pos.y, mouse_pos.x, mouse_pos.y));
    }
}

function createCircle() {
    preview_cache = [];
    let r = Math.max(Math.abs(mouse_pos.x - start_pos.x), Math.abs(mouse_pos.y - start_pos.y))
    cache.push(new Circle(start_pos.x, start_pos.y, r));
    start_pos.x = 0;
    start_pos.y = 0;
}

function previewCircle() {
    if (start_pos.x !== 0 && start_pos.y !== 0) {
        let r = Math.max(Math.abs(mouse_pos.x - start_pos.x), Math.abs(mouse_pos.y - start_pos.y))
        preview_cache.push(new Circle(start_pos.x, start_pos.y, r));
    }
}

function createEllipse() {
    preview_cache = [];
    let axis = {
        a: Math.abs(mouse_pos.x - start_pos.x),
        b: Math.abs(mouse_pos.y - start_pos.y)
    };
    cache.push(new Ellipse(start_pos.x, start_pos.y, axis.a, axis.b));
    start_pos.x = 0;
    start_pos.y = 0;
}

function previewEllipse() {
    if (start_pos.x !== 0 && start_pos.y !== 0) {
        let axis = {
            a: Math.abs(mouse_pos.x - start_pos.x),
            b: Math.abs(mouse_pos.y - start_pos.y)
        };
        preview_cache.push(new Ellipse(start_pos.x, start_pos.y, axis.a, axis.b));
    }
}

function createRectangle() {
    preview_cache = [];
    let side = {
        a: mouse_pos.x - start_pos.x,
        b: mouse_pos.y - start_pos.y
    };
    cache.push(new Rectangle(start_pos.x, start_pos.y, side.a, side.b));
    start_pos.x = 0;
    start_pos.y = 0;
}

function previewRectangle() {
    if (start_pos.x !== 0 && start_pos.y !== 0) {
        let side = {
            a: mouse_pos.x - start_pos.x,
            b: mouse_pos.y - start_pos.y
        };
        preview_cache.push(new Rectangle(start_pos.x, start_pos.y, side.a, side.b));
    }
}

function clearListeners() {
    canvas.removeEventListener("click", createPoint);
    canvas.removeEventListener("mousedown", startFigure);
    canvas.removeEventListener("mouseup", createLine);
    canvas.removeEventListener("mouseup", createCircle);
    canvas.removeEventListener("mouseup", createEllipse);
    canvas.removeEventListener("mouseup", createRectangle);
    canvas.removeEventListener("mousemove", previewPoint);
    canvas.removeEventListener("mousemove", previewLine);
    canvas.removeEventListener("mousemove", previewCircle);
    canvas.removeEventListener("mousemove", previewEllipse);
    canvas.removeEventListener("mousemove", previewRectangle);
}

function renderFigure(figure) {
    switch (figure.constructor.name) {
        case "Point":
            context.beginPath();
            context.fillStyle = "black";
            context.arc(
                figure.pos[0],
                figure.pos[1],
                5,
                0,
                Math.PI * 2,
                false
            );
            context.fill();
            break;
        case "Line":
            context.beginPath();
            context.fillStyle = "black";
            context.lineWidth = 5;
            context.moveTo(figure.pos[0], figure.pos[1]);
            context.lineTo(figure.pos[2], figure.pos[3]);
            context.stroke();
            break;
        case "Circle":
            context.beginPath();
            context.fillStyle = "black";
            context.lineWidth = 5;
            context.arc(
                figure.center[0],
                figure.center[1],
                figure.radius,
                0,
                Math.PI * 2,
                false
            );
            context.stroke();
            break;
        case "Ellipse":
            context.beginPath();
            context.fillStyle = "black";
            context.lineWidth = 5;
            context.ellipse(
                figure.center[0],
                figure.center[1],
                figure.axis[0],
                figure.axis[1],
                0,
                0,
                Math.PI * 2
            );
            context.stroke();
            break;
        case "Rectangle":
            context.beginPath();
            context.fillStyle = "black";
            context.lineWidth = 5;
            context.strokeRect(
                figure.pos[0],
                figure.pos[1],
                figure.pos[2],
                figure.pos[3]
            );
            break;
    }
}

function renderCanvas() {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < cache.length; i++) {
        renderFigure(cache[i]);
    }
    let preview = preview_cache.length - 1;
    renderFigure(preview_cache[preview]);
}

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let mouse_pos = {
    x: 0,
    y: 0,
};
let start_pos = {
    x: 0,
    y: 0
};
let drawing_mode = "point";
let cache = [];
let preview_cache = [];

canvas.addEventListener("click", createPoint);
canvas.addEventListener("mousemove", previewPoint);
canvas.addEventListener("mouseleave", () => {
    preview_cache = [];
    start_pos.x = 0;
    start_pos.y = 0;
});

document.getElementById("menu").addEventListener("click", function () {
    for (let i = 1; i < 6; i++) {
        let option = document.getElementById(`mode${i}`);
        if (option.checked && drawing_mode !== option.value) {
            drawing_mode = option.value;
            break;
        }
    }

    switch (drawing_mode) {
        case "point":
            clearListeners();
            canvas.addEventListener("click", createPoint);
            canvas.addEventListener("mousemove", previewPoint);
            break;
        case "line":
            clearListeners();
            canvas.addEventListener("mousedown", startFigure);
            canvas.addEventListener("mousemove", previewLine);
            canvas.addEventListener("mouseup", createLine);
            break;
        case "circle":
            clearListeners();
            canvas.addEventListener("mousedown", startFigure);
            canvas.addEventListener("mousemove", previewCircle);
            canvas.addEventListener("mouseup", createCircle);
            break;
        case "ellipse":
            clearListeners();
            canvas.addEventListener("mousedown", startFigure);
            canvas.addEventListener("mousemove", previewEllipse);
            canvas.addEventListener("mouseup", createEllipse);
            break;
        case "rectangle":
            clearListeners();
            canvas.addEventListener("mousedown", startFigure);
            canvas.addEventListener("mousemove", previewRectangle);
            canvas.addEventListener("mouseup", createRectangle);
            break;
    }
});

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
canvas.addEventListener("mousemove", (e) => {
    mouse_pos.x = e.offsetX;
    mouse_pos.y = e.offsetY;
});

setInterval(renderCanvas, 10);
