using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Lab7KG
{
    public partial class Form1 : Form
    {
        private int coefficient_x, coefficient_y, center_x, center_y, amplitude;
        private double x, y, faza, angle;

        Brush aBrush = (Brush)Brushes.Black;
        Graphics gr;
       
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            coefficient_y = 2;
            coefficient_x = 1;
            center_x = 300;
            center_y = 200;
            amplitude = 200;
            faza = 0;
            angle = 0;
            gr = pictureBox1.CreateGraphics();
        }

        private void timer1_Tick(object sender, EventArgs e)
        {

            for (angle = 0; angle < 25; angle += 0.02)
            {
                // вычисляем координаты
                x = center_x + amplitude * Math.Cos(coefficient_x * angle);
                y = center_y + amplitude * Math.Cos(coefficient_y * angle + faza);

                // рисуем точку;
                DrawDot(x, y);
            }
            faza += 0.05;
            Refresh();
        }
        private void DrawDot(double x, double y)
        {
            gr.FillRectangle(aBrush, Convert.ToSingle(x), Convert.ToSingle(y), 2, 2);
        }
    }
}
