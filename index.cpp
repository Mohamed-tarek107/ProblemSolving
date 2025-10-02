#include <iostream>
#include <algorithm>

using namespace std;


  // ======== OOP =========
    class Car {

    private:
        //properties
        string brand;
        string model;
        int year;

        //methods
    public:
        void displayInfo(){
            cout << "Brand: " << brand << endl;
            cout << "Model: " << model << endl;
            cout << "Year: " << year << endl;
        }

        //setters / getters   => encapsulation 3shan kol haga tefdl privet w el user mayl3bsh b bad data
        void setBrand(string n){
            n.erase(remove_if(n.begin(), n.end(), ::isdigit), n.end());
            brand = n;
        }

        string getBrand(){
            return brand;
        }
    };

//child => inhertiance is a piller of oop
class ElectricCar : public Car {
    private:
            int batteryCapacity;

    public:
    //constructor
    ElectricCar(int year, string brand, string model, int batterycapacity){
        Car::setBrand(brand);
    };

        void setBattery(int b){
            batteryCapacity = b;
        }
        
        int getBattery(){
            return batteryCapacity;
        }
};

int main()
{

    // //============ pyramid challenge ============

    // int rows;
    // cout << "Enter Rows:"<< endl;
    // cin >> rows;

    // // //    *
    // // //   ***
    // // //  ******
    // // // ********
    
    // // //itarate over every row
    // for(int i = 1; i <= rows; i++){
    //     //print spaces
    //     for(int j = 0; j <= rows - i; j++){
    //         cout<<" ";
    //     }

    //     //print *
    //     for(int s = 1; s <= (i * 2) - 1; s++){
    //         cout<<"*";
    //     }
    //     cout << endl;
    // }





    // // ========== pointers =========

    // int x = 5;
    // cout << "memory address: "<< &x << endl;

    // int *y = &x;
    // cout << y <<endl;
    // cout << "value:"<< *y << endl;

    // delete y;


    // ======== OOP =========
    Car car1;
    Car car2;

    car1.setBrand("BMW12312312");
    car2.setBrand("Mercedes78744");

    cout << "========" << endl;
    car1.displayInfo();
    cout << "========" << endl;
    car2.displayInfo();
    
}

