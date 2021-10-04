#include <iostream>


using namespace std;

int main()
{
    //Need to use type float to get decimals
    float Fahrenheit = 90;
    float Celsius = 0;
    
    Celsius = (Fahrenheit - 32) * 5/9;
    cout<<Celsius<<endl;

    return 0;
}