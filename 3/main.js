 // ფუნქცია არითმეტიკული საშუალოსთვის
  function calculateArithmeticMean(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }

  // ფუნქცია ნამრავლისთვის
  function calculateProduct(numbers) {
    if (numbers.length === 0) return 0;
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  }

  // ფუნქცია ჯამის გამოსათვლელად
  function calculateSum(numbers) {
    if (numbers.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  // არითმეტიკული საშუალო
  document.getElementById('arithmeticMean').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const numbers = numberInput.split(':').map(Number);
    const arithmeticMean = calculateArithmeticMean(numbers);
    alert(`Arithmetic Mean: ${arithmeticMean}`);
  });

  // ნამრავლი
  document.getElementById('multiplication').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const numbers = numberInput.split(':').map(Number);
    const product = calculateProduct(numbers);
    alert(`Product: ${product}`);
  });

  // ჯამი
  document.getElementById('sum').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const numbers = numberInput.split(':').map(Number);
    const sum = calculateSum(numbers);
    alert(`Sum: ${sum}`);
  });