#include <stdio.h>
#include <stdlib.h>

int main(){
    // memory management: malloc, calloc, realloc
    
    int *ptr1, *ptr2;
    int totalStudents = 12;

    ptr1 = calloc(totalStudents, sizeof(*ptr1));
    
    if (ptr1 == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }

    // writing in memory:
    *ptr1 = 1;
    ptr1[1] = 2;

    printf("%d %d", *ptr1, ptr1[1]);

    printf("\n''''''''''\n");
    for(int i=0; i<2; i++){
        printf("%d\t", ptr[i]);
    }
    free(ptr1);

    return 0;
}