#include <ctime>
#include <iostream>
#include <random>

class ArrayHandler
{
private:
    int ItemCount = 0;
    int* Array = nullptr;
public:
    ArrayHandler(int itemCount)
        : ItemCount(itemCount), Array(new int[ItemCount])
    {
        if (Array != nullptr)
        {
            for (int i = 0; i < ItemCount; ++i)
            {
                Array[i] = 1 + rand() % 1000;
            }
        }
    };

    ~ArrayHandler()
    {
        delete Array;
    }

    /**********************************************
    nazwa metody : PrintItems
    opis metody : metoda wyświetla wszystkie elementy tablicy
    parametry : brak
    zwracany typ i opis : brak
    autor : 00000000000
    ***********************************************/
    void PrintItems()
    {
        if (Array != nullptr)
        {
            std::cout << "Items in the array:\n";
            for (int i = 0; i < ItemCount; ++i)
            {
                std::cout << i << ": " << Array[i] << '\n';
            }
        }
    }

    /**********************************************
    nazwa metody : FindItemIndex
    opis metody : metoda szuka index elementu o podanej wartości
    parametry : int item - wartość szukanego elementu
    zwracany typ i opis : int - index lub -1
    autor : 00000000000
    ***********************************************/
    int FindItemIndex(int item)
    {
        if (Array != nullptr)
        {
            for (int i = 0; i < ItemCount; ++i)
            {
                if (Array[i] == item)
                    return i;
            }
        }

        return -1;
    }

    /**********************************************
    nazwa metody : PrintOddItems
    opis metody : metoda wyświetla wszystkie nieparzyste elementy tablicy
    parametry : brak
    zwracany typ i opis : int - liczba nieparzystych elementów
    autor : 00000000000
    ***********************************************/
    int PrintOddItems()
    {
        int oddCount = 0;

        if (Array != nullptr)
        {
            std::cout << "Odd Items in the array:\n";
            for (int i = 0; i < ItemCount; ++i)
            {
                if (Array[i] % 2 == 1)
                {
                    oddCount++;
                    std::cout << Array[i] << '\n';
                }
            }
        }

        return oddCount;
    }

    /**********************************************
    nazwa metody : GetAverage
    opis metody : metoda liczy średnią elementów tablicy
    parametry : brak
    zwracany typ i opis : int - średnia
    autor : 00000000000
    ***********************************************/
    int GetAverage()
    {
        if (Array == nullptr || ItemCount <= 0)
        {
            return 0;
        }

        int sum = 0;

        for (int i = 0; i < ItemCount; ++i)
        {
            sum += Array[i];
        }

        return sum / ItemCount;
    }
};

int main()
{
    std::srand(std::time(nullptr));

    ArrayHandler arrayHandler{ 22 };

    arrayHandler.PrintItems();

    const int pos = arrayHandler.FindItemIndex(150);

    if (pos != -1)
    {
        std::cout << "Found 150 at the index: " << pos << '\n';
    }

    const int odds = arrayHandler.PrintOddItems();
    std::cout << "Odd items count: " << odds << '\n';

    const int avg = arrayHandler.GetAverage();
    std::cout << "Average of all items: " << avg << '\n';

}
