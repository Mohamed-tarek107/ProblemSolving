#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
};

class Linkedlist
{
public:
    Node *head;

    // constructor
    Linkedlist()
    {
        head = NULL;
    };

    bool isempty()
    {
        return (head == NULL);
    }

    // create:
    // 1- Create new node
    // 2- fill data
    // 3- set next to NULL
    // 4- head points to new node

    void inserFirst(int newvalue)
    {
        // metkarara fa hanhotha fo2 w khalas
        Node *newnode = new Node;            // 1
        newnode->data = newvalue; // 2
        if (isempty())
        {
            newnode->next = NULL; // 3
            head = newnode;       // 4
        }
        else
        {
            newnode->next = head; // 3
            head = newnode;       // 4
        }
    }

    void display()
    {
        Node *temp = head;

        // traversing
        while (temp != NULL)
        {
            cout << temp->data << " \n";
            temp = temp->next;
        }
    }

    int count()
    {
        int counter = 0;
        Node *temp = head;

        while (temp != NULL)
        {
            counter++;
            temp = temp->next;
        }
        return counter;
    }

    bool isfound(int key)
    {
        bool found = false;
        Node *temp = head;

        while (temp != NULL)
        {
            if (temp->data == key)
            {
                found = true;
                break;
            }
            temp = temp->next;
        }
        return found;
    }
};

int main()
{
    Linkedlist list;

    if(list.isempty()){
        cout << "The List is empty \n";
    }else{
        cout << "The list contains" << list.count() << endl;
    }

        int item;
        cout << "Enter you Node Data: \n";
        
        cin >> item;
        list.inserFirst(item);
        list.display();

        cout << "Enter you Node Data: \n";
        
        cin >> item;
        list.inserFirst(item);
        list.display();

        cout << "Enter you Node Data: \n";
        
        cin >> item;
        list.inserFirst(item);
        list.display();

        cout << "The list contains" << list.count() << endl;


        cout << "Enter item to search \n";
        cin >> item;
        if(list.isfound(item)){
            cout << "Item found";
        }else{
            cout << "Item not found";
        }

        
    

    return 0;
}
