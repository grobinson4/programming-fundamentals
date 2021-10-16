#include <stdio.h>

using namespace std;

// arrays - are a collection of similar data stored in a memory location that can be accessed by indices of the array. 
// They can be used to store collection of primitive data types such as int, float, double, char, etc. 

int main() {
  // Array declaration by specific size
  int arr1[10];
  
  // Array declaration by initializing elents
  int sneakers[] = {1,2,3,4,5,6,7,8};

  //Compiler creates an array of size 4.
  //above is same as 
  int arr[4] = {1,2,3,4};
  printf("Item in index 2 of the sneakers collection is %d ", sneakers[2]);

  int i;

    printf("\nThe original array elements are :\n");

    for(i = 0; i < 5; i++) {
      printf("Sneaker[%d] = %d \n", i, sneakers[i]);
    }

  
}
