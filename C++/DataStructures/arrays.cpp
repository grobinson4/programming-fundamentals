#include <stdio.h>

using namespace std;

// int LA[] = {1,3,5,7,8};
//    int item = 10, k = 3, n = 5;
//    int i = 0, j = n;   
//    printf("The original array elements are :\n");
//    for(i = 0; i<n; i++) {
//       printf("LA[%d] = %d \n", i, LA[i]);
//    }

int main() {
    int sneakers[] = {1,2,3,4,5,6,7,8};
    int item = 10, k = 3, n = 5;
    int i = 0, j = n;

    printf("The original array elements are :\n");

    for(i = 0; i<n; i++) {
      printf("LA[%d] = %d \n", i, sneakers[i]);
    }

    n = n + 1;
	
   while( j >= k) {
      sneakers[j+1] = sneakers[j];
      j = j - 1;
    }

   sneakers[k] = item;

   printf("The array elements after insertion :\n");

   for(i = 0; i<n; i++) {
      printf("sneakers[%d] = %d \n", i, sneakers[i]);
    }
}
