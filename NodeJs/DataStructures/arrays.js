// Execute file with node array.js

// In javascript we do not have to declare primitive data types 
// we can store any data type in our variable.
const sneakers = [1,2,3,4,5,6,7,8,9];

const getSneakers = () => {
    console.log("Item in index 2 of the sneakers collection is " + sneakers[2])
    console.log("The original array elements are :")

    for(i = 0; i < 5; i++) {
        //console.log("Sneaker" + "["+ sneakers.findIndex(sneaker => sneaker > i) + "] = " + sneakers[i])
        sneakerCollection = sneakers[i]
        console.log("Sneaker" + "["+ sneakers.findIndex(sneaker => sneaker > i) + "] = " + sneakerCollection)

    }
};

getSneakers();


#include <iostream>
#include <stdlib.h>
#include <iomanip>
#include <string>




using namespace std;

int main()
{
    const char separator    = ' ';
    const int nameWidth     = 6;
    const int numWidth      = 8;

    char day[3],month[3],year[5];
    char start_date, end_date;
    char start_time, end_time;
    int total_days;
    double airfare;
    double car_rental;
    int mileage;
    double parking;
    double taxi;
    double event;
    double hotel;
    double budget;
    double total_expenses;
    double balance;
    double total_due;

    int start_hour, start_minute;
    int end_hour, end_minute;
    int dest_miles;
    char c;
    
    // 1.Start Date
    cout<<"Please input the trip start date in 'dd/mm/yyyy' format: ";
	cin.get(day,4,'/');
	cin.ignore(100,'/');
	cin.get(month,3,'/');
	cin.ignore(100,'/');
	cin.get(year,5);
    // 2. Start Hour
    cout << "Please input your trip start time (HH:MM): ";
    cin >> start_hour >> c >> start_minute;
    // start_time = start_hour ">> c >>" start_minute;
    // 3. End Date
    cout<<"Please input the date of your trip end in 'dd/mm/yyyy' format: ";
	cin.get(day,4,'/');
	cin.ignore(100,'/');
	cin.get(month,3,'/');
	cin.ignore(100,'/');
	cin.get(year,5);
    // 4. End Hour
    cout << "Please enter your trip end time (HH:MM): ";
    cin >> end_hour >> c >> end_minute;
    // end_time = end_hour >> c >> end_minute;
    //convert them to int
	int d,m,y;
	d=atoi(day);
	m=atoi(month);
	y=atoi(year);
    // **Days on Trip**
    cout << "Please input the total days spent on business trip:";
    cin >> total_days;
    // 5. Airfare 
    cout << "Please input the total cost of round-trip airfare: ";
    cin >> airfare;
    // 5. Car rental 
    cout << "Please input the total cost of car rental fees: ";
    cin >> car_rental;
    // 6. Mileage
    cout << "Please input the total mileage driven: ";
    cin >> mileage;
    // 6. Taxi/Uber
    cout << "Please input the total cost of taxi/uber fees: ";
    cin >> taxi;
    // 6. Conference/Seminar
    cout << "Please input the total cost of conference/seminar fees: ";
    cin >> event;
    // 6. Hotel Fees
    cout << "Please input the total cost of hotel fees: ";
    cin >> hotel;
    budget = 1000;
    total_expenses = 987;
    balance = 31;
    total_due = 0;

    //Output Travel Expense Report
    std::cout << std::string(13*3 + 2*3, '-') << "\n";
    std::cout << std::left << std::setw(20) << "Travel Expense Report" << '\n';
    std::cout << std::string(13*3 + 2*3, '-') << "\n";
    std::cout << std::left << std::setw(20) << "Start Date:" << std::right << std::setw(16) << d<<"/"<<m<<"/"<<y << '\n';
    std::cout << std::left << std::setw(20) << "Start Time:" << std::right << std::setw(16) << start_time << '\n';
    std::cout << std::left << std::setw(20) << "End Date:" << std::right << std::setw(16) << d<<"/"<<m<<"/"<<y << '\n';
    std::cout << std::left << std::setw(20) << "End Time:" << std::right << std::setw(16) << end_time << '\n';
    std::cout << std::left << std::setw(20) << "Days on Trip:" << std::right << std::setw(16) << total_days << '\n';
    std::cout << '\n';
    std::cout << std::left << std::setw(20) << "Round-trip Airfare:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << airfare << '\n';
    std::cout << std::left << std::setw(20) << "Car Rental fees:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << car_rental << '\n';
    std::cout << std::left << std::setw(20) << "Mileage:" << std::right << std::setw(17) << mileage << '\n';
    std::cout << std::left << std::setw(20) << "Parking Fees:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << parking << '\n';
    std::cout << std::left << std::setw(20) << "Taxi/Uber fees:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << taxi << '\n';
    std::cout << '\n';
    std::cout << std::left << std::setw(20) << "Event fees:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << event << '\n';
    std::cout << std::left << std::setw(20) << "Hotel expenses:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << hotel << '\n';
    std::cout << '\n';
    std::cout << std::left << std::setw(20) << "Allowable Budget:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << budget << '\n';
    std::cout << std::left << std::setw(20) << "Total Expenses:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << total_expenses << '\n';
    std::cout << std::left << std::setw(20) << "Balance:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << balance << '\n';
    std::cout << std::string(13*3 + 2*3, '-') << "\n";
    std::cout << std::left << std::setw(20) << "Total Due:" << std::right << std::setw(16) << std::fixed << std::setprecision(2) << "$" << total_due << '\n';
    cout << endl;

    return 0;
}