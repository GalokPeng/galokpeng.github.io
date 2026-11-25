"""Six-second study: a pen on a rolling gear draws one closed hypotrochoid."""
from math import cos, sin, pi
from PIL import Image, ImageDraw

PAPER = "#f6efdd"
INK = "#233d68"
MUTED = "#cbbfa5"
BRASS = "#ab7749"
PIN = "#d8522c"


def frame(t, width, height):
    aa = 2
    w, h = width*aa, height*aa
    im = Image.new("RGB", (w,h), PAPER)
    draw = ImageDraw.Draw(im)
    unit = min(.392*h, .426*w)
    cx, cy = w/2, h/2
    phase = max(0, min(1, (t-.24)/5.32))
    # Cosine timing gives the pen a perceptible pickup and landing.
    theta = 4*pi*(.5-.5*cos(pi*phase))
    gear = .4
    pen = .79*gear

    def point(x,y):
        return (cx+x*unit, cy+y*unit)

    def ring(x,y,r,color,stroke,fill=None):
        draw.ellipse([point(x-r,y-r),point(x+r,y+r)], fill=fill, outline=color, width=max(1,round(unit*stroke)))

    def line(coords,color,stroke):
        draw.line([point(x,y) for x,y in coords], fill=color, width=max(1,round(unit*stroke)),joint="curve")

    def pen_at(a):
        return ((1-gear)*cos(a)+pen*cos(1.5*a), (1-gear)*sin(a)-pen*sin(1.5*a))

    for j in range(-9,10):
        offset=j/8
        line([(-1.2,offset),(1.2,offset)],"#e8dfca",.002)
        line([(offset,-1.12),(offset,1.12)],"#e8dfca",.002)
    ring(0,0,1.059,INK,.014)
    ring(0,0,1.018,MUTED,.006)
    for j in range(100):
        a=2*pi*j/100
        radius=1.005 if j%5 else .982
        line([(radius*cos(a),radius*sin(a)),(1.042*cos(a),1.042*sin(a))],INK,.005)
    # Same curve, same pen point, whether frames are rendered in order or sampled.
    step=4*pi/1100
    path=[pen_at(k*step) for k in range(int(theta/step)+1)]
    tip=pen_at(theta)
    line([*path,tip],INK,.018)
    x,y=(1-gear)*cos(theta),(1-gear)*sin(theta)
    ring(x,y,gear,BRASS,.018)
    ring(x,y,gear*.88,BRASS,.005)
    for j in range(3):
        a=2*pi*j/3-1.5*theta
        line([(x+.065*cos(a),y+.065*sin(a)),(x+gear*.86*cos(a),y+gear*.86*sin(a))],BRASS,.015)
    ring(x,y,.041,INK,.012,fill=PAPER)
    ring(*tip,.036,PIN,.010,fill=PIN)
    ring(*tip,.012,PAPER,.005,fill=PAPER)
    return im.resize((width,height), Image.Resampling.LANCZOS)
