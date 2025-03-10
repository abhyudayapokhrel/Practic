#include <stdio.h>

struct person{
    int roll_no;
    char name[20];
} p;

int main(){

    printf("Enter name and roll no of a student");
    scanf("%s", p.name); scanf("%d", &p.roll_no);

    printf("/nName: %s\t Roll No: %d", p.name, p.roll_no);
    return 0;
}f