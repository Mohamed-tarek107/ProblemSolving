#include <iostream>
using namespace std;


int main()
{

    //============ pyramid challenge ============

    int rows;
    cout << "Enter Rows:"<< endl;
    cin >> rows;

    // //    *
    // //   ***
    // //  ******
    // // ********
    
    // //itarate over every row
    for(int i = 1; i <= rows; i++){
        //print spaces
        for(int j = 0; j <= rows - i; j++){
            cout<<" ";
        }

        //print *
        for(int s = 1; s <= (i * 2) - 1; s++){
            cout<<"*";
        }
        cout << endl;
    }





    // ========== pointers =========

    int x = 5;
    cout << "memory address: "<< &x << endl;

    int *y = &x;
    cout << y <<endl;
    cout << "value:"<< *y << endl;

    delete y;


    
}