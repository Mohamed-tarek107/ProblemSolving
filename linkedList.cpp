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
        Node *newnode;            // 1
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
};

int main()
{

    return 0;
}
