#include <iostream>
#include <fstream>
using namespace std;

int main()

{
    string fileName;
    string append;
    fstream ob;

    cout << "Enter name of file name (test.txt) "; //Prompt userfor the file name
    cin >> fileName;
    cout << "Do you want to append file contents? (Enter yes or no) "; //prompt user to append contents
    cin >> append;
    
    if(append=="yes"){
    ob.open("test.txt", ios:: in);	//if the user chooses yes to append file open the file in reading mode
	while (!ob.eof())
	{
		string str;
		ob >> str;	//reading word by word from file and storing in str
		cout << str << "\n";	//printing file contents
	}
	ob.close();	//closing the file after use
    }
    else {
        ob.close(); //if user chooses not to append then close program
    }

	return 0;


}