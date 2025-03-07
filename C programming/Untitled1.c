#include <stdio.h>
#include <stdlib.h>

//macro
#define pf printf

int add (int x, int y){
	return x+y;
}
int subtract (int x, int y){
	return x-y;
}
void calc(int x, int y, int (*op)(int, int)){
	printf("%d\n", op(x, y));
}

int compare (const void *a, const void *b){
	return (*(int *)a)-(*(int *)b);
}



int main(){	
	// Advanced C concepts
	int xs[] = {1, 2, 3, 4, 5, 7, 6, 8, 10, 9}, i;
	calc(10,5,add);
	calc(10,5,subtract);
	
	qsort  (xs, 10, sizeof(int), compare);
	for(i=0; i<10; i++){
		printf("%d\t", xs[i]);
	}
	
	return 0;
}
