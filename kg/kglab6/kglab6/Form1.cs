using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace kglab6
{
    public partial class Form1 : Form
    {
        Point[] points = new Point[20];
        Pen pen = new Pen(Color.Black, 2);

        public Form1()
        {
            InitializeComponent();

        }
        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            Graphics g = e.Graphics;
            g.Clear(Color.White);
            SolidBrush solidBrush = new SolidBrush(Color.DarkBlue);
            g.FillRectangle(solidBrush, 0, 0, 280, 175);

            solidBrush = new SolidBrush(Color.DarkOrange);
            g.FillRectangle(solidBrush, 40, 20, 80, 140);
            solidBrush = new SolidBrush(Color.DarkRed);
            g.FillPolygon(solidBrush, points);
            solidBrush = new SolidBrush(Color.DarkOrange);
            g.FillRectangle(solidBrush, 160, 100, 100, 80);
            //Windows
            solidBrush = new SolidBrush(Color.Aqua);
            g.FillRectangle(solidBrush, 175, 115, 20, 20);
            g.FillRectangle(solidBrush, 225, 115, 20, 20);
            g.FillRectangle(solidBrush, 175, 145, 20, 20);
            g.FillRectangle(solidBrush, 225, 145, 20, 20);
            //Door
            solidBrush = new SolidBrush(Color.Brown);
            g.FillRectangle(solidBrush, 200, 140, 20, 40);

            solidBrush = new SolidBrush(Color.Aqua);
            g.FillRectangle(solidBrush, 55, 35, 20, 20);
            g.FillRectangle(solidBrush, 85, 35, 20, 20);
            g.FillRectangle(solidBrush, 55, 65, 20, 20);
            g.FillRectangle(solidBrush, 85, 65, 20, 20);
            g.FillRectangle(solidBrush, 55, 95, 20, 20);
            g.FillRectangle(solidBrush, 85, 95, 20, 20);

            g.FillRectangle(solidBrush, 55, 125, 20, 20);
            //Door
            solidBrush = new SolidBrush(Color.Brown);
            g.FillRectangle(solidBrush, 85, 125, 20, 40);

            solidBrush = new SolidBrush(Color.DarkGray);
            g.FillRectangle(solidBrush, 25, 160, 110, 15);

            //Moon
            solidBrush = new SolidBrush(Color.White);
            g.FillEllipse(solidBrush, 220, 20, 30, 30);
            solidBrush = new SolidBrush(Color.DarkBlue);
            g.FillEllipse(solidBrush, 218, 23, 24, 24);


            solidBrush = new SolidBrush(Color.Green);
            g.FillRectangle(solidBrush, 0, 175, 280, 30);
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            int xPos = 150;
            int yPos = 104;
            for (int i = 0; i < 20; i++)
            {
                if (i < 10)
                {
                    xPos += 6;
                    yPos -= 4;
                }
                else
                {
                    xPos += 6;
                    if (i != 19)
                    {
                        yPos += 4;
                    }
                }
                points[i] = new Point(xPos, yPos);
            }
        }

  
    }

}
