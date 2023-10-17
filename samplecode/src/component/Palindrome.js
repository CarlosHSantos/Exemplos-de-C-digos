import {useState} from 'react';

const Palindrome = () => {

  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    setIsPalindrome(checkPalindrome(inputValue));
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a word"
      />
      <p>{isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.'}</p>
    </div>
  )
}

export default Palindrome