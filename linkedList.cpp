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

    Linkedlist()
    {
        head = NULL;
    };

    bool isempty()
    {
        return (head == NULL);
    }

    void inserFirst(int newvalue)
    {
        Node *newnode = new Node;
        newnode->data = newvalue;

        if (isempty())
        {
            newnode->next = NULL;
            head = newnode;
        }
        else
        {
            newnode->next = head;
            head = newnode;
        }
    }

    void display()
    {
        Node *temp = head;
        cout << "\nCurrent Linked List: ";

        if (temp == NULL)
        {
            cout << "[Empty]\n";
            return;
        }

        while (temp != NULL)
        {
            cout << temp->data;
            if (temp->next != NULL)
                cout << " -> ";
            temp = temp->next;
        }
        cout << "\n----------------------------------------\n";
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
        Node *temp = head;
        while (temp != NULL)
        {
            if (temp->data == key)
                return true;
            temp = temp->next;
        }
        return false;
    }

    void insertBefore(int item, int newvalue)
    {
        if (isempty())
        {
            inserFirst(newvalue);
        }

        cout << "\nInserting " << newvalue << " before " << item << "...\n";
        if (!isfound(item))
        {
            cout << "Item " << item << " not found in the list.\n";
            cout << "----------------------------------------\n";
            return;
        }

        Node *temp = head;

        // Case: Insert before head
        if (head->data == item)
        {
            Node *newnode = new Node;
            newnode->data = newvalue;
            newnode->next = head;
            head = newnode;
            cout << "Inserted " << newvalue << " before head.\n";
            cout << "----------------------------------------\n";
            return;
        }

        // Traverse to node before target
        while (temp->next != NULL && temp->next->data != item)
        {
            temp = temp->next;
        }

        Node *newnode = new Node;
        newnode->data = newvalue;
        newnode->next = temp->next;
        temp->next = newnode;

        cout << "Inserted " << newvalue << " before " << item << ".\n";
        cout << "----------------------------------------\n";
    }
    void append(int value)
    {

        if (isempty())
        {
            inserFirst(value);
            return;
        }

        Node *temp = head;

        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        Node *newnode = new Node;
        newnode->data = value;
        temp->next = newnode;
        newnode->next = NULL;
    }

    void Delete(int item)
    {
        if (isempty())
        {
            cout << "List is empty, no items to delete \n";
            return;
        }

        // case 1
        if (head->data == item)
        {
            Node *delptr = head;
            head = head->next;
            delete delptr;
        }
        else
        {
            // case 2
            Node *delptr = head;
            Node *prev = NULL;

            while (delptr->data != item)
            {
                prev = delptr;
                delptr = delptr->next;
            }
            prev->next = delptr->next;
            delete delptr;
        }
    }
};

int main()
{
    cout << "----------------------------\n";
    cout << "          Tarek app\n";
    cout << "----------------------------\n";
    Linkedlist list;

    cout << "----------------------------------------\n";
    if (list.isempty())
        cout << "The list is currently empty.\n";
    else
        cout << "The list contains " << list.count() << " nodes.\n";
    cout << "----------------------------------------\n";

    int item;
    for (int i = 1; i <= 3; i++)
    {
        cout << "Enter value for node " << i << ": ";
        cin >> item;
        list.inserFirst(item);
        list.display();
    }

    cout << "\nThe list now contains " << list.count() << " nodes.\n";

    cout << "\nEnter item to search: ";
    cin >> item;

    if (list.isfound(item))
        cout << "Item " << item << " found in the list.\n";
    else
        cout << "Item " << item << " not found.\n";

    cout << "\nEnter [existing item] and [new value] to insert before it:\n";
    int newvalue;
    cout << "Existing item: ";
    cin >> item;
    cout << "New value: ";
    cin >> newvalue;

    list.insertBefore(item, newvalue);
    list.display();

    cout << "\nFinal list ready.\n";
    cout << "----------------------------------------\n";

    return 0;
}
