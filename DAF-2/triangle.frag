#version 330 core

uniform vec4 ourColor;
out vec4 frag_colour;

void main()
{
    frag_colour = vec4(0.6f, 0.2f, 0.9f, 1.0f);
}