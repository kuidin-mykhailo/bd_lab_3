using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace KG9lab
{
    public partial class Form1 : Form
    {
        public Half_Star half_star;
        public int circle_x, circle_y, rectangle;
        private static int center_x, center_y;
        public static Circle circle;
        public class Half_Star
        {
            public int center_x, center_y;
            public int size;
            public int line_size;
            public List<Point> dots;


            public Half_Star(int x, int y, int new_size)
            {
                center_x = x;
                center_y = y;
                size = new_size;
            }


            public void GeneratePoints()
            {
                line_size = Convert.ToInt32(this.size * 0.7);
                this.dots = new List<Point>();
                this.dots.Add(new Point(center_x, center_y));

                this.dots.Add(new Point(center_x + this.size, center_y));

                Point tmp = new Point(this.dots[1].x, center_y - line_size);
                tmp.Rotate_around_point(-45, this.dots[1]);
                this.dots.Add(new Point(tmp.x, tmp.y));

                tmp = new Point(dots[2].x - line_size, dots[2].y);
                tmp.Rotate_around_point(10, this.dots[2]);
                this.dots.Add(new Point(tmp.x, tmp.y));

                tmp = new Point(this.dots[3].x - Convert.ToInt32(line_size / 2.3), this.dots[3].y - line_size);
                this.dots.Add(new Point(tmp.x, tmp.y));

                tmp = new Point(this.dots[4].x - Convert.ToInt32(line_size / 2.3), this.dots[4].y + line_size);
                this.dots.Add(new Point(tmp.x, tmp.y));

                tmp = new Point(this.dots[5].x - line_size, this.dots[5].y);
                tmp.Rotate_around_point(-10, this.dots[5]);
                this.dots.Add(new Point(tmp.x, tmp.y));
            }

            public void Rotate_aroud_center(double angle)
            {
                this.dots[1].Rotate_around_point(angle, new Point(center_x, center_y));
                this.dots[2].Rotate_around_point(angle, new Point(center_x, center_y));
                this.dots[3].Rotate_around_point(angle, new Point(center_x, center_y));
                this.dots[4].Rotate_around_point(angle, new Point(center_x, center_y));
                this.dots[5].Rotate_around_point(angle, new Point(center_x, center_y));
                this.dots[6].Rotate_around_point(angle, new Point(center_x, center_y));
            }

            public void Miror()
            {
                this.dots[0].Miror();
                this.dots[1].Miror();
                this.dots[2].Miror();
                this.dots[3].Miror();
                this.dots[4].Miror();
                this.dots[5].Miror();
                this.dots[6].Miror();
            }

            public void Zoom(double zoom_value)
            {
                Point center_point = new Point(center_x, center_y);
                this.dots[0].zoom(this.dots[1], center_point, zoom_value);
                this.dots[1].zoom(this.dots[2], center_point, zoom_value);
                this.dots[2].zoom(this.dots[3], center_point, zoom_value);
                this.dots[3].zoom(this.dots[4], center_point, zoom_value);
                this.dots[4].zoom(this.dots[5], center_point, zoom_value);
                this.dots[5].zoom(this.dots[6], center_point, zoom_value);
                this.dots[6].zoom(this.dots[0], center_point, zoom_value);
            }

        }

        public class Point
        {
            public int x, y;

            public Point(int new_x, int new_y)
            {
                x = new_x;
                y = new_y;
            }

            public void Rotate_around_point(double angle, Point center_point) // Поворот вокруг заданной точки
            {
                double[,] first_matrix = new double[3, 3];
                double[,] second_matrix = new double[3, 3];
                double[,] angle_matrix = new double[3, 3];
                double[,] coordinates_matrix = new double[1, 3];

                first_matrix[0, 0] = 1;
                first_matrix[1, 1] = 1;
                first_matrix[1, 2] = 0;
                first_matrix[2, 0] = -center_point.x;
                first_matrix[2, 1] = -center_point.y;
                first_matrix[2, 2] = 1;

                second_matrix[0, 0] = 1;
                second_matrix[1, 1] = 1;
                second_matrix[1, 2] = 0;
                second_matrix[2, 0] = center_point.x;
                second_matrix[2, 1] = center_point.y;
                second_matrix[2, 2] = 1;

                coordinates_matrix[0, 0] = this.x;
                coordinates_matrix[0, 1] = this.y;
                coordinates_matrix[0, 2] = 1;

                angle_matrix[0, 0] = Math.Cos(ConvertDegreesToRadians(angle));
                angle_matrix[0, 1] = -Math.Sin(ConvertDegreesToRadians(angle));
                angle_matrix[0, 2] = 0;
                angle_matrix[1, 0] = Math.Sin(ConvertDegreesToRadians(angle));
                angle_matrix[1, 1] = Math.Cos(ConvertDegreesToRadians(angle));
                angle_matrix[1, 2] = 0;
                angle_matrix[2, 0] = 0;
                angle_matrix[2, 1] = 0;
                angle_matrix[2, 2] = 1;

                double[,] tmp = new double[1, 3];
                tmp = coordinates_matrix;
                coordinates_matrix = Multicast(tmp, first_matrix, 1, 3, 3);

                tmp = coordinates_matrix;
                coordinates_matrix = Multicast(tmp, angle_matrix, 1, 3, 3);

                tmp = coordinates_matrix;
                coordinates_matrix = Multicast(tmp, second_matrix, 1, 3, 3);

                this.x = Convert.ToInt32(Math.Round(coordinates_matrix[0, 0]));
                this.y = Convert.ToInt32(Math.Round(coordinates_matrix[0, 1]));

            }

            public double[,] Multicast(double[,] left, double[,] right, int matrix_size_x, int matrix_size_y, int left_size_cols) // Умножение матриц
            {
                double[,] new_matrix_coordinate = new double[matrix_size_x, matrix_size_y];
                for (int i = 0; i < matrix_size_x; i++)
                {
                    for (int j = 0; j < matrix_size_y; j++)
                    {
                        new_matrix_coordinate[i, j] = 0;
                        for (int k = 0; k < left_size_cols; k++)
                        {
                            new_matrix_coordinate[i, j] += left[i, k] * right[k, j];
                        }
                    }
                }
                return new_matrix_coordinate;
            }

            public static double ConvertDegreesToRadians(double degrees)
            {
                double radians = (Math.PI / 180) * degrees;
                return (radians);
            }

            public void Miror()
            {
                double[,] coordinates_matrix = new double[1, 3];
                double[,] rotate_matrix = new double[3, 3];

                coordinates_matrix[0, 0] = this.x;
                coordinates_matrix[0, 1] = this.y;
                coordinates_matrix[0, 2] = 1;

                rotate_matrix[0, 0] = -1;
                rotate_matrix[1, 1] = 1;
                rotate_matrix[2, 2] = 1;

                coordinates_matrix = Multicast(coordinates_matrix, rotate_matrix, 1, 3, 3);


                this.x = Convert.ToInt32(Math.Round(coordinates_matrix[0, 0]));
                this.y = Convert.ToInt32(Math.Round(coordinates_matrix[0, 1]));


                if (this.x <= 0)
                {
                    this.x += center_x * 2;
                }
                else
                {
                    this.x -= center_x;
                }
            }
            public void zoom(Point second_point, Point center_point, double zoom_value)
            {
                double[,] first_matrix = new double[2, 3];
                double[,] second_matrix = new double[2, 3];
                double[,] rotate_matrix = new double[3, 3];
                double[,] result = new double[2, 3];

                first_matrix[0, 0] = this.x;
                first_matrix[0, 1] = this.y;
                first_matrix[0, 2] = 1;
                second_matrix[1, 0] = second_point.x;
                second_matrix[1, 1] = second_point.y;
                second_matrix[1, 2] = 1;

                rotate_matrix[0, 0] = zoom_value;
                rotate_matrix[1, 1] = zoom_value;
                rotate_matrix[2, 0] = -center_point.x * zoom_value + center_point.x;
                rotate_matrix[2, 1] = -center_point.y * zoom_value + center_point.y;
                rotate_matrix[2, 2] = 1;

                result = Multicast(first_matrix, rotate_matrix, 2, 3, 3);
                this.x = Convert.ToInt32(result[0, 0]);
                this.y = Convert.ToInt32(result[0, 1]);
            }
        }

        public class Circle
        {
            public int radius, circle_x, circle_y;
            public int center_x, center_y;

            public Circle(int new_center_x, int new_center_y, int new_radius)
            {
                this.circle_x = new_center_x + new_radius;
                this.circle_y = new_center_y + new_radius;
                this.radius = new_radius;
                this.center_x = new_center_x;
                this.center_y = new_center_y;
            }

            public void Draw_circle(Graphics g)
            {
                Brush aBrush = (Brush)Brushes.Black;
                for (int i = 0; i < 360; i++)
                {
                    Point point = new Point(circle_x - radius, circle_y);
                    point.Rotate_around_point(i, new Point(circle_x, circle_y));
                    g.FillRectangle(aBrush, point.x, point.y, 3, 3);
                }
            }


            public void Rotate_around_center(double angel)
            {
                Point point = new Point(center_x, center_y);
                Point circle_center = new Point(circle_x, circle_y);
                circle_center.Rotate_around_point(angel, point);
                this.circle_x = circle_center.x;
                this.circle_y = circle_center.y;
            }

            public void Miror()
            {
                Point point = new Point(circle_x, circle_y);
                point.Miror();
                this.circle_x = point.x;
                this.circle_y = point.y;
            }

            public void Zoom(double zoom_value)
            {
                double tmp = zoom_value * this.radius;
                circle = new Circle(center_x, center_y, Convert.ToInt32(tmp));
            }
        }

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            Graphics g = e.Graphics;

            Pen blackPen = new Pen(Color.Black, 3);

            // Create rectangle for ellipse.
            Rectangle rect = new Rectangle(circle_x, circle_y, rectangle, rectangle);

            // Draw ellipse to screen.
            circle.Draw_circle(g);

            if (half_star != null)
            {
                e.Graphics.DrawLine(blackPen, half_star.dots[0].x, half_star.dots[0].y, half_star.dots[1].x, half_star.dots[1].y);
                e.Graphics.DrawLine(blackPen, half_star.dots[1].x, half_star.dots[1].y, half_star.dots[2].x, half_star.dots[2].y);
                e.Graphics.DrawLine(blackPen, half_star.dots[2].x, half_star.dots[2].y, half_star.dots[3].x, half_star.dots[3].y);
                e.Graphics.DrawLine(blackPen, half_star.dots[3].x, half_star.dots[3].y, half_star.dots[4].x, half_star.dots[4].y);
                e.Graphics.DrawLine(blackPen, half_star.dots[4].x, half_star.dots[4].y, half_star.dots[5].x, half_star.dots[5].y);
                e.Graphics.DrawLine(blackPen, half_star.dots[5].x, half_star.dots[5].y, half_star.dots[6].x, half_star.dots[6].y);
                e.Graphics.DrawLine(blackPen, half_star.dots[6].x, half_star.dots[6].y, half_star.dots[0].x, half_star.dots[0].y);
            }

        }

        private void button1_Click(object sender, EventArgs e)
        {
            half_star.Rotate_aroud_center(90);
            circle.Rotate_around_center(90);
            Invalidate();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            half_star.Miror();
            circle.Miror();
            Invalidate();
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Control && e.KeyCode == Keys.U)
            {
                half_star.Rotate_aroud_center(90);
                circle.Rotate_around_center(90);
                Invalidate();
            }
            else if (e.Control && e.KeyCode == Keys.I)
            {
                half_star.Rotate_aroud_center(-90);
                circle.Rotate_around_center(-90);
                Invalidate();
            }
            else if (e.Control && e.KeyCode == Keys.K)
            {
                half_star.Zoom(2);
                circle.Zoom(2);
                Invalidate();
            }
            else if (e.Control && e.KeyCode == Keys.R)
            {
                Form1_Load(this, null);
            }
            else if (e.Control && e.KeyCode == Keys.M)
            {
                half_star.Miror();
                circle.Miror();
                Invalidate();
            }

        }

        private void button4_Click(object sender, EventArgs e)
        {
            half_star.Zoom(2);
            circle.Zoom(2);
            Invalidate();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            half_star.Rotate_aroud_center(-90);
            circle.Rotate_around_center(-90);
            Invalidate();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            half_star = null;
            center_x = 300;
            center_y = 200;
            this.circle_x = 300;
            this.circle_y = 200;
            this.rectangle = 100;
            half_star = new Half_Star(center_x, center_y, 100);
            half_star.GeneratePoints();
            circle = new Circle(center_x, center_y, 50);
            Invalidate();
        }
    }
}

