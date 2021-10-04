#include <iostream>

using namespace std;

int main()
{
    //Declare inputs
    int operand_a,operand_b;
    int result;
    char operation;
    
    //Request and store user inputs
    cout<< "Enter the fisrt number__";
    cin >> operand_a;
    cout<< "Enter your operator(+,-,*,/)";
    cin >> operation;
    cout<< "Enter second number__";
    cin >> operand_b;

    // Switch operation and return the answer based on operator the user inputs
    switch(operation) {
        case '+':
        result = operand_a + operand_b;
        cout<<result<<endl;
        break;
        case '-':
        result = operand_a - operand_b;
        cout<<result<<endl;
        break;
        case '/':
        if (operand_a == 0 || operand_b == 0) {
            cout<<"This program only computes non-zero number multiplications and division"<<endl;
        }
        else {
        result = operand_a / operand_b;
        cout<<result<<endl;
        }
        break;
        case '*':
        if (operand_a == 0 || operand_b == 0) {
            cout<<"This program only computes non-zero number multiplications and division"<<endl;
        }
        else {
        result = operand_a * operand_b;
        cout<<result<<endl;
        }
        break;
    }

}