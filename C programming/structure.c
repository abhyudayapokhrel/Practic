#include <stdio.h>
#include <stdlib.h>

struct student {
    int roll;
    char name[20];
    float grade;
};

void print_student_info(struct student s[], int n) {
    for (int i = 0; i < n; i++) {
        printf("\n-------------\n");
        printf("Name: %s\tRoll No: %d\tGPA: %.2f\n", s[i].name, s[i].roll, s[i].grade);
    }
}

int main() {
    struct student s[5];
    int n = 5;

    // Input student information
    for (int i = 0; i < n; i++) {
        printf("Enter details for student %d:\n", i + 1);
        printf("Roll No: ");
        scanf("%d", &s[i].roll);
        printf("Name: ");
        scanf("%s", s[i].name);
        printf("GPA: ");
        scanf("%f", &s[i].grade);
    }

    // Print student information
    print_student_info(s, n);

    return 0;
}