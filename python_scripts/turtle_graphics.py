import turtle
import time
from colorsys import hsv_to_rgb

turtle.setup(600, 600)

turtle.bgcolor("black")
turtle.pencolor('white')
turtle.pensize(3)


def spiral(init_size: int = 200, decay: float = 0.99, angle: int = 50, n_steps: int = 150):
    """
    Interesting patterns: (200, 0.99, 50, 150)

    :param init_size:
    :param decay:
    :param angle:
    :param n_steps:
    :return:
    """

    turtle.speed(0)
    turtle.penup()
    turtle.rt(90)
    turtle.fd(180)
    turtle.lt(90)
    turtle.bk(init_size/2)
    turtle.pendown()

    for i in range(n_steps):
        turtle.pencolor(hsv_to_rgb(i / n_steps, 0.75, 0.75))
        turtle.fd(init_size)
        init_size *= decay
        turtle.lt(angle)

    turtle.penup()
    turtle.rt((angle * n_steps) % 360)
    turtle.fd(500)


time.sleep(5)

spiral()

time.sleep(5)
