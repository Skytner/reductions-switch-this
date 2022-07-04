let result = prompt('Выберите одно из следующих: JS, HTML, CSS')
result = result == 'JS' ? 'JS' : 
  result == 'HTML' ? 'HTML' :
  result == 'CSS' ? 'CSS' :
  'Ничего из перечисленного не выбрано';

  alert(result)