
using namespace std;

class Solution {
    
public:

    bool canMeasureWater(int firstJugCapacity, int secondJugCapacity, int targetCapacity) {
        if (firstJugCapacity + secondJugCapacity < targetCapacity) {
            return false;
        }
        return targetCapacity % greatesrCommonDivisor(firstJugCapacity, secondJugCapacity) == 0;
    }

private:

    int greatesrCommonDivisor(int firstJugCapacity, int secondJugCapacity) {
        return firstJugCapacity == 0 ?
               secondJugCapacity :
               greatesrCommonDivisor(secondJugCapacity % firstJugCapacity, firstJugCapacity);
    }
};
