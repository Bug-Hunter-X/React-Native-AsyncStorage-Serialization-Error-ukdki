```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@my_stored_key', jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@my_stored_key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};

// Example usage (Corrected):
const myData = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

storeData(myData);

getData().then(data => console.log('Retrieved data:', data));
```